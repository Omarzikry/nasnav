import React from "react";
import studioImg from "../assets/images/studio.png";
import lapImg from "../assets/images/laptop2.png";
import lap3Img from "../assets/images/laptop3.png";
import mobileImg from "../assets/images/mobile.png";
import lap4Img from "../assets/images/laptop4.png";
import visasImgs from "../assets/images/visas.png";
import lap5Img from "../assets/images/laptop5.png";
const ShowCase = () => {
  return (
    // show case component
    <div className="show-case">
      <h2 className="show-case__title">
        Statistics include all tasks for your shop with distinct view
      </h2>
      <p className="show-case__subtitle">
        We've designed an integrated system for the cash register to be able to
        implement many features with ease, but we'll explain partial scan and
        its implementation
      </p>
      {/* show case Grid */}
      <div className="show-case__grid">
        {/* show case row*/}
        <div className="row">
          <div className="col-md-6">
            <img src={studioImg} alt="" />
          </div>
          <div className="col-md-6 show-case__grid__text">
            <h3 className="show-case__grid__text__subtitle">Navbox Editor</h3>
            <h2 className="show-case__grid__text__title">
              organize your form as you want.shaving in google sky
            </h2>
            <p className="show-case__grid__text__description">
              You can create your website depending on your specialty plus Elly
              possibility to modify the design either color or icons or logo
              etc.
            </p>
            <button className="btn show-case__grid__text__btn">
              Live demo
            </button>
          </div>
          <div className="col-md-6 order-lg-1 order-2 show-case__grid__text show-case__grid__text-left">
            <h3 className="show-case__grid__text__subtitle">
              Nasnav easy and fast.
            </h3>
            <h2 className="show-case__grid__text__title">
              What do you think of an easy experience !
            </h2>
            <p className="show-case__grid__text__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="show-case__grid__text__description">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              anim id est laborum.
            </p>
          </div>
          <div className="col-md-6 order-lg-2 order-1">
            <img src={lapImg} className="pr-md-5 pt-5" alt="" />
          </div>
          <div className="col-md-6 order-3">
            <img src={lap3Img} className="pr-md-5 lap3img" alt="" />
          </div>
          <div className="col-md-6 show-case__grid__text order-4">
            <h3 className="show-case__grid__text__subtitle">
              Nasnav easy and fast.
            </h3>
            <h2 className="show-case__grid__text__title">
              Control the display of your panoramas in your site !
            </h2>
            <p className="show-case__grid__text__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="show-case__grid__text__description">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              anim id est laborum.
            </p>
          </div>
        </div>
        {/* products section */}
        <div className="row add-products">
          <div className="col-md-4 add-products__mobile-container">
            <img src={mobileImg} alt="" />
          </div>
          <div className="col-md-4">
            <h2 className="show-case__grid__text__title add-products__title">
              A few steps to add your products
            </h2>
            <p className="show-case__grid__text__description add-produts__description">
              You can create your website depending on your specialty plus Elly
              possibility to modify the design either color or icons or logo
              etc.
            </p>
            <div className="add-products__card">
              <p>online shopping</p>
              <div className="add-products__card__visas">
                <img src={visasImgs} alt="visas" />
              </div>
            </div>
            <p className="show-case__grid__text__description add-produts__description">
              What is the correct spelling for BECONS? This word (Becons) may be
              misspelled. Below you can find the suggested words which we
              believe are check the spelling
            </p>
          </div>
          <div className="col-md-4">
            <img src={lap4Img} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src={lap5Img} className="pr-md-5 lap3img" alt="" />
          </div>
          <div className="col-md-6 show-case__grid__text">
            <h3 className="show-case__grid__text__subtitle">
              Nasnav easy and fast.
            </h3>
            <h2 className="show-case__grid__text__title">
              Manage your company branches easily
            </h2>
            <p className="show-case__grid__text__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="show-case__grid__text__description">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
