import React from "react";

import { FaAward } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import {
  SiCodingninjas,
  SiLeetcode,
  SiHackerrank,
  SiGeeksforgeeks,
} from "react-icons/si";
import Deepesh_Image from "../../assets/Deepesh Jain DJ- Highway.jpg";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className={`container ${styles.about__container}`}>
        <div className={styles.about__me}>
          <div className={styles["about__me-image"]}>
            <img src={Deepesh_Image} alt="Deepesh Jain DJ" />
          </div>
        </div>

        <div className={styles.about__content}>
          <div className={styles.about__cards}>
            <article className={styles.about__card}>
              <FaAward className={styles.about__icon} />
              <h5>Experience</h5>
              <small>1.5+ Years</small>
            </article>
            <article className={styles.about__card}>
              <FiPenTool className={styles.about__icon} />
              <h5>Hobby</h5>
              <small>Graphics Design (CorelDRAW)</small>
            </article>
            <article className={styles.about__card}>
              <VscFolderLibrary className={styles.about__icon} />
              <h5>Projects</h5>
              <small>3+ Client Projects</small>
            </article>
          </div>

          <p>
            As a results-driven Software Engineer, I bring over 1.5 years of
            expertise in frontend development, with a focus on React.js,
            JavaScript, HTML, and CSS. Throughout my career, I've fostered
            successful collaborations with clients, consistently delivering
            solutions that surpass their expectations. Proficient in Agile
            methodology, Git, and JIRA, I thrive in dynamic, large team
            environments, contributing to the seamless execution of projects.
          </p>
          <p>
            Rooted in a Bachelor's degree in Technology, my trajectory involves
            venturing into backend development, underscoring my commitment to
            staying at the forefront of technology trends and delivering
            top-notch software solutions.
          </p>
          <p>
            Besides web development, I also have an interest in Problem Solving.
            Please do visit my coding profiles:
          </p>
          <div className={styles.coding_profiles}>
            <div className={styles.coding_profile}>
              <SiCodingninjas className={styles.profile_icon} />
              <a
                href="https://www.codingninjas.com/codestudio/profile/d7520cb9-34da-4d29-8890-c3f880b0318d"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Code Studio Profile
              </a>
            </div>
            <div className={styles.coding_profile}>
              <SiHackerrank className={styles.profile_icon} />
              <a
                href="https://www.hackerrank.com/deepeshjaindj"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Hackerrank Profile
              </a>
            </div>
            <div className={styles.coding_profile}>
              <SiLeetcode className={styles.profile_icon} />
              <a
                href="https://www.leetcode.com/deepeshjaindj"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Leet Code Profile
              </a>
            </div>
            <div className={styles.coding_profile}>
              <SiGeeksforgeeks className={styles.profile_icon} />
              <a
                href="https://auth.geeksforgeeks.org/user/deepeshjaindj07/practice"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit GFG Profile
              </a>
            </div>
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
