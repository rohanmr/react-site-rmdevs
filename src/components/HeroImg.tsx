import React from "react";
import "../assets/css/HeroImgStyle.css";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img
          className="intro-img"
          src={require("../assets/images/img.jpg")}
          alt="intro-img"
        />
      </div>
      <div className="content">
        <p>
          HI, I'M <br /> Rohan Maindarkar.
        </p>
        <h1>Web Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
