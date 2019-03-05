import React from "react";
import laptopImage from "../assets/images/laptop.png";
import shapeImage from "../assets/images/waveshape1.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__grid">
        <div className="hero__grid__text">
          <h2>
            <span className="bold">Device </span>
            download all your products on Google search engine
          </h2>
          <p>
            Our services are not to be reckoned with upload Producs can
            slipingin your home and see the you an edge over the online
            competitors.of big businesses data
          </p>
          <button className="btn">Get Started</button>
        </div>
        <div className="hero__grid__img">
          <img src={laptopImage} alt="laptop" />
        </div>
      </div>
      <img src={shapeImage} alt="" className="hero__wave" />
    </div>
  );
};

export default Hero;
