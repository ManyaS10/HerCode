import React from "react";
import "../style.css";

const services = [
  {
    title: "Tech Workshops",
    description: "We organize hands-on workshops to upskill women in web development, data science, and more.",
    icon: "💻",
  },
  {
    title: "Mentorship",
    description: "Connect with industry-leading women mentors to guide your tech journey.",
    icon: "🌟",
  },
  {
    title: "Community Events",
    description: "From hackathons to panel discussions, join a network that celebrates women in tech.",
    icon: "🤝",
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section py-5">
      <div className="container text-center">
        <h2 className="section-title mb-4">What We Do</h2>
        <p className="mb-5">Empowering women to code, create, and conquer in the world of tech.</p>

        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="service-card p-4 h-100">
                <div className="service-icon mb-3">{service.icon}</div>
                <h5 className="fw-bold">{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
