import React from 'react';

const About = () => (
  <section className="about-section" id="about">
    <div className="about-text">
      <h1>Why Gelagayi?</h1>
      <p>
        With a wide range of offerings, including plumbing, installations, door fixing, electrical work, cleaning, and more, Gelagayi aims to simplify the process of finding reliable and qualified service providers for all home maintenance needs.
      </p>
    </div>
    <div className="about-cards">
      <div className="card">
        <img src="img/convenience.jpg" alt="Convenience" />
        <h2>Convenience</h2>
        <p>Gelagayi eliminates the hassle of searching for and vetting service providers.</p>
      </div>
      <div className="card">
        <img src="img/quality.jpg" alt="Quality Assurance" />
        <h2>Quality Assurance</h2>
        <p>Gelagayi carefully selects and verifies service providers to ensure high-quality services.</p>
      </div>
      <div className="card">
        <img src="img/transparency.webp" alt="Transparency" />
        <h2>Transparency</h2>
        <p>Gelagayi offers transparent pricing, enabling informed decisions.</p>
      </div>
    </div>
  </section>
);

export default About;