import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/loginregistration">
          <li>Login/Registration</li>
        </Link>
        <Link to="/clientprofile">
          <li>Client Profile</li>
        </Link>
        <Link to="/fuelquote">
          <li>Fuel Quote</li>
        </Link>
        <Link to="/fuelquotehistory">
          <li>Fuel Quote History</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
