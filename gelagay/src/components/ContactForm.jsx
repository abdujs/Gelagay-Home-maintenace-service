import React from 'react';

const ContactForm = () => (
  <section className="contact-section" id="contact">
    <h1>CONTACT US</h1>
    <form id="contactForm" onsubmit="showResponse(event, 'Contact Us', 'contactForm', 'responseCardContact')">
      <div className="form-group">
        <label htmlFor="fullname">Full Name:</label>
        <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" placeholder="Enter your phone number" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required placeholder="Type your message here..."></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
    <div id="responseCardContact" className="response-card">
      <div className="response-message"></div>
      <button className="ok-button" onclick="returnToForm('contactForm', 'responseCardContact')">OK</button>
    </div>
  </section>
);

export default ContactForm;