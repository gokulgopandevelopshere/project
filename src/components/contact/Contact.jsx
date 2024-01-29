import React from 'react'
import"./Contac.css" 
import { MdEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {


  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact" >
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>


      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
          <MdEmail className='contact__option-icon' />
          <h4>Email</h4>
          <h5>dummyemail@gmail.com</h5>
          <a href="mailto:dummyemail@gmail.com"  target="_blank"  rel="noreferrer"  > Send a message</a>                            
          </article>

          {/*this is a another option to contact */}
          <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon' />
          <h4>Messenger</h4>
          <h5>Gokul_Gopan_Here</h5>
          <a href="www.facebook.com" target="_blank"  rel="noreferrer"  > Send a message</a>              
          </article>

          {/*this is a another option to contact */}
          <article className='contact__option'>
          <FaPhoneAlt className='contact__option-icon' />
          <h4>Phone</h4>
          <h5>+91 123456789</h5>
          <a href="https://api.whatsapp.com/send?phone+915765465465" target="_blank" rel="noreferrer"  > Send a message</a>
          </article>

          



        {/*this is a another option to contact */}
        </div>    
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='First Name' required/>
          <input type="ëmail" name="email"  placeholder='Your Email' required/>
          <textarea name="message" rows="7" message="Tell me hwo can i help you ?" required></textarea>
          <button type="submit" className='btn btn-primary'>Send me a message</button>

         
        </form>
        
      </div>
    </section>
  )
}

export default Contact