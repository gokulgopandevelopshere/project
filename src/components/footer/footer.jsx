import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./footer.css"

function footer() {
  return (
   <footer>
    <a href='#' className='footer__logo'>Gokul GOPAN</a>
      <ul className='permalink'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#service'>Service</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#testimonials'>Testimonials</a></li>
      <li><a href='#contact'>Contact</a></li>
       <div className='footer__socials'>
        <a href="https://facebook.com"> <FaFacebook/></a>
        <a href="https://instagram.com"><FaInstagram/></a>
        <a href="https://linkedin.com"><FaLinkedin /></a>
       
       </div>

       <div className='footer__copyright'>
       <small>&copy;2024  Design&DEVeloped  Gokul Gopan | All Rights Reserved.</small>
       </div>
      
      
      
      </ul>
   
   </footer>
  )
}

export default footer