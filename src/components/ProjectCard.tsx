import React from "react";
import "../assets/css/ProjectCardStyle.css";

const ProjectCard = (props: {
  view: string;

  text: string;
  title: string;
  imgsrc: string | undefined;
}) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="img" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btn">
          <a href={props.view} className="btn">
            view
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
