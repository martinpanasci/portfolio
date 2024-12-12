import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faJs, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faLock } from "@fortawesome/free-solid-svg-icons";
import "../styles/Projects.css"; // Archivo de estilos

const Projects = () => {
    const [modalData, setModalData] = useState(null);

    const handleModal = (project) => {
        setModalData(project);
    };

    const closeModal = () => {
        setModalData(null);
    };

    return (
        <section className="projects-section" id="projects">
            <h2 className="projects-title">Proyectos</h2>
            {projectsData.map((project) => (
                <div className="project-card" key={project.id}>
                    {/* Foto */}
                    <div className="project-image" onClick={() => handleModal(project)}>
                        <img
                            src={project.image}
                            alt={`Capturas del proyecto ${project.title}`}
                            className="project-thumbnail"
                        />
                    </div>

                    {/* Título y descripción */}
                    <div className="project-info">
                        <h3 className="project-name">{project.title}</h3>
                        <div
                            className="project-description"
                            dangerouslySetInnerHTML={{ __html: project.description }}
                        ></div>
                    </div>

                    {/* Tecnologías y botón */}
                    <div className="project-extra">
                        <div className="project-tech">
                            <p>Tecnologías:</p>
                            <ul>
                                {project.technologies.map((tech, index) => (
                                    <li key={index}>
                                        <FontAwesomeIcon icon={tech.icon} className="tech-icon" /> {tech.name}
                                    </li>
                                ))}
                            </ul>
                        </div >
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-github">
                            <FontAwesomeIcon icon={faGithub} className="icon" /> 
                        </a>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-button"
                        >
                            Ver más
                        </a>
                    </div>
                </div>
            ))}

            {/* Modal */}
            {modalData && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content">
                        <img
                            src={modalData.modalImage}
                            alt={`Capturas del proyecto grande: ${modalData.title}`}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;

const projectsData = [
    {
        id: 1,
        title: "BUGGIA Trainer",
        description: `
        Es una plataforma para la gestión y venta de rutinas y programas de entrenamiento personalizados. Ofrece funcionalidades tanto para usuarios como administradores, incluyendo la creación, edición y asignación de rutinas.
        
        <strong>Características principales:</strong>
        <br />
        - <strong>Rutinas interactivas:</strong> con historial de tus cargas.<br />
        - <strong>Compra segura:</strong> de programas a través de Mercado Pago.<br />
        - <strong>Roles diferenciados:</strong> (user y adm) con autenticación JWT.<br />
        - <strong>Backend robusto:</strong> en Node.js y MySQL para la gestión integral de datos.
        `,
        image: "https://i.imgur.com/8LZp0u9.gif",
        modalImage: "https://i.imgur.com/ZqUWUij.gif",
        technologies: [
            { name: "React", icon: faReact },
            { name: "Node.js", icon: faNodeJs },
            { name: "MySQL", icon: faDatabase },
            { name: "JWT", icon: faLock },
            { name: "Mercado Pago SDK", icon: faJs },
        ],
        link: "https://youtu.be/VFDjsrt3tsk",
        github: "https://github.com/martinpanasci/Buggia-Trainer",
    },
    {
        id: 2,
        title: "URL Shortener",
        description: `
      Es una herramienta para acortar URLs y gestionar enlaces de manera eficiente. 
      Diseñada para usuarios ocasionales y registrados, combina funcionalidad y facilidad de uso.<br /> 
      <strong>Características principales:</strong> <br />      
      - <strong>Acortador dinámico:</strong> genera enlaces cortos personalizados.<br />
      - <strong>Estadísticas:</strong> seguimiento de clicks y rendimiento.<br />
      - <strong>Código QR:</strong> integrado para compartir fácilmente.<br />
      - <strong>Gestión de enlaces:</strong> edición y eliminación para usuarios registrados.<br />
      - <strong>Autenticación JWT:</strong> para mayor seguridad.<br />
      - <strong>Frontend intuitivo:</strong> diseño minimalista en React.<br />
      `,
        image: "https://i.imgur.com/voAcyGw.png",
        modalImage: "https://i.imgur.com/voAcyGw.png",
        technologies: [
            { name: "React", icon: faReact },
            { name: "Node.js", icon: faNodeJs },
            { name: "MySQL", icon: faDatabase },
            { name: "JWT", icon: faLock },
        ],
        link: "https://otro-proyecto.com",
        github: "",
    },
];

