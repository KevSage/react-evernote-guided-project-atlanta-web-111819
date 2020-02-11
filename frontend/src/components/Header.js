import React from "react";
// import { NavLink, Router } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

const Header = props => {
  return (
    <div className="nav-bar">
      <ul>
        <li className="nav-item">
          <h2>ForNever Note</h2>
        </li>
      </ul>
      <p>{props.userName}</p>
      <NavLink onClick={props.handleClick} to="/login">
        Logout
      </NavLink>
    </div>
  );
};

export default Header;
