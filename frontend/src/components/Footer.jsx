import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Footer = () => (
  <footer>
    <div className="container">
      <ul className="footer-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="social-media">
        {/* Add social media icons/links here */}
      </div>
      <form className="newsletter-signup">
        <input type="email" placeholder="Subscribe to our newsletter" required />
        <button type="submit">Sign Up</button>
      </form>
      <p>© 2024 Hbar Marketing. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
