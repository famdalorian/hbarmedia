import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="logo"></div>
      <nav>      ℏ-bar Media

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

export default Header;
