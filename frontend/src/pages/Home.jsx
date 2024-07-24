import React from 'react';
import '../App.css';

const HomePage = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <img src="logo.png" alt="Hbar Marketing Logo" className="logo" />
          <nav>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
            <button className="cta-button">Get Started</button>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Empowering Your Vision with Innovative Marketing Solutions</h1>
          <p>Expert content creation and marketing strategies tailored to your needs.</p>
          
        </div><button className="cta-button">Learn More</button>
      </section>

      <section className="about-us">
        <div className="container">
          <h2>About Hbar Marketing</h2>
          <p>At Hbar Marketing, we blend creativity with cutting-edge technology to deliver exceptional content and marketing solutions. Our mission is to elevate your brand and drive growth through innovative strategies.</p>
          <a href="#about">Read More</a>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-cards">
            <div className="service-card">
              <h3>Content Creation</h3>
              <p>Engaging videos, blog posts, and social media content.</p>
            </div>
            <div className="service-card">
              <h3>Marketing Strategy</h3>
              <p>Customized digital marketing and SEO strategies.</p>
            </div>
            <div className="service-card">
              <h3>Brand Development</h3>
              <p>Building and enhancing your brand’s identity.</p>
            </div>
          </div>
          <a href="#services">View All Services</a>
        </div>
      </section>

      <section className="portfolio">
        <div className="container">
          <h2>Our Work</h2>
          <div className="portfolio-items"> {/* Add your portfolio items here */} </div>
          <a href="#portfolio">View Portfolio</a>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonial"> {/* Add your testimonials here */} </div>
        </div>
      </section>

      <section className="blog">
        <div className="container">
          <h2>Latest Insights</h2>
          <div className="blog-posts"> {/* Add your blog posts here */} </div>
          <a href="#blog">Read More</a>
        </div>
      </section>

      <section className="contact">
        <div className="container">
        
          <div className="contact-details">
            <p>Phone: 123-456-7890</p>
            <p>Email: info@hbarmarketing.com</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact Us</a></li>
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
    </div>
  );
};

export default HomePage;
