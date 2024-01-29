import React from "react";
import ME from "../../media/me.png";
import { RxAvatar } from "react-icons/rx";
import { HiTrophy } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa6";
import "./about.css"
function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2> About me </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me " />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <HiTrophy className="about__icon" />
              <h5> Experience</h5>
              <small>3+ year work life </small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5> Clients</h5>
              <small>35+ clients across the GLOBE </small>
            </article>

            <article className="about__card">
              <RxAvatar className="about__icon" />
              <h5> Projects</h5>
              <small>15+ projects done </small>
            </article>
          </div>

          <p>
            As a seasoned React developer with 3+ years of experience, I've
            honed my skills in building high-performance web applications that
            consistently exceed user expectations. I've spearheaded the
            development of [mention a specific project] , resulting in a
            [quantifiable achievement, e.g., 20% increase in conversion rates].
            I'm a strong believer in clean code and continuous improvement, and
            I actively contribute to a collaborative and productive development
            environment.
          </p>
          <a href="#contact" className="btn btn-primary"> Get in touch with me </a>
        </div>
      </div>
    </section>
  );
}

export default About;
