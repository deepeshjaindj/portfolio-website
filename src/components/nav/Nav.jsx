import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { SiCodeforces } from "react-icons/si";
import { RiCodeBoxFill, RiContactsBook2Line } from "react-icons/ri";

import styles from "./Nav.module.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? styles.active : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? styles.active : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? styles.active : ""}
      >
        <SiCodeforces />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? styles.active : ""}
      >
        <RiCodeBoxFill />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? styles.active : ""}
      >
        <RiContactsBook2Line />
      </a>
    </nav>
  );
};

export default Nav;
