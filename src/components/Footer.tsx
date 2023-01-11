import React from "react";
import "../assets/css/FooterStyle.css";
import {
  FaFacebook,
  FaHeart,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Main Road,Mauli Chowk,</p>
              <p>Osmanabad, 413501</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              9022467707
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              maindarkarrohan@yahoo.com
            </h4>
          </div>
          <div className="heart">
            <h4>
              <FaHeart
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              Design And Developed By: RM-Dev's
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            A Normal student of CSE Background having interest in Web
            Development and upcoming new Technology .
          </p>

          <div className="social">
            <a href="https://www.facebook.com/profile.php?id=100074886453578&mibextid=LQQJ4d">
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://instagram.com/rohan_m_421?igshid=YmMyMTA2M2Y=">
              <FaInstagram
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>

            <a href="https://www.linkedin.com/in/rohan-maindarkar-b45000227/">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
