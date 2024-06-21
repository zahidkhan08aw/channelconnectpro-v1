import React from 'react';
import Service from "./Service/page"
import About from "./About/page"
import Contact from "./Contact/page"
import Link from 'next/link';



const Hero = () => {
  const phoneNumber = 'YOUR_PHONE_NUMBER';
  const message = 'Hello, I would like to get more information about Your Internet & Cable Services!';

  return (
    <>
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">ChannelConnectPRO</h1>
        <p className="hero-description">
          Your premier internet and cable service provider. Get the best deals today!
        </p>
        <ul className="hero-benefits">
          <li>High-speed internet</li>
          <li>Best Cable TV Services</li>
          <li>24/7 customer support</li>
          <li>Affordable pricing</li>
          <li>100% installation Accuracy</li>
        </ul>
        <Link className='btn' href={`https://wa.me/${+13479790618}?text=${encodeURIComponent(message)}`}>
        <button className="cta-button">Get Started</button>
        </Link>
      </div>
      <div className="hero-image">
        <img
          src="/channel1.png" 
          alt="Channel Connect Pro" 
        />
      </div>
    </div>
    <Service/>
    <About/>
    <Contact/>
    </>
  );
};

export default Hero;
