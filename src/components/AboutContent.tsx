import React from "react";
import "../assets/css/AboutContentstyle.css";
import { Link } from "react-router-dom";
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Objective</h1>
        <p>
          To grow with the organization with optimum utilization of my
          educational, professional & experience background and contribute
          meaningfully towards the goal of the organization with utmost zeal and
          confidence
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-conteiner">
          <div className="img-stack top">
            <img
              src={require("../assets/images/rectdev.jpg")}
              className="img"
              alt="true"
            />
          </div>
          <div className="img-stack bottom">
            <img
              src={require("../assets/images/reacttsx.jpg")}
              className="img"
              alt="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
