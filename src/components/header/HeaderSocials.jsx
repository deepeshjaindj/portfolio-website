import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

import styles from "./Header.module.css";

const HeaderSocials = () => {
  return (
    <div className={styles.header__socials}>
      <a
        href="http://linkedin.com/in/deepeshjain-dj"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/deepeshjaindj"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://twitter.com/deepeshjaindj2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
