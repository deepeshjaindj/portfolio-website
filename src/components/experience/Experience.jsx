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
                <h4>React.js</h4>
                <small className="text-light">Experienced</small>
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
                <h4>HTML / CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__icon} />
              <div>
                <h4>Bootstrap / Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__icon} />
              <div>
                <h4>Styled Components</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__icon} />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__icon} />
              <div>
                <h4>React Query</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* BACKEND + Additional Skills */}

        <div className={styles.experience__backend}>
          <h3>Backend Development</h3>
          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__icon} />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Learning</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__icon} />
              <div>
                <h4>Express.js</h4>
                <small className="text-light">Learning</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__icon} />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
          <h3>Additional Skills</h3>
          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__icon} />
              <div>
                <h4>Agile Development (JIRA)</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__icon} />
              <div>
                <h4>Git</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__icon} />
              <div>
                <h4>Responsive Design</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
