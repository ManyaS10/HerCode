import React, { useEffect } from "react";
import "../style.css";

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="hero">
      <nav className="navbar navbar-expand-lg navbar-dark glass-navbar fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold d-flex align-items-center hercode-logo" href="#hero">
            HerCode
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav text-uppercase gap-3">
              <li className="nav-item"><a className="nav-link custom-nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link custom-nav-link" href="#services">What We Do</a></li>
              <li className="nav-item"><a className="nav-link custom-nav-link" href="#blogs">Blogs</a></li>
              <li className="nav-item"><a className="nav-link custom-nav-link" href="#success">Stories</a></li>
              <li className="nav-item"><a className="nav-link custom-nav-link" href="#events">Events</a></li>
              <li className="nav-item"><a className="nav-link custom-nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="hero-content text-center text-white">
        <h1 className="display-2 fw-bold hercode-title">HerCode</h1>
        <p className="lead fs-4 slogan">She builds. She leads. She codes.</p>
        <p className="quote fst-italic">“When women support each other, incredible things happen.”</p>
        <a href="#about" className="btn btn-hero mt-3">Join the Movement</a>
      </div>
    </header>
  );
};

export default Hero;
