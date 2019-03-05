import React from "react";
import footerLogo from "../assets/images/nasnav-blue.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-md-2 col-6 offset-md-1">
          <p className="bold">London</p>
          <p className="location">The United Kingdom number 5011</p>
          <p className="position">Customer Service</p>
          <p className="number">0052635458</p>
          <p className="mail">london@nasorg.co</p>
        </div>
        <div className="col-md-2 col-6">
          <p className="bold">Egypt</p>
          <p className="location">The United Kingdom number 5011</p>
          <p className="position">Customer Service</p>
          <p className="number">0052635458</p>
          <p className="mail">london@nasorg.co</p>
        </div>
        <div className="col-md-2 col-6">
          <p className="bold">Kuwait</p>
          <p className="location">The United Kingdom number 5011</p>
          <p className="position">Customer Service</p>
          <p className="number">0052635458</p>
          <p className="mail">london@nasorg.co</p>
        </div>
        <div className="col-md-2 col-6">
          <p className="bold">Nigeria</p>
          <p className="location">The United Kingdom number 5011</p>
          <p className="position">Customer Service</p>
          <p className="number">0052635458</p>
          <p className="mail">london@nasorg.co</p>
        </div>
        <div className="col-md-2 col-6">
          <p className="bold">Pakistan</p>
          <p className="location">The United Kingdom number 5011</p>
          <p className="position">Customer Service</p>
          <p className="number">0052635458</p>
          <p className="mail">london@nasorg.co</p>
        </div>
      </div>
      <img src={footerLogo} alt="" className="footer-logo" />
    </div>
  );
};

export default Footer;
