import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Hero.css";
import HelloLottie from "./HelloLottie";
import GreetingLottie from "./GreetingLottie";
const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-left" data-aos="fade-right">
        <div className="greeting-lottie">
       <h1>
          Hi all, I'm <span className="highlight">Ajay</span> <GreetingLottie/>
        </h1>
        </div>
        <p className="hero-subtext">
          A passionate Full Stack Developer skilled in MERN, Python, and Cloud.
          I build web solutions that are modern, scalable and user-friendly.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            Contact Me
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1r2KMtMeJxjqnKyvKkvAW773QMWqenU38"
            className="btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            Download My Resume
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/GADDAMAJAYKUMAR"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/ajay-kumar-gaddam-299475294"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:gaddamajaykumar1@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

    <div className="hero-right" data-aos="zoom-in">
        <HelloLottie />
    </div>
    </section>
  );
};

export default Hero;
