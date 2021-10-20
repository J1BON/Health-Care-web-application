import React from "react";
import { Accordion, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllService from "../AllService/AllService";
import "./Home.css";
import qna from "../../q&a.jpg";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div className="slider1">
            <div className="slider-item item-1">
              <h1>
                We Have The Best Doctor <br />
                In The Town
              </h1>
              <p>- Contact us for any health serives</p>
              <p>
                <button className="about-btn">about us</button>{" "}
                <button className="call-btn">call back</button>
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slider2">
            <div className="slider-item item-2">
              <h1>
                Doctor Is In Your <br />
                Doorstep
              </h1>
              <p>- If you can't come to hospital. We can send doctor </p>
              <p>
                <button className="about-btn">about us</button>{" "}
                <button className="call-btn">call back</button>
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slider3">
            <div className="slider-item item-3">
              <h1>
                24/7 Ambulance <br />
                Service
              </h1>
              <p>- We are always ready to face emercency situation</p>
              <p>
                <button className="about-btn">about us</button>{" "}
                <button className="call-btn">call back</button>
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="container overflow-hidden my-5">
        <Banner></Banner>
      </div>
      {/* Services */}
      <AllService></AllService>
      {/* Service End */}
      {/* QNA Start */}
      <div className="container overflow-hidden my-5">
        <div className="qna-area d-lg-flex row">
          <div className="qna-text col-sm-12 col-md-6">
            <h2 className="fw-bold">Answers on questions</h2>
            <hr
              style={{
                width: "80px",
                height: "3px",
                backgroundColor: "#00d4e8",
              }}
            />
            <div className="qna">
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h6>How do I sign up for counseling?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    To make an appointment with us for a consultation, you can
                    call us at the numbers indicated on the website or leave
                    your message in a special feedback form. We will help you to
                    choose the right specialist and choose the time of reception
                    convenient for you.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <h6>Do I need psychotherapy?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    If there are any reasons that prevent you from feeling
                    comfortable in the world around you and want to understand
                    yourself and figure it out. If you have problems at work, in
                    communicating with strangers or close people. If you can not
                    make contact with your child.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <h6>How much do the counseling session cost?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    The cost of the consultation depends on the specialist you
                    need and the type of therapy and additional practices. To
                    make an appointment with us for a consultation, you can call
                    us at the numbers indicated on the website or leave your
                    message in a special feedback form.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <h6>Can I be sure of the privacy of your reciption?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    We are proud of our reputation and value our customers. When
                    we first visit our center, we sign an agreement on
                    non-disclosure of any kind of consultation with our
                    specialists, so you can be calm. To make an appointment with
                    us for a consultation, you can call us at the numbers.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="qna-img col-sm-12 col-md-6">
            <img src={qna} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      {/* QNA END */}
    </div>
  );
};

export default Home;
