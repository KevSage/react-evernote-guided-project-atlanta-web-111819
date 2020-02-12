import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends Component {
  state = {
    name: "",
    password: ""
  };

  handleFormInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("http://localhost:3000//api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: { ...this.state } })
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("token", data.token);
        this.props.history.push("/");
      });
    // console.log(event.target);
  };

  render() {
    return (
      <div className="login">
        <span>
          <h2> Fornever Note </h2>
          <form
            className="login-form"
            onSubmit={event => this.handleSubmit(event)}
          >
            <input
              className="login-input"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleFormInput}
              placeholder="Username"
            />
            <input
              className="login-input"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleFormInput}
              placeholder="Password"
            />
            <input id="submit" type="submit" value="Login" />
          </form>
          <Link id="submit" to="/signup">
            Signup
          </Link>
        </span>
      </div>
    );
  }
}

export default Login;
