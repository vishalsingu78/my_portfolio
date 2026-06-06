import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="skills-header">
          <h4>What I Work With</h4>
          <h2>Skills & Expertise</h2>
          <p>
            Technologies, tools, and methodologies I use to build scalable web applications.
          </p>
        </div>

        <div className="skills-grid">

          <div className="skill-category">
            <h3>Frontend Development</h3>
            <div className="skill-tags">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Backend Development</h3>
            <div className="skill-tags">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>REST APIs</span>
              <span>JWT</span>
              <span>OAuth</span>
              <span>JAVA</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Database</h3>
            <div className="skill-tags">
              <span>PostgreSQL</span>
              <span>MySQL</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Tools & Platforms</h3>
            <div className="skill-tags">
              <span>GitHub</span>
              <span>Postman</span>
              <span>VS Code</span>
              <span>Eclsipse IDE</span>
            </div>
          </div>

          <div className="skill-category full-width">
            <h3>Professional Skills</h3>

            <div className="soft-skills">
              <div>✓ Problem Solving</div>
              <div>✓ Team Collaboration</div>
              <div>✓ Agile Development</div>
              <div>✓ Performance Optimization</div>
              <div>✓ API Integration</div>
              <div>✓ Debugging</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;