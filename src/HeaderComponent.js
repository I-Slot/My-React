import React from "react";
import logo from "./logo.svg";

function HeaderComponent() {
  return (
    <header>
      <nav className="nav">
        {/* <p className="react-logo">
          React <span>Logo</span>
        </p> */}
        <img src={logo} alt="React-logo" ></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}


export default HeaderComponent