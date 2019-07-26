import React, { Component } from "react";
import JwtDecode from "jwt-decode";

export default class Dashboard extends Component {
  state = {
    username: ""
  };
  componentDidMount = () => {
    const jwt = window.localStorage.getItem("jwt");
    const result = JwtDecode(jwt);
    this.setState({ username: result.username });
  };
  render() {
    return <p>Hi {this.state.username}, You are now Signed In</p>;
  }
}
