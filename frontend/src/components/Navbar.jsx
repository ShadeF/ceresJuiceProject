import React from "react";
import "../Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg py-3 shadow-sm"
        style={{ backgroundColor: "#73b843" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="/logo.png"
              alt="Ceres Logo"
              style={{ width: "100px", height: "auto" }}
            />
          </a>
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
                <a className="nav-link" aria-current="page" href="#">
                  Juice Flavors
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Restock Juices
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sales Report
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
          <div className="buttons">
            <a href="" className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-1"></i> Logout
            </a>
            <a href="" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-1"></i> Cart (0)
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
