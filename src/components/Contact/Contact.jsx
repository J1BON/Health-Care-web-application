import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container mx-auto p-5 m-5 contact-main">
      <div className="d-md-flex justify-content-between">
        <div className="adress">
          <div className="adress-item d-flex">
            <div className="logo">
              <p>
                {" "}
                <i className="fas fa-map-marker-alt"></i>
              </p>
            </div>
            <div className="text">
              <p>56/8, Badda beside central jail</p>
            </div>
          </div>
          <div className="adress-item d-flex">
            <div className="logo">
              <p>
                {" "}
                <i className="fas fa-phone-alt"></i>
              </p>
            </div>
            <div className="text">
              <p>+00 (012) 910 564 2568</p>
            </div>
          </div>
          <div className="adress-item d-flex align-items-center">
            <div className="logo">
              <p>
                {" "}
                <i class="fas fa-envelope-open"></i>
              </p>
            </div>
            <div className="text">
              <p>support@medik.com</p>
            </div>
          </div>
        </div>
        <div className="message">
          <h2 className="mb-3">Need Help? Send us a message :)</h2>
          <p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Frist Name"
              className="input"
            />
          </p>
          <p>
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="input"
            />
          </p>
          <p>
            {" "}
            <textarea
              className="text input"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </p>
          <button className="btn btn-outline-danger">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
