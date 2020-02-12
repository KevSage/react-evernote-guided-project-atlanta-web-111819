import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Signup extends Component {
  state = {
    name: "",
    password: "",
    confirmation: ""
  };

  handleFormInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  };
  createUser = event => {
    event.preventDefault();
    if (this.state.password !== this.state.confirmation) {
      alert("Passwords must match");
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
      let newUser = {
        user: {
          name: this.state.name,
          password: this.state.password
        }
      };
      debugger;
      fetch("http://localhost:3000//api/v1/users", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          this.props.history.push("/login");
        });
    }
  };

  render() {
    return (
      <div className="login">
        <div className="signup">
          <span>
            <h2> Fornever Note </h2>
            <form
              className="login-form"
              onSubmit={event => this.createUser(event)}
            >
              <input
                className="login-input"
                type="text"
                name="name"
                placeholder="Username"
                onChange={this.handleFormInput}
              />
              <input
                className="login-input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleFormInput}
              />
              <input
                className="login-input"
                type="password"
                name="confirmation"
                placeholder="Confirm Password"
                onChange={this.handleFormInput}
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
