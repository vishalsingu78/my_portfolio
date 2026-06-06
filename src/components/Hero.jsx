import React from "react";
import { TypeAnimation } from "react-type-animation";
// import profileImg from "../assets/profile.jpg";
import profileImg from "../assets/danalock.jpg";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h3 className="hello-text">Hello, It's Me</h3>

        <h1 className="name">Vishal Singu</h1>

        <h2 className="role">
          I'm a{" "}
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,

              "React.js Developer",
              2000,

              "PostgresSQL Database",
              2000,

              "Backend Developer",
              2000,

              "Java Programming",
              2000,

              "JavaScript Developer",
              2000,
            ]}
            speed={50}
            deletionSpeed={60}
            repeat={Infinity}
            className="typing-text"
          />
        </h2>

        <p className="description">
          Full Stack Developer with 1.7 years of experience in building
          responsive web applications, REST APIs, database management,
          authentication systems and modern user interfaces using React.js,
          Node.js, PostgreSQL and JavaScript.
        </p>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/singu-vishal-b4830a248/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/vishalsingu78"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a href="mailto:singuvishal77@gmail.com">Email</a>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="btn">
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="orbit-ring">
          <img src={profileImg} alt="Vishal Singu" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
