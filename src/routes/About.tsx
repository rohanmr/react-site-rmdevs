import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2
        heading="ABOUT."
        text="I'M Web Developer most friendly with Front-End Development"
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
