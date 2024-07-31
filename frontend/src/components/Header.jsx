import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './styles/header.css';

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo"></div>
        <div className="hamburger-container" onClick={toggleSidebar}>
          <div className={`hamburger ${isSidebarOpen ? 'open' : ''}`}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>      <h2>UNDER CONSTRUCTION, EMAIL AND WHATSAPP ON CONTACT PAGE</h2>

        </div>
        <nav className={isSidebarOpen ? "nav-open" : ""}>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
          <button className="cta-button">Get Started</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
