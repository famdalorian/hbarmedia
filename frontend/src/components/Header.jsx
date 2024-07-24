import React from "react";

function Header() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <img src="logo.png" alt="Hbar Marketing Logo" className="logo" />
          <nav>
            <ul className="nav-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
            <button className="cta-button">Get Started</button>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
