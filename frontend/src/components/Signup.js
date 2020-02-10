import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Signup extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <div className="login">
        <div className="signup">
          <span>
            <h2> Fornever Note </h2>
            <h2> Sign Up </h2>
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
              <input
                className="login-input"
                type="password"
                name="confirm passwprd"
                placeholder="Confirm Password"
              />
              <input id="submit" type="submit" value="Sign Up" />
            </form>
          </span>
        </div>
      </div>
    );
  }
}

export default Signup;
