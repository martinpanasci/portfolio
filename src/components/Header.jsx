import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // Importamos Link desde react-scroll
import "../styles/Header.css"; // Ruta para el CSS

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="https://i.imgur.com/hkOQJFY.jpeg" alt="Logo de Martín" />
        </div>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ScrollLink
            to="about" // ID de la sección "Sobre mí"
            smooth={true}
            duration={500} // Duración de la animación
            offset={-50} // Ajuste del scroll (para evitar que se oculte tras el header)
          >
            Sobre mí
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} offset={-50}>
            Proyectos
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-50}>
            Contacto
          </ScrollLink>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
