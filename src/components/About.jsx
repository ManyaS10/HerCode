import React from "react";
import "../style.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <div className="about-text">
          <h2 className="section-title">About HerCode</h2>
          <p className="about-highlight">
            💪 We are a community of dreamers, coders, and changemakers.
          </p>
          <p className="about-description">
  🚀 <strong>HerCode</strong> is not just a platform—it's a movement! 💥
  We’re here to empower women who are passionate about technology, from beginners taking their first steps to seasoned pros leading the charge.
  🌍 Our mission is simple: to connect, inspire, and educate women globally. Whether it's through <em>mentorship</em>, <em>real-life stories</em>, or hands-on tech projects, we are all about making the world of tech more inclusive.
  🔥 We believe that by closing the gender gap in tech, one line of code at a time, we can create a better future for everyone.
</p>
<a href="#inspiring-women" className="btn btn-about">Meet the Women</a>

        </div>
        <div className="about-image">
          <img
            src="/about.avif"
            alt="Women in tech"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
