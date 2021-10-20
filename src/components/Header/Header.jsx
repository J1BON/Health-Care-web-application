import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../allHooks/useAuth";
import "./Header.css";

const Header = () => {
  const { logOut, user } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand logo ms-3" to="/">
            <img
              src=" https://medik.wpengine.com/wp-content/themes/medik/images/logo.png"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              {user?.displayName ? (
                <li className="nav-item p-2">Welcome: {user?.displayName}</li>
              ) : (
                <li className="nav-item"></li>
              )}
              {!user?.email ? (
                <li className="nav-item">
                  <Link
                    className="nav-link bg-dark rounded px-3 text-white"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <button onClick={logOut} className="btn btn-info text-white">
                    log out
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
