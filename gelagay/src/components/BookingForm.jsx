import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
// import Footer from '../pages/Footer';

const BookingForm = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setResponseMessage('You have successfully booked your service!');
  };

  const handleOkClick = () => {
    setResponseMessage('');
    navigate('/services');
  };

  return (
    <section className="booking-section bg-lightgreen" style={{ padding: '20px' }}>
      <h1 className="services-title text-3xl font-bold mb-8 text-center text-green-700" style={{ margin: '20px 0', fontSize: '2.5rem', fontFamily: 'Arial, sans-serif' }}>Book Your Service</h1>
      <div className="form-container card" style={{ width: '500px', margin: '0 auto', backgroundColor: 'rgba(211, 211, 211, 0.5)' }}>
        {!responseMessage ? (
          <form id="bookingForm" onSubmit={handleSubmit}>
            <div className="form-group" style={{ textAlign: 'left' }}>
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="name" placeholder="full name..." required style={{ backgroundColor: 'white', border: '1px solid rgba(228, 237, 228, 0.5)' }} />
            </div>
            <div className="form-group" style={{ textAlign: 'left' }}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="email address..." required style={{ backgroundColor: 'white', border: '1px solid rgba(228, 237, 228, 0.5)' }} />
            </div>
            <div className="form-group" style={{ textAlign: 'left' }}>
              <label htmlFor="phone">Phone Number:</label>
              <input type="text" id="phone" name="phone" placeholder="phone number..." required style={{ backgroundColor: 'white', border: '1px solid rgba(228, 237, 228, 0.5)' }} />
            </div>
            <div className="form-group" style={{ textAlign: 'left' }}>
              <label htmlFor="date">Preferred Date:</label>
              <input type="date" id="date" name="date" required style={{ backgroundColor: 'white', border: '1px solid rgba(228, 237, 228, 0.5)' }} />
            </div>
            <button type="submit" className="btn">Book Service</button>
          </form>
        ) : (
          <div className="response-card card" style={{ display: 'block', marginTop: '20px', backgroundColor: 'white', textAlign: 'center', margin: '0 auto' }}>
            <div className="response-message" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FaCheckCircle style={{ color: 'green', marginRight: '10px' }} />
              {responseMessage}
            </div>
            <button className="ok-button" onClick={handleOkClick}>OK</button>
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </section>
  );
};

export default BookingForm;