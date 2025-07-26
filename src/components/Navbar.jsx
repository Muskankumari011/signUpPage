import React, { useState } from 'react';
import './App.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>

      <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;
