import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerIcon from './HamburgerIcon'; // Import HamburgerIcon
import LoginModal from './LoginModal'; // Import LoginModal
import './styles/header.css';

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  const [isLoginOpen, setLoginOpen] = useState(false); // State to control modal visibility

  const toggleLoginModal = () => {
    setLoginOpen(!isLoginOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo" style={{ backgroundImage: 'url(/logo.png)' }}></div>
        <HamburgerIcon onClick={toggleSidebar} isOpen={isSidebarOpen} />
        <nav className="nav-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
          <button className="cta-button" onClick={toggleLoginModal}>Log In</button>
        </nav>
      </div>
      {/* Add the LoginModal component */}
      <LoginModal isOpen={isLoginOpen} onClose={toggleLoginModal} />
    </header>
  );
};

export default Header;
