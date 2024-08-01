import React, { useState } from 'react';
import HamburgerIcon from './HamburgerIcon';
import LoginModal from './LoginModal';
import './styles/header.css';

const Header = ({ toggleSidebar, isSidebarOpen, isLoggedIn }) => {
  const [isLoginOpen, setLoginOpen] = useState(false);

  const toggleLoginModal = () => {
    setLoginOpen(!isLoginOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo" style={{ backgroundImage: 'url(/logo.png)' }}></div>
        
        {/* Display Log In button if not signed in */}
        {!isLoggedIn && (
          <button className="cta-button" onClick={toggleLoginModal}>Log In</button>
        )}
        
        <HamburgerIcon onClick={toggleSidebar} isOpen={isSidebarOpen} />
        
      </div>
      <LoginModal isOpen={isLoginOpen} onClose={toggleLoginModal} />
    </header>
  );
};

export default Header;
