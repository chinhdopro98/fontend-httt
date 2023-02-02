import React from "react";
import { Link, useNavigate } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <h2>NavBar</h2>
      <div className="menu">
        <ul>
          <li>
            <Link to="/app">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
