// src/components/About.jsx
import React, { useState } from "react";
import "./About.css";
import userImage from "../assets/user.jpg"; // Make sure this image exists

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="about" className="about-section" data-aos="fade-right">
      <h2 className="sub-title">About Me</h2>
      <div className="about-container">
        <div className="about-left">
          <img src={userImage} alt="Ajay" />
        </div>
        <div className="about-right">
          <p>
            I am Gaddam Ajay Kumar, an aspiring Full Stack Developer and
            Technology Consultant with a strong passion for coding and solving
            real-world problems through technology.
          </p>

          <div className="tab-titles">
            <p
              className={activeTab === "skills" ? "tab-link active" : "tab-link"}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </p>
            <p
              className={activeTab === "education" ? "tab-link active" : "tab-link"}
              onClick={() => setActiveTab("education")}
            >
              Education
            </p>
          </div>

          <div className="tab-content">
            {activeTab === "skills" && (
              <ul>
                <li><strong>Languages:</strong> Java, Python, C, HTML, CSS, JavaScript</li>
                <li><strong>Frameworks:</strong> React, Node.js, Express.js, Bootstrap, Tailwind CSS</li>
                <li><strong>Databases:</strong> SQL</li>
                <li><strong>Tools:</strong> VS Code, Git, MS Office</li>
                <li><strong>Soft Skills:</strong> Communication, Teamwork, Time Management</li>
              </ul>
            )}
            {activeTab === "education" && (
              <ul>
                <li><strong>B.Tech - CSE (DS):</strong> CMR Institute of Technology – CGPA 6.67</li>
                <li><strong>Diploma:</strong> Vaagdevi Engineering College – 68.05%</li>
                <li><strong>SSC:</strong> ZPSS High School – 58%</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
