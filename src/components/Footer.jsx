import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row gy-4">

          {/* Column 1 - Logo & Contact */}
          <div className="col-md-3">
            <h2 className="footer-logo text-pink fw-bold">HerCode</h2>
            <p>Empowering Women in Tech</p>
            <p className="small">Pune, Maharashtra, India</p>
            <p className="small mb-2">
              <strong>Phone:</strong> +91 7260949547<br />
              <strong>Email:</strong> contact@hercode.in
            </p>
            <div className="footer-socials d-flex gap-3">
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaXTwitter />
  </a>
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn />
  </a>
</div>

          </div>

          {/* Column 2 - Useful Links */}
          <div className="col-md-3">
            <h5 className="fw-semibold">Useful Links</h5>
            <ul className="list-unstyled small">
              <li><a href="#hero">› Home</a></li>
              <li><a href="#about">› About</a></li>
              <li><a href="#services">› What We Do</a></li>
              <li><a href="#portfolio">› Inspiring Women</a></li>
              <li><a href="#contact">› Contact</a></li>
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div className="col-md-3">
            <h5 className="fw-semibold">Our Services</h5>
            <ul className="list-unstyled small">
              <li>› Mentorship Programs</li>
              <li>› Web Development</li>
              <li>› Community Events</li>
              <li>› Career Guidance</li>
              <li>› Coding Bootcamps</li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="col-md-3">
            <h5 className="fw-semibold">Newsletter</h5>
            <p className="small">Stay updated with our latest events and stories.</p>
            <form className="d-flex flex-column gap-2">
              <input type="email" className="form-control form-control-sm" placeholder="Your email" />
              <button type="submit" className="btn btn-sm btn-pink">Subscribe</button>
            </form>
          </div>

        </div>

        <hr className="my-4 border-light" />
        <div className="text-center small">
          <p className="mb-0">© 2025 <strong>HerCode</strong>. All rights reserved.</p>
          <p>Designed with ❤️ by Manya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
