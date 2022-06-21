import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
function navbar() {
  return (
    <div className="navbar-container">
      <h1 className="nav-head ">Scramble</h1>

      <div className="button-container">
        <Link to="/">
          <button className="button-85">Reset</button>
        </Link>
      </div>
    </div>
  );
}

export default navbar;
