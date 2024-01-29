import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../media/me.png";
import HeaderSocial from "./headerSocial";

function Header() {
  return (
    <header>
      <div  id="#home" className="container header__container">
        <h5>Hey there, I'm</h5>
        <h1>Gokul Gopan</h1>
        <h1 className="text-light">Wed Develeoper </h1>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={Me} alt="img" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
