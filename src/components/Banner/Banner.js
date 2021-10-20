import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="main">
      <div className="container mx-auto row">
        <div className="title col-sm-12 col-md-6 col-lg-4 items">
          <div>
            <h1>Why Choose Us?</h1>
            <hr className="hr" />
          </div>
        </div>
        <div className="para col-sm-12 col-md-6 col-lg-4 items">
          <p>
            Nunc purus sodales quis, purus a arcu, ultricies dui, ipsum eget,
            massa metus sed. Odio arcu dolor, facilisis adipiscing nam mauris
            suspendisse.
          </p>
        </div>
        <div className="adress col-sm-12 col-md-6 col-lg-4 items">
          <div>
            <h4>Booking Now</h4>
            <h4>24/7 service avaliable</h4>
            <h4>04854 54440 4548</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
