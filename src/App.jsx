import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CSSTransition } from 'react-transition-group';
import Contact from "./components/Contact";
import NavbarSection from "./components/NavbarSection";
import HeroSection from './components/HeroSection';
import './App.css'; 
import FooterSection from './components/FooterSection';

function App() {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(!showContact);
  };

  return (
    <>
      <NavbarSection onContactClick={handleContactClick}></NavbarSection>
      <CSSTransition
        in={showContact}
        timeout={300}
        classNames="contact"
        unmountOnExit
      >
        <Contact />
      </CSSTransition>

      {!showContact && (
        <>
          <HeroSection />
        </>
      )}

<FooterSection />

    </>
  );
}

export default App;
