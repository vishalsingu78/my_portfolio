import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const companyProjects = [
    {
      title: "Asset Management System (AMS)",
      description:
        "Designed and developed a full-stack Asset Management System to manage the complete lifecycle of 1,000+ IT assets, including laptops, mobile devices, SIM cards, and accessories. Implemented procurement, vendor management, purchase orders, invoice tracking, allocation, returns, audit trails, and automated depreciation tracking. Developed RBAC-based security for 5 user roles, improving asset visibility by 95% and reporting accuracy by 90%.",
      tech: ["Java", "React.js", "Node.js", "PostgreSQL"],
    },
    {
      title: "Loan Management System (FinLib)",
      description:
        "Developed and enhanced modules for an RBI-registered NBFC's Loan Management System. Built automated NOC PDF generation for closed loans, reducing manual processing effort by 85%. Implemented Role-Based Access Control (RBAC) for secure access management and contributed to cloud migration by moving 80+ AWS Lambda functions and 30+ SQL queries to GCP Cloud Functions and BigQuery while maintaining 100% report accuracy.",
      tech: ["Java", "React.js", "PostgreSQL", "GCP", "BigQuery"],
    },
    {
      title: "Employee Onboarding System (EOS)",
      description:
        "Developed employee onboarding workflows and integrated DigiLocker Aadhaar Verification APIs for automated identity validation. Achieved 95%+ KYC accuracy and reduced manual verification effort by 80% while standardizing records for 2,000+ employees. Built dynamic Salary Structure PDF generation to automate HR documentation processes.",
      tech: ["Java", "React.js", "Node.js", "PostgreSQL", "REST APIs"],
    },
  ];

  const personalProjects = [
    {
      title: "Export Business Management Platform",
      description:
        "Designed and developed a responsive platform for international food export operations. Implemented product catalog management, inquiry tracking, customer interactions, and business workflow modules to streamline export processes.",
      tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "REST APIs"],
      // github: "#",
      demo: "https://uniqueglobalexports.com/",
    },
    {
      title: "HomeTheater Marketing Application",
      description:
        "Built a marketing and lead generation application for showcasing home theater products. Developed responsive UI, inquiry workflows, product displays, and customer engagement features.",
      tech: ["React.js", "Node.js", "PostgreSQL", "CSS3"],
      // github: "#",
      // demo: "#",
    },
    {
      title: "Developer Portfolio Website",
      description:
        "Explore my portfolio website to learn more about my professional experience, technical skills, and projects. The portfolio showcases my work in Full Stack Development, including fintech applications, API integrations, and modern web solutions built using Java, React.js, Node.js, PostgreSQL.",
      tech: ["React.js", "CSS3", "JavaScript"],
      // github: "#",
      // demo: "#",
    },
  ];

  const ProjectCard = ({ project }) => (
    <div className="project-card">
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tech-stack">
          {project.tech.map((tech, idx) => (
            <span key={idx}>{tech}</span>
          ))}
        </div>

        {(project.github || project.demo) && (
          <div className="project-buttons">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}

            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        {/* HEADER */}
        <div className="projects-header">
          <h4>My Work</h4>
          <h2>Featured Projects</h2>
          <p>
            A collection of professional and personal projects built using
            modern web technologies.
          </p>
        </div>

        {/* COMPANY PROJECTS */}
        <div className="project-section">
          <h3 className="section-title">🏢 Professional / Company Projects</h3>

          <div className="projects-grid">
            {companyProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* PERSONAL PROJECTS */}
        <div className="project-section">
          <h3 className="section-title">👨‍💻 Freelance & Personal Projects</h3>

          <div className="projects-grid">
            {personalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
