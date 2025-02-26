// filepath: /c:/Users/HUAWEI/desktop/dev/Gelagay-Home-maintenace-service/gelagay/src/pages/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <input type="checkbox" id="cheak" />
    <label className="checkbtn" htmlFor="cheak">&#9776;</label>
    <Link to="/"><img src="img/logo1.png" className="glogo" alt="Gelagayi Logo" /></Link>
    <label className="gname">Gelagayi</label>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
    </ul>
  </nav>
);

export default Navbar;