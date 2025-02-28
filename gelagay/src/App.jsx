import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Why from './pages/why';
import Services from './pages/Services';
import Footer from './pages/Footer';
import ContactForm from './components/ContactForm';
import BookingForm from './components/BookingForm';
import Signup from './components/SignUpForm';
import Login from './components/Login';

const App = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Navbar />
    <div style={{ flex: '1' }}>
      <Hero />
      <Why />
      <Services />
      <ContactForm />
      <Routes>
        {/* <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/contact" element={<ContactForm />} /> */}
        <Route path="/BookingForm" element={<BookingForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
    <Footer />
  </div>
);

export default App;