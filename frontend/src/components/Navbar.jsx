import React from "react";
import "../Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg py-3 shadow-sm"
        style={{ backgroundColor: "#73b843" }}
      >
        <div className="container">
          <Link to="/shop" className="navbar-brand">
            <img
              src="/logo.png"
              alt="Ceres Logo"
              style={{ width: "100px", height: "auto" }}
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/shop" className="nav-link" aria-current="page">
                  Juice Flavors
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/restock" className="nav-link">
                  Restock Juices
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/sales-report" className="nav-link">
                  Sales Report
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/branch-selection" className="nav-link">
                  Branch 
                </Link>
              </li>

            </ul>
          </div>
          <div className="buttons">
          <Link to="/cart" className="btn btn-outline-dark ms-2">
            <i className="fa fa-shopping-cart me-1"></i> Cart
          </Link>
          <Link to="/login" className="btn btn-outline-dark">
            <i className="fa fa-sign-in me-1"></i> Logout
          </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
