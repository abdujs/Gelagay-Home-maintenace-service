import React from 'react';

const Hero = () => (
  <section className="hero" id="home">
    <div className="hero-content">
      <h1 className="hero-title">GELAGAYI<br />EFFORTLESS<br />HOME MAINTENANCE!</h1>
      <p className="hero-description">
        Gelagayi is a software application that transforms the home maintenance service industry by connecting homeowners with skilled professionals seamlessly.
      </p>
      <div className="hero-buttons">
        <a href="signup.html" className="btn btn-signup">Sign Up</a>
        <a href="login.html" className="btn btn-login">Log In</a>
      </div>
    </div>
    <div className="hero-image">
      <img src="img/home.png" alt="About Us Image" />
    </div>
  </section>
);

export default Hero;