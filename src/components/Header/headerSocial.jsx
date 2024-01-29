import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa"; 
import "./header.css"
const HeaderSocial = () => {
  return (
    <div className='header__socials'>    
        <a href="https://linkedin.com" target="blank"><FaLinkedin /></a>
        <a href="https://github.com" target="blank"><FaGithub /> </a>
        <a href="https://dribble.com" target="blank"> <FaDribbble /> </a>
    </div>
  )
}

export default HeaderSocial