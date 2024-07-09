import React from "react";
import logo from "../images/Logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <img src={logo}></img>E commerce
        </div>
        <div className="header-menu">
          <h2>Home</h2>
          <h2>Pages</h2>
          <h2>Services</h2>
          <h2>Project</h2>
          <h2>Blog</h2>
          <h2>Contact</h2>
        </div>
      </div>
    </>
  );
};

export default Header;
