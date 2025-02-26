import React from 'react';

const BookingForm = () => (
  <section className="booking-section">
    <h1>Book Your Service</h1>
    <form id="bookingForm" action="submit_booking.php" method="POST" onsubmit="showResponse(event, 'Book Service', 'bookingForm', 'responseCardBooking')">
      <div className="form-group">
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" name="name" placeholder="full name..." required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="email address..." required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" placeholder="phone number..." required />
      </div>
      <div className="form-group">
        <label htmlFor="service">Select Service:</label>
        <select id="service" name="service" required>
          <option value="" disabled selected>Select a service</option>
          <option value="plumbing">Plumbing</option>
          <option value="electrical">Electrical Work</option>
          <option value="cleaning">Cleaning</option>
          <option value="repair">Repair</option>
          <option value="installation">Installation</option>
          <option value="painting">Painting</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="date">Preferred Date:</label>
        <input type="date" id="date" name="date" required />
      </div>
      <input type="submit" value="Book Service" />
    </form>
    <div id="responseCardBooking" className="response-card">
      <div className="response-message"></div>
      <button className="ok-button" onclick="returnToForm('bookingForm', 'responseCardBooking')">OK</button>
    </div>
  </section>
);

export default BookingForm;