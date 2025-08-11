// src/components/Projects.jsx
import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio to showcase skills, education, and projects. Designed with modern UI and scroll animations.",
    tech: "React, CSS, Netlify",
    github: "https://github.com/GADDAMAJAYKUMAR/Ajay-s--Dev--Portfolio-",
    demo: "https://ajaykumar-portfolio-dev.netlify.app/",
  },
  {
    title: "ToDo Application",
    description:
      "A simple ToDo web app to manage daily tasks with local storage support. Clean interface and interactive UI.",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/GADDAMAJAYKUMAR/TODO-repo",
    demo: "https://gaddamajaykumar.github.io/TODO-repo/",
  },
  {
    title: "DevConnect",
    description:
      "A full-stack developer platform to connect developers, showcase profiles, and share reviews. Built with React.js frontend and Node.js/Express with MongoDB backend. Features user registration/login with JWT, profile management, reviews, and responsive UI.",
    tech: "React.js, Node.js, Express, MongoDB, JWT, Bootstrap",
    github: "https://github.com/GADDAMAJAYKUMAR/DevConnect",
    demo: "https://reliable-genie-48ca43.netlify.app/",
  },
  {
    title: "Cafeteria Booking System",
    description:
      "A full-stack table booking system allowing users to register, login, and book tables by date, time, and meal type. Features OTP email verification and secure JWT authentication.",
    tech: "React.js, Node.js, Express, MongoDB, JWT, Bootstrap",
    github: "https://github.com/your-username/cafeteria-booking-system", // replace with your actual repo if different
    demo: "https://ajcafebooking.netlify.app/",
  },
  {
    title: "MERN Job Portal",
    description:
      "A job portal built with the MERN stack to connect job seekers and employers with a modern and user-friendly interface.",
    tech: "MongoDB, Express.js, React.js, Node.js",
    github: "https://github.com/your-username/mern-job-portal", // add your GitHub link if available
    demo: "https://jobportal-mernajay.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section" data-aos="fade-up">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="project-card"
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
          >
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <p>
              <strong>Tech Stack:</strong> {proj.tech}
            </p>
            <div className="project-links">
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  GitHub
                </a>
              )}
              {proj.demo && (
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
