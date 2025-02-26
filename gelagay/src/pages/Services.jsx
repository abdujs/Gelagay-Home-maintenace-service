import React from 'react';

const Services = () => (
  <section className="services-section" id="services">
    <h1>OUR SERVICES INCLUDE</h1>
    <div className="services">
      <div className="service">
        <img src="img/plumbing.png" alt="Plumbing" />
        <h2>Plumbing</h2>
        <p>Starting from 500 Birr and 100 Birr/Hour</p>
        <a href="bookservice.html">Book Now!</a>
      </div>
      <div className="service">
        <img src="img/electric.png" alt="Electrical Work" />
        <h2>Electrical Work</h2>
        <p>Starting from 550 Birr & 150 Birr/Hour</p>
        <a href="bookservice.html">Book Now!</a>
      </div>
      <div className="service">
        <img src="img/installation.png" alt="Repair" />
        <h2>Repair</h2>
        <p>Starting from 350 Birr & 250 Birr/Hour</p>
        <a href="bookservice.html">Book Now!</a>
      </div>
      <div className="service">
        <img src="img/dish.png" alt="Dish Installation" />
        <h2>Dish Installation</h2>
        <p>New 750 Birr. Repair 300 Birr</p>
        <a href="bookservice.html">Book Now!</a>
      </div>
      <div className="service">
        <img src="img/cleaning.jpg" alt="Cleaning" />
        <h2>Cleaning</h2>
        <p>Starting from 300 Birr</p>
        <a href="bookservice.html">Book Now!</a>
      </div>
      <div className="service">
        <img src="img/painting.jpg" alt="Painting" />
        <h2>Painting</h2>
        <p>25 Birr/Square metre</p>
        <a href="bookservice.html">Book Now!</a>
      </div>
    </div>
  </section>
);

export default Services;