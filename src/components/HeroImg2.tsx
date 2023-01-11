import React, { Component } from "react";
import "../assets/css/HeroImg2Style.css";
interface props {
  heading: string;
  text: string;
}
class HeroImg2 extends Component<props> {
  render(): React.ReactNode {
    return (
      <div className="hero-img">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImg2;
