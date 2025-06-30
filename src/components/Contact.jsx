// src/components/Contact.jsx
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-left">
          <p><i className="fas fa-envelope"></i> gaddamajaykumar1@gmail.com</p>
          <p><i className="fas fa-phone"></i> +91 9701207493</p>
          <p><i className="fas fa-map-marker-alt"></i> Hyderabad, Telangana, India</p>

          <div className="social-icons">
            <a href="https://github.com/GADDAMAJAYKUMAR" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ajay-kumar-gaddam-299475294/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:gaddamajaykumar1@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>

          <a href="https://drive.google.com/uc?export=download&id=1r2KMtMeJxjqnKyvKkvAW773QMWqenU38" className="btn" download>
            Download Resume
          </a>
        </div>

        <div className="contact-right">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
