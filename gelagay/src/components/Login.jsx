import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({ userName: '', password: '' });
  const [responseMessage, setResponseMessage] = useState('');
  const [showResponse, setShowResponse] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponseMessage('Login successful!');
    setShowResponse(true);
  };

  const returnToForm = () => {
    setShowResponse(false);
    setFormData({ userName: '', password: '' });
  };

  return (
    <section className="form-container card" style={{ width: '500px', margin: '0 auto', backgroundColor: 'rgba(211, 211, 211, 0.5)' }}>
      {!showResponse ? (
        <form id="loginForm" onSubmit={handleSubmit}>
          <h2>Log In</h2>
          <div className="input-group" style={{ textAlign: 'left' }}>
            <label htmlFor="user_name">User Name:</label>
            <input
              type="text"
              id="user_name"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              placeholder="Enter your user name"
              required
            />
          </div>
          <div className="input-group" style={{ textAlign: 'left' }}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">Log In</button>
        </form>
      ) : (
        <div className="response-card card" style={{ display: 'block', marginTop: '20px', backgroundColor: 'white', textAlign: 'center', margin: '0 auto' }}>
          <div className="response-message" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FaCheckCircle style={{ color: 'green', marginRight: '10px' }} />
            {responseMessage}
          </div>
          <button className="ok-button" onClick={returnToForm}>OK</button>
        </div>
      )}
    </section>
  );
};

export default Login;
