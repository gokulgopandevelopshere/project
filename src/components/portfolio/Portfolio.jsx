import React from 'react'
import "./Portfolio.css"
import image from "../../media/ui/ui.jpg"
import image2 from "../../media/ui/ui2.jpg"

import image3 from "../../media/ui/ui3.jpg"
import image4 from "../../media/ui/ui4.jpg"

import image5 from "../../media/ui/ui5.jpg"
import image6 from "../../media/ui/ui6.jpg"

const data= [
  {
    id:1,
    image: image,
    title :"the work of a  prorotyping ",
    github:"https://github.com",
    demo:"https://dribble.com"

  },
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>MY entire work portfolio</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo}) => {
            return(
              <article key={id} className="portfolio__item">
                <div className='portfolio__item-image'>
                  <img src={image} alt='' />                
                </div>
                <h3>{title} </h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live demo</a>

                </div>

              
              
              </article>

            )
          })
        }
        <article className='portfolio__item'>
          <div className='portfolio__items-image'>
            <img src={image}  alt="thisismywork " />          
          </div>
            <h3>This is a portfolio i know </h3>
            <div className='portfolio__item-cta'>
            <a href='	https://github.com' className='btn'>Github </a>
            <a href='	https://dribble.com' className='btn btn-primary' target='_blank'>Live demo </a>         
            
            </div>
            
        </article>





        <article className='portfolio__item'>
        <div className='portfolio__items-image'>
          <img src={image2}  alt="thisismywork " />          
        </div>
          <h3>This is a portfolio i know </h3>
          <div className='portfolio__item-cta'>
          <a href='	https://github.com' className='btn'>Github </a>
          <a href='	https://dribble.com' className='btn btn-primary' target='_blank'>Live demo </a>         
          
          </div>
          
      </article>




      <article className='portfolio__item'>
      <div className='portfolio__items-image'>
        <img src={image3}  alt="thisismywork " />          
      </div>
        <h3>This is a portfolio i know </h3>
        <div className='portfolio__item-cta'>
        <a href='	https://github.com' className='btn'>Github </a>
        <a href='	https://dribble.com' className='btn btn-primary' target='_blank'>Live demo </a>         
        
        </div>
        
    </article>





    <article className='portfolio__item'>
    <div className='portfolio__items-image'>
      <img src={image4}  alt="thisismywork " />          
    </div>
      <h3>This is a portfolio i know </h3>
      <div className='portfolio__item-cta'>
      <a href='	https://github.com' className='btn'>Github </a>
      <a href='	https://dribble.com' className='btn btn-primary' target='_blank'>Live demo </a>         
      
      </div>
      
  </article>


  <article className='portfolio__item'>
  <div className='portfolio__items-image'>
    <img src={image5}  alt="thisismywork " />          
  </div>
    <h3>This is a portfolio i know </h3>
    <div className='portfolio__item-cta'>
    <a href='	https://github.com' className='btn'>Github </a>
    <a href='	https://dribble.com' className='btn btn-primary' target='_blank'>Live demo </a>         
    
    </div>
    
</article>


<article className='portfolio__item'>
<div className='portfolio__items-image'>
  <img src={image6}  alt="thisismywork " />          
</div>
  <h3>This is a portfolio i know </h3>
  <div className='portfolio__item-cta'>
  <a href='	https://github.com' className='btn'>Github </a>
  <a href='	https://dribble.com' className='btn btn-primary' target='_blank'>Live demo </a>         
  
  </div>
  
</article>
         




        
      </div>
    
    
    Portfolio</section>
  )
}

export default Portfolio