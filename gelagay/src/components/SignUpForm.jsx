import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Signup = () => {
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setResponseMessage('You have successfully signed up!');
  };

  const handleOkClick = () => {
    setResponseMessage('');
  };

  return (
    <section className="form-container card" style={{ width: '500px', margin: '0 auto', backgroundColor: 'rgba(211, 211, 211, 0.5)' }}>
      {!responseMessage ? (
        <form id="signupForm" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="input-group" style={{ textAlign: 'left' }}>
            <label htmlFor="first_name">Full Name:</label>
            <input type="text" id="first_name" name="first_name" placeholder="Enter your name" required />
          </div>
          <div className="input-group" style={{ textAlign: 'left' }}>
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" placeholder="Format: 0986949555" required />
          </div>
          <div className="input-group" style={{ textAlign: 'left' }}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group" style={{ textAlign: 'left' }}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Create a password" required />
          </div>
          <div className="input-group" style={{ textAlign: 'left' }}>
            <label htmlFor="confirm_password">Confirm Password:</label>
            <input type="password" id="confirm_password" name="confirm_password" placeholder="Re-enter your password" required />
          </div>
          <button type="submit">Sign Up</button>
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
    </section>
  );
};

export default Signup;
