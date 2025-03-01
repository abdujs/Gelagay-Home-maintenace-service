import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo1.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'transparent' : ''}`}>
      <div className="container mx-auto flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link to="/" className="flex items-center navbar-logo no-underline">
            <img src={logo} className="navbar-logo" alt="Gelagay Logo" />
            <span className="navbar-brand ml-3">Gelagay</span>
          </Link>
        </div>
        <div>
          <input type="checkbox" id="menu-toggle" className="hidden" />
          <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </label>
          <div className="hidden md:flex space-x-8 p-2" id="menu">
            <div><Link to="/" className="hover:underline hover:underline-from-left">Home</Link></div>
            <div><Link to="/about" className="hover:underline hover:underline-from-left">About</Link></div>
            <div><Link to="/services" className="hover:underline hover:underline-from-left">Services</Link></div>
            <div><Link to="/contact" className="hover:underline hover:underline-from-left">Contact Us</Link></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;