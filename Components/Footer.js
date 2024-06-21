import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
   <>
  
    <footer className="footer">
      <div className="container">
        <div className="about">
          <h3>About ChannelConnectPro</h3>
          <p>ChannelConnectPro is your premier provider of internet and cable services. We deliver the best connectivity and entertainment solutions with unbeatable deals and exceptional customer support.</p>
        </div>
        <div className="links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/plans">Plans</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/Contact">Contact Us</a></li>
            <li><a href="/About">About Us</a></li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <p>Email: support@channelconnectpro.com</p>
          <p>Phone: 1-800-123-4567</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 ChannelConnectPro. All rights reserved. @WebXArtist</p>
      </div>
    </footer>

   </>
  )
}

export default Footer