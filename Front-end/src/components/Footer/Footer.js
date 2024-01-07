import React from "react";
import "./Footer.css";


export default function Footer() {
  return (
    <footer>
      <a herf="#" className="footer__logo">
        Show Tracker
      </a>

      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        {/* <li>
          <a href="#experience">Experience</a>
        </li> */}
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        {/* <li>
          <a href="#portfolio">Projects</a>
        </li> */}
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      {/* <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>

        <a href="https://instagram.com">
          {" "}
          <FiInstagram />
        </a>

        <a href="https://twitter.com">
          <AiOutlineTwitter />
        </a>
      </div> */}

      <div className="footer__copyright">
        <small>&copy; Ziqian Pan. All rights reserved.</small>
      </div>
    </footer>
  );
}