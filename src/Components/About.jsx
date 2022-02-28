import React from "react";
import aboutImage from "../images/about.png";

function About() {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutImage} alt="" />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          You will be marvel on how fast you can lose weight in just some few
          weeks of work. We do it because we love it and it's a passion for us.
          Don't miss to contact us at every moment you like
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
}

export default About;
