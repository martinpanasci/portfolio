import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Importa el ícono de teléfono
import "../styles/Contact.css";

const Contact = () => {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("mpanasci95@gmail.com");
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    const handleCopyPhone = () => {
        navigator.clipboard.writeText("+5492235972102"); // Reemplaza con tu número de teléfono
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
    };

    return (
        <div className="contact-section" id="contact">
            <h2 className="contact-title">Contactame</h2>
            <div className="contact-links">
                <div className="contact-item">
                    <a href="https://mpanasci.com/cv.pdf" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFilePdf} className="contact-icon" /> Ver CV
                    </a>
                </div>
                <div className="contact-item email-copy-container">
                    <button onClick={(e) => { e.preventDefault(); handleCopyEmail(); }} className="contact-button">
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> Email
                    </button>
                    {copiedEmail && <span className="tooltip">¡Email copiado!</span>}
                </div>
                <div className="contact-item phone-copy-container">
                    <button onClick={(e) => { e.preventDefault(); handleCopyPhone(); }} className="contact-button">
                        <FontAwesomeIcon icon={faWhatsapp} className="contact-icon" /> Celular
                    </button>
                    {copiedPhone && <span className="tooltip">¡Teléfono copiado!</span>}
                </div>
                <div className="contact-item">
                    <a href="https://www.linkedin.com/in/martin-panasci/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="contact-icon" /> LinkedIn
                    </a>
                </div>
                <div className="contact-item">
                    <a href="https://github.com/martinpanasci" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="contact-icon" /> GitHub
                    </a>
                </div>
            </div>
            <p className="contact-message">
                ¿Buscabas a alguien que marque la diferencia? Acá estoy.<br />
                Contactame y descubri cómo puedo encajar perfectamente con lo que necesitas.<br /> No te vas a arrepentir.
            </p>
        </div>

    );
};

export default Contact;
