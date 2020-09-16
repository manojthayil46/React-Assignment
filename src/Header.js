import React, { Component } from "react";
import logo from "./logo.svg";
import "./Header.css";
import { NavLink } from "react-router-dom";

export default class header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} className="header__logo" alt="logo" />
        <div className="header__items">
          <NavLink exact to="/" activeClassName="active">
            <div className="header__options">Home</div>
          </NavLink>

          <NavLink exact to="/Tasks" activeClassName="active">
            <div className="header__options" activeClassName="active">
              Tasks
            </div>
          </NavLink>
          <NavLink exact to="/User" activeClassName="active">
            <div className="header__options">User</div>
          </NavLink>
        </div>
      </div>
    );
  }
}
