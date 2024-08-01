import React, { useState } from 'react';
import HamburgerIcon from './HamburgerIcon';
import LoginModal from './LoginModal';
import './styles/header.css';

const Header = ({ toggleSidebar, isSidebarOpen, isLoggedIn, toggleLoginStatus }) => {
  const [isLoginOpen, setLoginOpen] = useState(false);

  const toggleLoginModal = () => {
    setLoginOpen(!isLoginOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="left-section">
          <HamburgerIcon onClick={toggleSidebar} isOpen={isSidebarOpen} />
          <div className="logo">
           
          </div>
        </div>
        <div className="right-section"> <h1>Hbar Media</h1>
          {!isLoggedIn && (
            <button className="cta-button" onClick={toggleLoginModal}>
              Log In
            </button>
          )}
        </div>
      </div>
      <LoginModal isOpen={isLoginOpen} onClose={toggleLoginModal} />
    </header>
  );
};

export default Header;
