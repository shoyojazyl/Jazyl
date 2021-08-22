import { useState } from "react";
import React from "react";
import "./About.css";

const About = () => {
  const [pics, setPics] = useState([
    {
      picture: "https://www.w3schools.com/w3images/team2.jpg",
      nom: "John Doe",
      job: "CEO & Founder",
      des: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
      id: 1,
    },
    {
      picture: "https://www.w3schools.com/w3images/team1.jpg",
      nom: "Jane Doe",
      job: "Architect",
      des: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
      id: 2,
    },
    {
      picture: "https://www.w3schools.com/w3images/team3.jpg",
      nom: "Mike Ross",
      job: "Architect",
      des: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
      id: 3,
    },
    {
      picture: "https://www.w3schools.com/w3images/team4.jpg",
      nom: "Dan Star",
      job: "Architect",
      des: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
      id: 4,
    },
  ]);
  return (
    <div className="about">
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className="about-container">
        {pics.map((pic) => (
          <div className="about-preview" key={pic.id}>
            <img src={pic.picture} />
            <h2 className="project-preview-name">{pic.nom}</h2>
            <h2 className="about-job">{pic.job}</h2>
            <p>{pic.des}</p>
            <p className="project-preview-contact">Contact</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
