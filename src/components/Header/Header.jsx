import React from "react";
import "../Header/Header.css";
import Logo from "../../assets/Images/logo.png";

export default function Header() {
  return (
    <>
      <div className="container-fluid py-2 token_line">
        With&nbsp;<span className="fw-normal text-decoration-underline"> 20% off </span>&nbsp;Elevate your style with exquisite fabrics. shop now for endless Possibilites
      </div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ height: "60px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
      >
        <div className="container-fluid">
          {/* Aligned the logo to the left */}
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Company Logo" height="43" />
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
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2  mb-lg-0">
              {/* Added space around each nav link */}
              <li className="nav-item px-2">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item  px-2">
                <a className="nav-link" href="#">
                  Fabric
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="#">
                  Imported Fabric
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="#">
                  Print on Demand
                </a>
              </li>
            </ul>

            <div className="d-flex">
              {/* Added margin to center the search icon */}
              <i className="fas fa-search px-3"></i>

              {/* Added margin to center the user icon */}

              <i className="fas fa-user px-2"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
