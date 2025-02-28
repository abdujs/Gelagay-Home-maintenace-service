import React from 'react';
import convenienceImg from '../assets/img/convenience.jpg';
import qualityImg from '../assets/img/quality.jpg';
import transparencyImg from '../assets/img/transparency.webp';

const cardData = [
  {
    imgSrc: convenienceImg,
    altText: "Convenience",
    title: "Convenience",
    description: "Gelagayi eliminates the hassle of searching for and vetting service providers."
  },
  {
    imgSrc: qualityImg,
    altText: "Quality Assurance",
    title: "Quality Assurance",
    description: "Gelagayi carefully selects and verifies service providers to ensure high-quality services."
  },
  {
    imgSrc: transparencyImg,
    altText: "Transparency",
    title: "Transparency",
    description: "Gelagayi offers transparent pricing, enabling informed decisions."
  }
];

const Why = () => (
  <section className="about-section w-auto" id="about" style={{ backgroundColor: 'rgba(228, 237, 228, 0.5)', margin: '20px 0', padding: '20px', fontFamily: 'var(--font-family)', color: 'var(--primary-color)' }}>
    <div className="about-text font-bold" style={{ margin: '20px 0' }}>
      <h1 style={{ fontSize: '2.5rem', fontFamily: 'Arial, sans-serif', color: '#006400' }}>Why Gelagay</h1>
      <p>
        With a wide range of offerings, including plumbing, installations, door fixing, electrical work, cleaning, and more, <br/> Gelagayi aims to simplify the process of finding reliable and qualified service providers for all home maintenance needs.
      </p>
    </div>
    <div className="about-cards flex-container" style={{ margin: '20px 0' }}>
      {cardData.map((card) => (
        <div className="card shadow-md rounded-lg overflow-hidden flex flex-col items-center m-4 hover:shadow-lg transition-transform duration-300" key={card.title} style={{ width: '300px', margin: '20px', padding: '20px', fontFamily: 'var(--font-family)', color: 'var(--primary-color)', backgroundColor: 'rgba(211, 211, 211, 0.5)' }}>
          <img src={card.imgSrc} alt={card.altText} className="responsive-card-image w-full h-48 object-cover" style={{ borderRadius: 'var(--border-radius)' }} />
          <div className="card-content p-4 text-center">
            <h2 className="card-title text-xl font-bold mb-2">{card.title}</h2>
            <p className="card-description mb-4">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Why;
