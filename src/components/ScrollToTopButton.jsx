import React, { useState, useEffect } from "react";
import "../styles/ScrollToTopButton.css"; // Asegúrate de agregar estos estilos

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={`scroll-to-top ${isVisible ? "visible" : ""}`}
            onClick={scrollToTop}
        >
            ↑
        </button>
    );
};

export default ScrollToTopButton;
