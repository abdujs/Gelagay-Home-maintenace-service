import React from 'react';

const Signup = () => (
  <section className="form-container">
    <h2>Sign Up</h2>
    <form id="signupForm" method="POST" onsubmit="showResponse(event, 'Sign Up', 'signupForm', 'responseCardSignup')">
      <div className="input-group">
        <label htmlFor="first_name">First Name:</label>
        <input type="text" id="first_name" name="first_name" placeholder="Enter your first name" required />
      </div>
      <div className="input-group">
        <label htmlFor="last_name">Last Name:</label>
        <input type="text" id="last_name" name="last_name" placeholder="Enter your last name" required />
      </div>
      <div className="input-group">
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" placeholder="Format: 0986949555" required />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Create a password" required />
      </div>
      <div className="input-group">
        <label htmlFor="confirm_password">Confirm Password:</label>
        <input type="password" id="confirm_password" name="confirm_password" placeholder="Re-enter your password" required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
    <div id="responseCardSignup" className="response-card">
      <div className="response-message"></div>
      <button className="ok-button" onclick="returnToForm('signupForm', 'responseCardSignup')">OK</button>
    </div>
  </section>
);

export default Signup;
