import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      company: "Srifin Credit Pvt Ltd",
      role: "Full Stack Developer",
      duration: "Feb 2025 - Present",
      description: [
        "Developed and maintained enterprise-level fintech applications using Java, React.js, Node.js, and PostgreSQL.",
        "Designed and implemented Asset Management System (AMS) to manage the complete lifecycle of 1,000+ IT assets including procurement, allocation, returns, and depreciation tracking.",
        "Enhanced Loan Management System (FinLib) by developing automated NOC PDF generation, reducing manual processing effort by 85%.",
        "Implemented Role-Based Access Control (RBAC) for secure authentication and authorization across multiple business modules.",
        "Integrated DigiLocker Aadhaar Verification APIs within Employee Onboarding System (EOS), achieving 95%+ KYC accuracy.",
        "Contributed to cloud migration initiatives by moving AWS Lambda functions and SQL-based reporting solutions to Google Cloud Platform (GCP).",
        "Collaborated with cross-functional teams to develop scalable APIs, optimize database performance, and improve application reliability.",
      ],
      tech: [
        "Java",
        "React.js",
        "Node.js",
        "PostgreSQL",
        "Spring Boot",
        "GCP",
        "BigQuery",
        "REST APIs",
        "Git",
      ],
    },
    {
    company: "",
    role: "Java J2EE Developer Intern",
    duration: "Mar 2024 - May 2024",
    description: [
      "Developed enterprise Java applications using J2EE (Servlets, JSP, JDBC); gained hands-on exposure to corporate SDLC practices, code review workflows, and Java backend development standards at scale.",
    ],
    tech: [
      "Java",
      "J2EE",
      "Servlets",
      "JSP",
      "JDBC",
      "SQL",
      "Git",
    ],
  },
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <div className="experience-header">
          <h4>My Journey</h4>
          <h2>Work Experience</h2>
          <p>
            Professional experience building scalable web applications,
            fintech solutions, and enterprise software systems.
          </p>
        </div>

        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-top">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span>{exp.duration}</span>
            </div>

            <ul className="experience-points">
              {exp.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            <div className="tech-stack">
              {exp.tech.map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;