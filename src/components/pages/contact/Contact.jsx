import React from "react";
import "./contact.css";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <div name="contact" className="contact-container">
      <div>
        <p className="contact-title">
          Need help with a project? <span>Let's talk!</span>
        </p>
      </div>
      <div>
        <p className="contact-content">
          We are always looking for new projects to help take design to the next
          level! send us an email about your project at
          <a href="mailto:info@manfreetechnologies.com">
            info@manfreetechnologies.com
          </a>
        </p>
      </div>
      <div className="footer">
        <div className="contact-footer">
          <Link to="service" smooth={true} duration={500}>
            Services
          </Link>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </div>
        <div className="copyright">
          <p>© 2023 Manfree Technologies. All Rights Reserved.</p>
          <p>Coimbatore, India</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
