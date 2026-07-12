import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      company: "Srifin Credit Pvt Ltd",
      role: "Full Stack Developer",
      duration: "Mar 2025 - Present",
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
        "React.js",
        "Node.js",
        "Java",
        "PostgreSQL",
        "Express.js",
        "Athena",
        "GCP",
        "BigQuery",
        "REST APIs",
        "Git",
      ],
    },
    {
      company: "Armo TechSolutions Pvt Ltd",
      role: "Junior Software Engineer",
      duration: "Jan 2023 - Feb 2025",
      description: [
        "Developed and maintained enterprise business applications using Java, React.js, Node.js, Express.js, and PostgreSQL.",
        "Engineered a Debit Card Distribution Management module to automate the lifecycle from Head Office → Regional Office → Branch → Customer, enabling real-time inventory tracking, allocation, dispatch, and delivery for 4,400+ debit cards while reducing manual tracking efforts by 70%.",
        "Designed and implemented 5+ operational reports to monitor debit card inventory, dispatch status, pending allocations, and customer delivery, reducing report preparation time by 80% and improving operational visibility.",
        "Built a multi-stage Customer Call Tracking and Verification Workflow supporting collaboration between Head Office, Telecallers, and Branch Offices, streamlining the verification process for 1,200+ customer records and reducing follow-up delays by 60%.",
        "Implemented a configurable workflow automation and escalation engine with automated task assignment across organizational levels, reducing manual coordination by 65% and improving turnaround time (TAT) by 40%.",
        "Designed and implemented Role-Based Access Control (RBAC) supporting 10+ user roles with module-level permissions, reducing unauthorized access risks by 90% and strengthening application security.",
        "Developed a comprehensive audit trail system to capture workflow transitions, user activities, approvals, and timestamps, ensuring complete traceability and improving operational transparency.",
        "Created interactive dashboards and 8+ exportable reports to monitor workflow performance, pending tasks, and operational metrics, reducing reporting effort by 75%.",
        "Contributed to the development of a centralized enterprise platform integrating multiple business modules with shared authentication, role management, and reusable components, reducing duplicate development efforts by 40% and improving maintainability."
      ],
       tech: ["Java",
        "React.js",
        "Node.js",
        "PostgreSQL",
        "REST APIs",
        "Git",],
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