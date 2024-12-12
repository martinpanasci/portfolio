import React, { useState } from "react";
import "../styles/AboutMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


const AboutMe = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleModal = () => {
        setModalOpen(!isModalOpen);
    };


    const handleCopyEmail = () => {
        navigator.clipboard.writeText("mpanasci95@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Oculta el mensaje después de 3 segundos
    };

    return (
        <section className="about-me" id="about">
            <div className="about-content">
                <div className="photo" onClick={handleModal}>
                    <img src="https://i.imgur.com/x0eLbam.jpeg" alt="Perfil" />
                    <div className="links" onClick={(e) => e.stopPropagation()}>
                        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="link-item">
                            <FontAwesomeIcon icon={faFilePdf} className="icon" /> CV
                        </a>
                        <div className="email-copy-container">
                            <a href="#" onClick={(e) => { e.preventDefault(); handleCopyEmail(); }} className="link-item" >
                                <FontAwesomeIcon icon={faEnvelope} className="icon" /> Email
                            </a>
                            {copied && <span className="tooltip">¡Dirección copiada!</span>}
                        </div>
                        <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="link-item">
                            <FontAwesomeIcon icon={faLinkedin} className="icon" />
                        </a>
                        <a href="https://github.com/martinpanasci" target="_blank" rel="noopener noreferrer" className="link-item">
                            <FontAwesomeIcon icon={faGithub} className="icon" />
                        </a>
                    </div>
                </div>
                <div className="text">
                    <h1>Martin Ignacio Panasci</h1>
                    <h2>Programador Full Stack</h2>
                    <p>Si algo me motiva, son los desafíos. Siempre busco mejorar, tanto en la programación como en la vida en general.</p>
                    <p>Mi enfoque está en encontrar soluciones efectivas, combinando mi experiencia académica, pragmatismo y adaptabilidad.</p>
                    <p>Actualmente, busco oportunidades para crecer, desarrollar mi potencial y dejar mi huella a través de ideas y resultados concretos.</p>
                    <p>Si buscás a alguien comprometido, confiable y con el potencial para generar impacto, no busques más.</p>
                    <button className="btn-about-me" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                        Contáctame
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <div className="modal-overlay" onClick={handleModal}>
                    <div className="modal-content">
                        <img
                            src="https://i.imgur.com/15Da99Z.jpeg"
                            alt="Perfil Grande"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default AboutMe;
