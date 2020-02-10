import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <div className="login">
        <span>
          <h2> Fornever Note </h2>
          <h2> Login </h2>
          <form className="login-form">
            <input
              className="login-input"
              type="text"
              name="username"
              placeholder="Username"
            />
            <input
              className="login-input"
              type="password"
              name="password"
              placeholder="Password"
            />
            <input id="submit" type="submit" value="Login" />
          </form>
          <Link to="/signup">Signup</Link>
        </span>
      </div>
    );
  }
}

export default Login;
