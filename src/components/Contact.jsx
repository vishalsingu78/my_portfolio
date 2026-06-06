import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_fxzak9m",
        "template_lf7spew",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "Gh7XgRgg2HAKQOH0f",
      );
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message.");
    }
  };
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h4>Get In Touch</h4>
          <h2>Contact Me</h2>
          <p>
            Have a project, job opportunity, or collaboration in mind? Feel free
            to reach out. I'll be happy to connect.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-card">
            <h3>Let's Connect</h3>

            <div className="contact-info">
              <div className="contact-item">
                <span>📧</span>
                <a href="mailto:singuvishal123@gmail.com">
                  singuvishal123@gmail.com
                </a>
              </div>

              <div className="contact-item">
                <span>📱</span>
                <a href="tel:+919959582504">+91 9959582504</a>
              </div>

              <div className="contact-item">
                <span>📍</span>
                <p>Hyderabad, Telangana, India</p>
              </div>
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

          <form
            className="contact-form"
            action="https://formsubmit.co/your-email@example.com"
            method="POST"
          >
            <h3>Fill your Quote</h3>
            <input type="text" name="name" placeholder="Your Name" required />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <input type="text" name="subject" placeholder="Subject" required />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
