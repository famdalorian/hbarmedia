import React from 'react';
import { Link } from 'react-router-dom';
import './styles/sidebar.css'; // Ensure you have this CSS file for styles

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><Link to="/" onClick={onClose}>Home</Link></li>
          <li><Link to="/about" onClick={onClose}>About Us</Link></li>
          <li><Link to="/services" onClick={onClose}>Services</Link></li>
          <li><Link to="/portfolio" onClick={onClose}>Portfolio</Link></li>
          <li><Link to="/blog" onClick={onClose}>Blog</Link></li>
          <li><Link to="/contact" onClick={onClose}>Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
