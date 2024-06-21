import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="logo">ChannelConnectPRO</div>
        <div className="navitem"> 
            <ul>
               <Link className='menu' href="/">Home</Link>
               <Link className='menu' href="/Service">Services</Link>
               <Link className='menu' href="/About">About Us</Link>
               <Link className='menu' href="/Contact">Contact Us</Link>
            </ul>
        </div>
    </div>
    <div className="helpline-container">
      <div className="helpline-text">
        For Your Cable & Internet Service📡📺, 📞Call Our Helpline No:- +1800 860 3891   ------ 📍🌏St. Petersburg, FL
      </div>
    </div>
    </>
  )
}

export default Navbar