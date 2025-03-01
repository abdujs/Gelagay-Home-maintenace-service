import React from 'react';
import plumbingImg from '../assets/img/plumbing.png';
import electricImg from '../assets/img/electric.png';
import repairImg from '../assets/img/installation.png';
import dishImg from '../assets/img/dish.png';
import cleaningImg from '../assets/img/cleaning.jpg';
import paintingImg from '../assets/img/painting.jpg';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    img: plumbingImg,
    alt: 'Plumbing',
    title: 'Plumbing',
    description: '500 - 1000 ETB/hr',
    link: '/booking'
  },
  {
    img: electricImg,
    alt: 'Electrical Work',
    title: 'Electrical Work',
    description: '550 - 1000 ETB/hr',
    link: '/booking'
  },
  {
    img: repairImg,
    alt: 'Repair',
    title: 'Repair',
    description: '350 - 600 ETB/hr',
    link: '/booking'
  },
  {
    img: dishImg,
    alt: 'Dish Installation',
    title: 'Dish Installation',
    description: '300 - 750 ETB',
    link: '/booking'
  },
  {
    img: cleaningImg,
    alt: 'Cleaning',
    title: 'Cleaning',
    description: '300 - 500 ETB/hr',
    link: '/booking'
  },
  {
    img: paintingImg,
    alt: 'Painting',
    title: 'Painting',
    description: '25 ETB/Sq metre',
    link: '/booking'
  }
];

const ServiceItem = ({ img, alt, title, description, link }) => (
  <div className="service-item card shadow-md rounded-lg overflow-hidden flex flex-col items-center m-4 hover:shadow-lg transition-transform duration-300" style={{ width: '300px', padding: '20px', fontFamily: 'var(--font-family)', color: 'var(--primary-color)', backgroundColor: 'rgba(211, 211, 211, 0.5)' }}>
    <img src={img} alt={alt} className="service-image w-full h-48 object-cover" style={{ width: 'auto', height: '200px', borderRadius: 'var(--border-radius)' }} />
    <div className="service-content p-4 text-center">
      <h2 className="service-title text-xl font-bold mb-2">{title}</h2>
      <p className="service-description mb-4">{description}</p>
      <Link to={link} className="service-link button bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition-colors duration-300">Book Now!</Link>
    </div>
  </div>
);

const Services = () => (
  <section className="services-section bg-lightgreen" id="services" style={{ margin: '20px 0', padding: '20px', fontFamily: 'var(--font-family)', color: 'var(--primary-color)' }}>
    <h1 className="services-title text-3xl font-bold mb-8 text-center" style={{ margin: '20px 0', fontSize: '2.5rem', fontFamily: 'Arial, sans-serif' }}>Our Services</h1>
    <div className="services-list flex flex-wrap justify-center" style={{ margin: '20px 0' }}>
      {servicesData.map((service, index) => (
        <ServiceItem key={index} {...service} />
      ))}
    </div>
  </section>
);

export default Services;