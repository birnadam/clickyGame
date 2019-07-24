import React from "react";
import "./Nav.css";

const Nav = props => (

  <nav className="navbar">
    <h1 className="brand">
      {props.title}
    </h1>
    <h1>Score: {props.score} | Top Score: {props.topscore} </h1>
  </nav>
);

export default Nav; 