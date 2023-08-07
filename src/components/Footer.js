import React from "react";

const Footer = () => (
  <div className="footer">
    <div className="social-icons">
      <a href="https://facebook.com/yunghavy">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="https://twitter.com/yunghavy">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://instagram.com/yunghavy">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
    <p>&copy; {new Date().getFullYear()} Yung Havy All rights reserved.</p>
  </div>
);

export default Footer;
