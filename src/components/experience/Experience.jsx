import React from "react";

import { BsPatchCheckFill } from "react-icons/bs";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <h5>I worked on</h5>
      <h2>My Skills</h2>

      <div className={`container ${styles.experience__container}`}>
        <div className={styles.experience__frontend}>
          <h3>Frontend Development</h3>
          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__icon} />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__icon} />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__icon} />
              <div>
                <h4>SASS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__icon} />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__icon} />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__icon} />
              <div>
                <h4>jQuery</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__icon} />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* BACKEND */}

        <div className={styles.experience__backend}>
          <h3>Backend Development</h3>
          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__icon} />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__icon} />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__icon} />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Learning</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__icon} />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Learning</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
