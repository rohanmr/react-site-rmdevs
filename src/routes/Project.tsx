import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import ProCard from "../components/ProCard";

const Project = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="PROJECTS." text="Some of our most recent works" />
      <ProCard />
      <Footer />
    </div>
  );
};

export default Project;
