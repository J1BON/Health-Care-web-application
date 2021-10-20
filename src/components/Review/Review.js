import React from "react";
import "./Review.css";

const Review = () => {
  return (
    <div>
      <div class="testim">
        <div class="container">
          <h2>Testimonials</h2>
          <div class="testim-content row">
            <div class="testim-box col-sm-12 col-md-12 col-lg-12">
              <p>
                The entire team on 8th floor, from housekeeping to nursing to
                treating doctors, all are very helpful
              </p>
              <div class="testim-box-content">
                <img
                  src="https://cdn.pixabay.com/photo/2017/08/07/14/15/portrait-2604283_960_720.jpg"
                  alt=""
                />
                <h3>Joe Anna</h3>
                <p>Senior Teaher</p>
              </div>
            </div>
            <div class="testim-box col-sm-12 col-md-12 col-lg-12">
              <p>
                We really appreciate the help of Dr. G. N. Mansukhani during
                this period of pregnancy. All staff on.
              </p>
              <div class="testim-box-content">
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg"
                  alt=""
                />
                <h3>Mahmoud Jamil</h3>
                <p>Driver</p>
              </div>
            </div>
            <div class="testim-box col-sm-12 col-md-12 col-lg-12">
              <p>
                Very good treatment and care taking team of Dr. Firuza Parikh
                and all doctors of the same team
              </p>
              <div class="testim-box-content">
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg"
                  alt=""
                />
                <h3>Jon Snow</h3>
                <p>Artist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
