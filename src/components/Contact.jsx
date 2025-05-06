import React, { useState } from "react";
import axios from "axios";
import "../style.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", {
        name: formData.name,
        email: formData.email,
        message: `${formData.subject} - ${formData.message}`,
      });
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-4">Get in Touch</h2>
        <p className="text-center mb-4">
          Have questions, ideas, or want to collaborate? We'd love to hear from you!
        </p>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-hero px-4 py-2">
                  Send Message
                </button>
              </div>
              {status && <p className="text-center mt-3">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
