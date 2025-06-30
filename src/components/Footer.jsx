// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up">
      <p>&copy; {new Date().getFullYear()} Gaddam Ajay Kumar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
