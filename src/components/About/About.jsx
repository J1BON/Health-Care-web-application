import React from "react";
import Review from "../Review/Review";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="bg-dark p-5 text-white d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1>About Us</h1>
          <p>Know the story about us</p>
        </div>
      </div>
      <div className="main-point">
        <div className="section row container mx-auto">
          <div className="col-sm-12 col-md-6 col-lg-3 d-flex item-all mx-auto">
            <div className="icon">
              <i class="fas fa-dna"></i>
            </div>
            <div className="text">
              <h4>Advanced medical technologies</h4>
              <p className="text-muted">
                We provide best service in the down. We have all kind of modern
                machine for daily checkup
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 d-flex item-all mx-auto">
            <div className="icon">
              <i class="fas fa-star-of-life"></i>
            </div>
            <div className="text">
              <h4>High professionalism of specialists</h4>
              <p className="text-muted">
                Our professional doctora all are specialists. They all have high
                degree with a great exprience and skills.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 d-flex item-all mx-auto">
            <div className="icon">
              <i class="fas fa-clock"></i>
            </div>
            <div className="text">
              <h4>Optimal prices and quality</h4>
              <p className="text-muted">
                We know the importance of time in your life. That's why we don't
                waste time to start any treatmaent.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Review></Review>
    </div>
  );
};

export default About;
