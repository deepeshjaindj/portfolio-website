import React from "react";

import { BiCheck } from "react-icons/bi";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className={`container ${styles.services__container}`}>
        {/* SERVICE 1- UI/UX Design */}
        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>UI/UX Design</h3>
          </div>

          <ul className={styles.service__list}>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        {/* SERVICE 2- Web Development */}
        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>Web Development</h3>
          </div>

          <ul className={styles.service__list}>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        {/* SERVICE 3- Content Creation */}
        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>Content Creation</h3>
          </div>

          <ul className={styles.service__list}>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
