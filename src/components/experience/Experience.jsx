import React from 'react'
import "./experience.css"
import { FaRegCheckCircle } from "react-icons/fa";

function Experience() {
  return (
    <section id="experience" ><h5>
    What have i mastered ? </h5>
      <h2>Experience over the years.....</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
         <h3>Frontend developer</h3>
          <div className='experience__content'>
            <article className='experience__details'>
            <FaRegCheckCircle className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>            
              </div>
           
            </article>

            <article className='experience__details'>
            <FaRegCheckCircle className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            

            
            </article>

            <article className='experience__details'>
            <FaRegCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Javascript</h4>
            <small className='text-light'>Intermediate</small></div>
            
            

            
            </article>

            <article className='experience__details'>
            <FaRegCheckCircle className='experience__details-icon'/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small></div>
            

            
            </article>

            <article className='experience__details'>
            <FaRegCheckCircle className='experience__details-icon'/>
            <div>
            <h4>Tailwind</h4>
            <small className='text-light'>Experienced</small></div>
            

            
            </article>

            <article className='experience__details'>
            <FaRegCheckCircle className='experience__details-icon'/>
            <div>
            <h4>React.js</h4>
            <small className='text-light'>Experienced</small></div>
            

            
            </article>
          
          </div>
        
        </div>


        {/*=============================backedn design here================================*/}
        <div className='experience__backend'>

        <h3>Backend developer</h3>
        <div className='experience__content'>
          <article className='experience__details'>
          <FaRegCheckCircle className='experience__details-icon'/>
         <div>
         <h4>MONGODB</h4>
         <small className='text-light'>Experienced</small></div>
          

          
          </article>

          <article className='experience__details'>
          <FaRegCheckCircle className='experience__details-icon'/>
         <div>
         <h4>Node.js</h4>
         <small className='text-light'>Intermediate</small></div>
          

          
          </article>

          <article className='experience__details'>
          <FaRegCheckCircle className='experience__details-icon'/>
          <div>
          <h4>Express.js</h4>
          <small className='text-light'>Intermediate</small></div>
          

          
          </article>

          <article className='experience__details'>
          <FaRegCheckCircle className='experience__details-icon'/>
          <div>
          <h4>Redux.js</h4>
          <small className='text-light'>Experienced</small></div>
          

          
          </article>

          <article className='experience__details'>
          <FaRegCheckCircle className='experience__details-icon'/>
          <div>
          <h4>Python Django</h4>
          <small className='text-light'>Experienced</small>
          </div>

          
          </article>

          <article className='experience__details'>
          <FaRegCheckCircle className='experience__details-icon'/>
          <div>
          <h4>NExt.js </h4>
          <small className='text-light'>Intermediate</small>
          </div>
          

          
          </article>
        
        </div>

          
        
        
        </div>
      </div>
    
    
    </section>
  )
}

export default Experience