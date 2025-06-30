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
    demo: "https://ajaykumar-portfolio-dev.netlify.app/", // ✅ updated here
  },
  {
    title: "ToDo Application",
    description:
      "A simple ToDo web app to manage daily tasks with local storage support. Clean interface and interactive UI.",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/GADDAMAJAYKUMAR/TODO-repo",
    demo: "https://gaddamajaykumar.github.io/TODO-repo/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section" data-aos="fade-up">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card" data-aos="zoom-in" data-aos-delay={idx * 100}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <p><strong>Tech Stack:</strong> {proj.tech}</p>
            <div className="project-links">
              <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
              <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
