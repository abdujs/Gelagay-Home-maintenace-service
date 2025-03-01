import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ContactForm = () => {
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setResponseMessage('Your message has been sent successfully!');
  };

  const handleOkClick = () => {
    setResponseMessage('');
  };

  return (
    <section className="contact-section bg-lightgreen" style={{ padding: '20px', marginBottom: '20px' }}>
      <h1 className="services-title text-3xl font-bold mb-8 text-center text-green-700" style={{ margin: '20px 0', fontSize: '2.5rem', fontFamily: 'Arial, sans-serif' }}>CONTACT US</h1>
      <div className="form-container card" style={{ width: '500px', margin: '0 auto', backgroundColor: 'rgba(211, 211, 211, 0.5)' }}>
        {!responseMessage ? (
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group" style={{ textAlign: 'left' }}>
              <label htmlFor="fullname">Full Name:</label>
              <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" required style={{ backgroundColor: 'white', border: '1px solid rgba(228, 237, 228, 0.5)' }} />
            </div>
            <div className="form-group" style={{ textAlign: 'left' }}>
              <label htmlFor="phone">Phone Number:</label>
              <input type="text" id="phone" name="phone" placeholder="Enter your phone number" style={{ backgroundColor: 'white', border: '1px solid rgba(228, 237, 228, 0.5)' }} />
            </div>
            <div className="form-group" style={{ textAlign: 'left' }}>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required placeholder="Type your message here..." style={{ backgroundColor: 'white', border: '1px solid rgba(228, 237, 228, 0.5)' }}></textarea>
            </div>
            <button type="submit" className="btn">Send</button>
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
    </section>
  );
};

export default ContactForm;