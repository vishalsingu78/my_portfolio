import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h4>Get In Touch</h4>
          <h2>Contact Me</h2>
          <p>
            Have a project, job opportunity, or collaboration in mind?
            Feel free to reach out. I'll be happy to connect.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-card">
            <h3>Let's Connect</h3>

            <div className="availability">
              <span>🟢 Available for Opportunities</span>
            </div>

            <div className="contact-info">
              <div className="contact-item">
                <span>📧</span>
                <a href="mailto:singuvishal77@gmail.com">
                  singuvishal77@gmail.com
                </a>
              </div>

              <div className="contact-item">
                <span>📱</span>
                <a href="tel:+919959582504">
                  +91 9959582504
                </a>
              </div>

              <div className="contact-item">
                <span>📍</span>
                <p>Hyderabad, Telangana, India</p>
              </div>

              <div className="contact-item">
                <span>💼</span>
                <p>Full Stack Developer</p>
              </div>

              <div className="contact-item">
                <span>⚡</span>
                <p>Java • React.js • Node.js • PostgreSQL</p>
              </div>
            </div>

            <div className="contact-cta">
              <p>
                Looking for a developer to build modern web applications,
                optimize existing systems, or collaborate on innovative ideas?
                Let's create something impactful together.
              </p>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/vishalsingu78"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/singu-vishal-b4830a248/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;