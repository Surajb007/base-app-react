import React, { Component } from "react";
import axios from "axios";

export default class Signin extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post(process.env.REACT_APP_API_URI + "/tokens", data)
      .then(res => {
        window.localStorage.setItem("jwt", res.data.jwt);
        this.props.history.push("/dashboard");
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <React.Fragment>
        <h3>Sign In</h3>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Username : </label>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <br />
            <label>Password : </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />
            <input type="submit" />
          </form>
        </div>
      </React.Fragment>
    );
  }
}
