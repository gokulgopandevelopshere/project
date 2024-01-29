import React from "react";
import "./Testimonial.css";
import Client2 from "./../../media/client2.jpg"
import Client1 from "./../../media/c1.jpg"
import Ce3 from "./../../media/clients/c1.jpg"
import Ce4 from "./../../media/clients/c2.jpg"
import Ce5 from "./../../media/clients/c3.jpg"
import Ce6 from "./../../media/clients/c4.jpg"
import Ce7 from "./../../media/clients/ce8.png"
import Ce9 from "./../../media/clients/ce9.png"
import Ce10 from "./../../media/clients/ce10.png"
import Ce11 from "./../../media/clients/ce11.png"

// import Swiper core and required modules
import {   Pagination  } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
 
import 'swiper/css/pagination';
 

const data = [
  {
     avatar :  Client2 ,
     name : "Valentina Dupont, CEO of Everlyne Couture",
     review : "Mr. Gokul Gopan's website design isn't just aesthetically pleasing, it's a strategic masterpiece. My high-end fashion brand has undergone a digital renaissance, attracting a whole new clientele who appreciate both style and substance."
  },
  {
    avatar :  Client1  ,
    name: "Lord Alistair ",
    review: "With Gokul's website, my curated wine tastings have gone from quaint local gatherings to international sensations. His elegant design perfectly captures the essence of Chateau Montfort and its commitment to exquisite experiences."
  },
  {
     avatar :  Ce3  ,
     name : "Dr. Isabella Alvarez, Astrophysicist at MIT",
     review : "Mr. Gopan's website for my research lab is a beacon of clarity in the complex world of astrophysics. He transformed complex data into captivating visuals, drawing in students and funding like never before."
  },
  {
     avatar :  Ce10 ,
     name : "Marquise Valentina d'Este, Founder of La Dolce Vita Foundation",
     review : "Gokul's website gave my charity a voice that resonates. With his artistry, we can now paint a vivid picture of the needs of underprivileged children, inspiring generosity and changing lives."
  },
  {
     avatar :  Ce11 ,
     name : "Sir Charles Blackwood, Managing Partner at Blackwood & Sons Investments",
     review : "Mr. Gopan's website isn't just a digital portfolio, it's a declaration of trust. His professional design and intuitive navigation instill confidence in potential investors, making Blackwood & Sons the epitome of financial finesse."
  },
  {
    avatar: Ce9,
    name: "Lady Anastasia Petrova, Prima Ballerina at the Bolshoi Theatre",
    review: "Gokul's website captures the grace and power of ballet like no other. His delicate touch translates the ethereal beauty of dance into pixels, enchanting audiences and propelling me to new heights."
  },
  {
    avatar: Ce7  ,
    name: "Professor Alistair Montgomery, Headmaster of Eton College",
    review: "Mr. Gopan's website for Eton is more than just a digital prospectus, it's a portal to tradition and excellence. His timeless design embodies the legacy of our institution, attracting the brightest minds from around the globe."
  }
]

function Testimonial() {
  return (
    <section id="testimonials">
      <h2>Reviews from client</h2>
      <h2>Testimonial</h2>     

      <Swiper className="container testimonials__container"
      
      
      modules={[   Pagination ]}
      spaceBetween={30}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      
      
      >
      {
        data.map(({avatar,name,review},index) => {
        return(
        <SwiperSlide key={index}className="testimonial">
        <div className="client__avatar">
          <img src={avatar} alt="avatar" />
        </div>

        <h5 className="client__name"> {name}</h5>
        <small className="client__review">{review}
           
        </small>
      </SwiperSlide> 
        )   
      })
    }

        
      </Swiper>
    </section>
  );
}

export default Testimonial;
