"use client"
import React, { useState } from 'react';

 const metadata = {
  title: "Contact ChannelConnectPRO",
  description: "Explore ChannelConnectPRO's comprehensive range of services, including high-speed internet and dependable cable solutions. Find the perfect package to meet your connectivity needs.",
};


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
  };

  return (
    <>
    <div className="mainheading">
      <h2>Contact US</h2>
    </div>
    <div className="contact-page">
      <h1>Contact Us Now</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      {showPopup && (
        <div className="popup">
          <p>Thank you! Your message has been sent.</p>
        </div>
      )}
    </div>
    <div className="ending">
      <h1>Ready to Experience the Best in Internet and Cable Services?</h1>
      
      <h2>Get in touch with us now and discover why we are the trusted choice for so many satisfied customers across the nation.</h2>
      </div>
    </>
  );
};

export default Contact;
