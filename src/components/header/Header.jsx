import React from "react";
import CTA from "./CTA";
import DJ_TransBG from "../../assets/DeepeshJain-WithoutBG.png";
import HeaderSocials from "./HeaderSocials";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header id="home">
      <div className={`container ${styles.header__container}`}>
        <h5>Hello I'm</h5>
        <h1>Deepesh Jain</h1>
        <h5 className="text-light">Front End Developer (React JS)</h5>
        <CTA />

        <div className={styles.me}>
          <img src={DJ_TransBG} alt="Deepesh Jain DJ" />
        </div>

        <HeaderSocials />

        <a href="#contact" className={styles.scroll__down}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
