import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/images/logo.png";
const Header = () => {
  const toggleMenu = () => {
    var element = document.getElementById("nav-bar");
    element.classList.toggle("open");
  };
  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <img src={logoImage} alt="nasnav logo" />
      </Link>
      <button className="header__toggleMenu" onClick={toggleMenu}>
        <i className="fas fa-bars" />
      </button>
      <nav id="nav-bar">
        <Link to="#">Navbox</Link>
        <Link to="#">NavStyle</Link>
        <Link to="#">Shopping</Link>
        <Link to="#">360 Editor</Link>
        <Link to="#">Dashboard</Link>
        <button className="btn header__getStarted">Get Started</button>
      </nav>
    </div>
  );
};

export default Header;
