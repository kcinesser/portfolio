import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar__logo">
          <Link to="/portfolio/">nick.esser</Link>
        </div>
        <div className="navbar__nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
