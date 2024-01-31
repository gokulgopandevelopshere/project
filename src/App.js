import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/about/About";
import Nav from "./components/Nav/Nav";
import Experience from "./components/experience/Experience";
import Service from "./components/service/Service";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/Testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />

      <Portfolio />

      <Testimonials />

      <Contact />

      <Footer />
    </>
  );
};

export default App;
