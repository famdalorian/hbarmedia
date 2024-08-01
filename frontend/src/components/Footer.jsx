import React from 'react';
import { FaYoutube, FaTiktok, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa'; // Import icons
import '../App.css';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="social-media">
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="social-icon youtube" />
        </a>
        <a href="https://www.tiktok.com/@hbarmedia" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="social-icon tiktok" />
        </a>
        <a href="https://www.twitter.com/hbarmedia" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon twitter" />
        </a>
        <a href="mailto:hbarcc@gmail.com">
          <FaEnvelope className="social-icon email" />
        </a>
        <a href="tel:+7737660465">
          <FaPhone className="social-icon phone" />
        </a>
      </div>
      <form className="newsletter-signup">
        <input type="email" placeholder="Subscribe to our newsletter" required />
        <button type="submit">Sign Up</button>
      </form>
      <p>© 2024 Hbar Media. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;