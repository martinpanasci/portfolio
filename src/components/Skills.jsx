import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faHtml5, faCss3Alt, faJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import "../styles/Skills.css"; // Asegúrate de crear este archivo CSS

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="skills-title">Tecnologías</h2>
      <div className="skills-container">
        <div className="skill-item">
          <FontAwesomeIcon icon={faReact} className="skill-icon" />
          <p>React</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faNodeJs} className="skill-icon" />
          <p>Node.js</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
          <p>MySQL</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faJs} className="skill-icon" />
          <p>Express.js</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
          <p>HTML</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" />
          <p>CSS</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
