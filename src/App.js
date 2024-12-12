import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Header from "./components/Header"; 
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <Router>
      <div>
        {/* Incluye el Header fuera de las rutas */}
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
        <ScrollToTopButton />
        {/* Define las rutas de la aplicación */}
        <Routes>          
          <Route path="/sec1" element={<div><p>Sección 1</p></div>} />
          <Route path="/sec2" element={<div><p>Sección 2</p></div>} />
          <Route path="/sec3" element={<div><p>Sección 3</p></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

