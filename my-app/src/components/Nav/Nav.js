import React from "react";
import "./Nav.css";

const Nav = props => (

  <nav className="navbar">
    <h1 className="brand">
      <a href="/">{props.children}</a>
    </h1>
    <h1 className="">You guessed Correctly!</h1>
    <h1>Score: 0 | Top Score: 5</h1>
  </nav>
);

export default Nav; 