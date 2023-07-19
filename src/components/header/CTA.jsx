import React from "react";
import RESUME from "../../assets/Deepesh Jain Resume.pdf";

import styles from "./Header.module.css";

const CTA = () => {
  return (
    <div className={styles.cta}>
      <a href={RESUME} download className="btn">
        Get Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
