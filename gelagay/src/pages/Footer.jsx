import React from 'react';
import logo from '../assets/img/logo1.png';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaTelegram, FaTiktok } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', position: 'relative', bottom: '0', width: '100%', backgroundColor: 'green-700', color: 'white' }}>
    {/* <div className="footer__content" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <div className="footer__section footer__section--about" style={{ flex: 1, padding: '5px' }}>
        <a href="#home"><img src={logo} alt="Gelagayi Logo" style={{ width: '80px', height: 'auto' }} /></a>
      </div>
      <div className="footer__section footer__section--contact" style={{ flex: 1, padding: '5px' }}>
        <h2 style={{ fontSize: '20px' }}>Contact</h2>
        <h3 style={{ margin: '5px 0' }}>+251 711111111</h3>
        <a href="mailto:Gelagayi@gmail.com"><h3 style={{ margin: '5px 0' }}>Gelagay@gmail.com</h3></a>
      </div>
      <div className="footer__section footer__section--quicklinks" style={{ flex: 1, padding: '5px' }}>
        <h2 style={{ fontSize: '20px' }}>Quick Links</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none', padding: '2px 4px', display: 'block' }}>Home</Link></li>
          <li><Link to="/about" style={{ color: 'white', textDecoration: 'none', padding: '2px 4px', display: 'block' }}>About</Link></li>
          <li><Link to="/services" style={{ color: 'white', textDecoration: 'none', padding: '2px 4px', display: 'block' }}>Services</Link></li>
          <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none', padding: '2px 4px', display: 'block' }}>Contact Us</Link></li>
        </ul>
      </div>
    
    </div> */}
    <div className="footer__social-media" style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', width: '100%' }}>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
        <FaFacebook size={24} />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
        <FaTwitter size={24} />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
        <FaInstagram size={24} />
      </a>
      <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
        <FaTelegram size={24} />
      </a>
      <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
        <FaTiktok size={24} />
      </a>
    </div>
    <div className="footer__webasig text-center" style={{ marginTop: '10px' }}>
      <p>&copy; May 2024 Gelagay Home Maintenance</p>
    </div>
  </footer>
);

export default Footer;
