import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Header() {

    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
          // eslint-disable-next-line 
          <a className= "navbar-brand">
        <img alt="latte art tulip" src="https://s3-media0.fl.yelpcdn.com/bphoto/Q7bdFrX8vI403fAF-BP6-Q/o.jpg" id="tulip" className="d-inline-block align-top"  />
         Erin Smith</a>
      <div className="navbar-collapse" id="navnav">
      <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resume"
              className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}
            >
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
        </div>
        </nav>
      );
    }

    export default Header;

