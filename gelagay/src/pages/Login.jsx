import React from 'react';

const Login = () => (
  <section className="form-container">
    <h2>Log In</h2>
    <form id="loginForm" method="POST" onsubmit="showResponse(event, 'Log In', 'loginForm', 'responseCardLogin')">
      <div className="input-group">
        <label htmlFor="user_name">User Name:</label>
        <input type="text" id="user_name" name="User_name" placeholder="Enter your user name" required />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required />
      </div>
      <button type="submit">Log In</button>
    </form>
    <div id="responseCardLogin" className="response-card">
      <div className="response-message"></div>
      <button className="ok-button" onclick="returnToForm('loginForm', 'responseCardLogin')">OK</button>
    </div>
  </section>
);

export default Login;
