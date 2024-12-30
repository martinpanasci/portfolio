import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faHtml5, faCss3Alt, faJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS
import "../styles/Skills.css";

const Skills = () => {
  // Inicializa AOS
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true, // La animación ocurre solo una vez      
    });
  }, []);

  return (
    <div
      className="skills-section"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
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
