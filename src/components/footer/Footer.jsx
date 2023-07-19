import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className={styles.footer__logo}>
        DJ CREATIONS
      </a>

      <ul className={styles.permalinks}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className={styles.footer__socials}>
        <a
          href="https://github.com/deepeshjaindj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/deepeshjain-dj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://instagram.com/deepeshjaindj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram />
        </a>
        <a
          href="https://twitter.com/deepeshjaindj2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoTwitter />
        </a>
      </div>

      <div className={styles.footer__copyright}>
        <small>
          <a
            href="http://linkedin.com/in/deepeshjain-dj"
            target="_blank"
            rel="noopener noreferrer"
          >
            &copy;Deepesh Jain DJ
          </a>{" "}
          | All Rights Reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
