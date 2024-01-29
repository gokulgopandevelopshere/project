import React from 'react'

import { useState } from 'react';
import "./nav.css"
import { FaHome } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoBookmarksSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

function Nav() {


  const[activeNav,setActiveNav] = useState('#');

  return (
    <nav>
    
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><FaHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''}><FaUserSecret /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active' : ''}><IoBookmarksSharp /></a>
      <a href="#service" onClick={() => setActiveNav('#service')} className={activeNav ==='#service' ? 'active' : ''}> <MdMiscellaneousServices /> </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active' : ''}><IoCall /></a>
      
    </nav>
  )
}

export default Nav