import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
                Welcome to Medik. We provide best medical service in town. For
                any kind of health related service visir our hospital. Here we
                have all kinds of modern machine that's all need for modern
                checkup and treatment. We have a large amount of ambulane for
                emergency situation.
              </p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul class="footer-links">
                <li>Tumor</li>
                <li>Cancer</li>
                <li>Surgery</li>
                <li>Oral</li>
                <li>Dental</li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>Contibute</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2017 All Rights Reserved by Jiban Ahammed
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li>
                  <Link class="facebook">
                    <i class="fa fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link className="twitter">
                    <i class="fa fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link class="dribbble">
                    <i class="fa fa-dribbble"></i>
                  </Link>
                </li>
                <li>
                  <Link class="linkedin">
                    <i class="fa fa-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
