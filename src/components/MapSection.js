import React from "react";
import mapImg from "../assets/images/map.jpg";
const MapSection = () => {
  return (
    <div className="map-section">
      <div className="map-section__text">
        <h4>We are Present in alot of contries in the world</h4>
        <h2>
          <span className="bold">Where do</span> we go and offer our services?
        </h2>
        <p>
          You can create your website depending on your specialty plus Elly
          possibility to modify the design.You can create your website depending
          <br /> on your specialty plus Elly possibility to modify the design.
        </p>
      </div>
      <div className="map-section__map">
        <img src={mapImg} alt="" />
      </div>
    </div>
  );
};

export default MapSection;
