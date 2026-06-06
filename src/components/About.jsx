import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-left">
          <h4 className="section-subtitle">Get To Know</h4>
          <h2 className="section-title">About Me</h2>

          <p className="about-text">
            I am a Full Stack Developer with 1.7 years of professional
            experience in designing and developing scalable web applications.
            I specialize in building responsive user interfaces using React.js
            and developing robust backend services with Node.js and Express.js.
          </p>

          <p className="about-text">
            Throughout my career, I have worked on enterprise-level projects,
            implemented authentication systems, REST APIs, database
            integrations, and optimized application performance to enhance user
            experience.
          </p>

          <p className="about-text">
            I am passionate about learning new technologies, solving complex
            problems, and building high-quality software solutions that create
            real business value.
          </p>

          <div className="about-buttons">
            <a href="#projects" className="about-btn">
              View Projects
            </a>

            <a href="#contact" className="about-btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="about-right">

          <div className="about-card">
            <h3>1.7+</h3>
            <p>Years Experience</p>
          </div>

          <div className="about-card">
            <h3>6+</h3>
            <p>Projects Completed</p>
          </div>

          <div className="about-card">
            <h3>15+</h3>
            <p>Technologies & Tools</p>
          </div>

          <div className="about-card">
            <h3>100%</h3>
            <p>Commitment</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;