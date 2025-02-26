import React from 'react';

const Footer = () => (
  <footer className="bg-teal-600 p-4 text-white">
    <div className="footer-section about">
      <a href="#home"><img src="img/logo1.png" alt="Gelagayi Logo" /></a>
      <p>Gelagayi is a digital marketplace that changes the home maintenance service industry by connecting homeowners with skilled professionals.</p>
    </div>
    <div className="footer-section contact">
      <h2>Contact</h2>
      <h3>+251 911111111</h3>
      <h3>+251 711111111</h3>
      <a href="mailto:Gelagayi@gmail.com"><h3>Gelagayi@gmail.com</h3></a>
    </div>
    <div className="footer-section quicklinks">
      <h2>Quick Links</h2>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#aboutus">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contactus">Contact Us</a></li>
      </ul>
    </div>
    <div className="webasig text-center">
      <p>&copy; May 2024 Gelagayi Home Maintenance</p>
    </div>
  </footer>
);

export default Footer;