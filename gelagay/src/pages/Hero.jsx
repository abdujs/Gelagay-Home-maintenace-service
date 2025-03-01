import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import homeImage1 from '../assets/plumber.jpg';
import homeImage2 from '../assets/paintining1.png';
import homeImage3 from '../assets/electricianAI.png';
import homeImage4 from '../assets/clean.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjusted to 3 seconds
  };

  return (
    <section className="relative h-screen overflow-hidden" id="home">
      <Slider {...settings} className="absolute top-0 left-0 w-full h-full z-0">
        <div>
          <img src={homeImage1} alt="Home Maintenance Service 1" className="w-full h-full object-cover opacity-75" />
        </div>
        <div>
          <img src={homeImage2} alt="Home Maintenance Service 2" className="w-full h-full object-cover opacity-75" />
        </div>
        <div>
          <img src={homeImage3} alt="Home Maintenance Service 3" className="w-full h-full object-cover opacity-75" />
        </div>
        <div>
          <img src={homeImage4} alt="Home Maintenance Service 3" className="w-full h-full object-cover opacity-75" />
        </div>
      </Slider>
      <div className="absolute inset-0 bg-gray bg-opacity-50 z-10"></div> {/* Gray transparent overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 z-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-green-200 to-green-400 bg-clip-text text-transparent">
          GELAGAY<br />EFFORTLESS HOME MAINTENANCE!
        </h2>
        <p className="text-lg md:text-2xl mb-6 text-color-black mb-12"> {/* Added margin-bottom */}
          Gelagay is a digital marketplace designed to transform the home maintenance service industry <br/>by connecting homeowners with skilled professionals through a user-friendly platform.
        </p>
        <div className="flex space-x-4" style={{ marginTop: '3rem' }}> {/* Added inline style for margin-top */}
          <Link to="/signup" className="btn btn-signup bg-green-600 hover:bg-green-900 text-white border-white font-bold py-3 px-6 rounded m-4" >Sign Up</Link>
          <Link to="/login" className="btn btn-login bg-white hover:bg-gray-200 text-green-700 border border-green-700 font-bold py-3 px-6 rounded m-4">Log In</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
