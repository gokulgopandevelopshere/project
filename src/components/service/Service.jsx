import React from 'react'
import { MdOutlineVerified } from "react-icons/md";
import "./Service.css"
function Service() {
  return (
    <section id="service" >
      <h5>What i could offer</h5>
      <h2>Services</h2>

        <div className='container services__container'>
          <article className='service'>
            <div className='service__head'>
            <h3>UI/Ux design</h3>
            </div>
          

            <ul className='service__list'>
              <li>
              <MdOutlineVerified className='service__list-icon'/>
              <p>1. User-Centric Approach: Emphasize your focus on understanding user needs and behaviors to design intuitive and delightful experiences. Mention </p>
              </li>

              <li>
              <MdOutlineVerified className='service__list-icon'/>
              <p>2. Creative Problem Solving: Showcase your ability to translate complex challenges into simple and effective solutions through design thinking and</p>
              </li>


              <li>
              <MdOutlineVerified className='service__list-icon'/>
              <p>3. Visual Design Expertise:  Demonstrate your skills in crafting visually appealing and consistent interfaces. Include samples of your work in various</p>
              </li>


             


      
            </ul>
          </article>
          {/*------------------------------------- end of ui ux servicess-------------------- */}






          <article className='service'>
            <div className='service__head'>
            <h3>Web Application Deve</h3>
            </div>
          

            <ul className='service__list'>
              <li>
              <MdOutlineVerified className='service__list-icon'/>
              <p>Custom Web Application Development: From concept to completion, we collaborate with you to define your needs, design the user interface, scalable</p>
              </li>

              <li>
              <MdOutlineVerified className='service__list-icon'/>
              <p>Front-End Development: We leverage cutting-edge front-end technologies like React, Angular, and Vue.js to create visually stunning and user-friendly</p>
              </li>


              <li>
              <MdOutlineVerified className='service__list-icon'/>
              <p>Back-End Development: Our back-end developers are masters of building secure, reliable, and efficient server-side solutions using languages </p>
              </li>


             

              
            </ul>
          </article>
          

        
        
        </div>
    
    
    </section>
  )
}

export default Service