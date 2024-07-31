import React from 'react';
import '../App.css';

const Services = () => (
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
);

export default Services;
