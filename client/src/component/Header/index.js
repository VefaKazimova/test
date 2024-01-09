import React from "react";
import ".//index.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div  style={{ backgroundColor: "rgb(13,45,62)"}}>
        <div className="container">
          <div className="navbar">
            <div className="navbar-content">
              <i class="fa-regular fa-clock"></i>
              <p> Mon - SAT: 6.00 am - 10.00 pm</p>
              <p>SUN:CLOSED</p>
            </div>
            <div className="navbar-icon">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-google-plus-g"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="header">
          <h1>
            Consulting<span>.</span>
          </h1>
          <ul>
            <li>
              <NavLink to="">Home</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="services">Services</NavLink>
            </li>
            <li>
              <NavLink to="blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
