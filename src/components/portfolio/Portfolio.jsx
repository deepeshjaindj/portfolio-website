import React from "react";

import food_order_ss from "../../assets/food-order-ss.png";
import cbpi_ss from "../../assets/cbpi-ss.png";
import portfolio_ss from "../../assets/portfolio-ss.png";
import dribbble from "../../assets/dribbble logo.png";
import styles from "./Portfolio.module.css";

const PROJECTS = [
  {
    id: "01",
    image: food_order_ss,
    alt: "Food Order App - Deepesh Jain DJ",
    title: "Food Order App",
    description:
      "This food ordering app is built on reactjs. It allows users to select and order their favorite meals from the menu, verify the shopping cart, provide their address information, and place an order. Its interactive UI makes ordering easy and convenient.",
    github: "https://github.com/deepeshjaindj/food-order-app",
    live_demo: "https://deepeshjaindj-food-order-app.netlify.app/",
  },
  {
    id: "02",
    image: cbpi_ss,
    alt: "CBPI Website - Deepesh Jain DJ",
    title: "Book Publishing Website",
    description:
      "It is a website project developed for a book publishing firm. The project was developed while keeping in mind the requirements of the client. It is a Front-end only Multi-page Website. Also, this website is Fully Responsive for mobile and other devices.",
    github:
      "https://github.com/deepeshjaindj/conceptsbookspublication.github.io",
    live_demo:
      "https://deepeshjaindj.github.io/conceptsbookspublication.github.io/",
  },
  {
    id: "03",
    image: portfolio_ss,
    alt: "Portfolio Website Project - Deepesh Jain DJ",
    title: "Portfolio Website Project",
    description:
      "This website is a reactjs-based portfolio website project. It uses react-router and is a 3-page website. This web project is currently Non-responsive in its initial build. It has beautiful animations and a very interactive UI. It also uses multiple CSS libraries.",
    github: "https://github.com/deepeshjaindj/portfolio-website-project",
    live_demo: "https://deepeshjaindj-portfolio-project.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className={`container ${styles.portfolio__container}`}>
        {PROJECTS.map((project) => {
          return (
            <article key={project.id} className={styles.portfolio__item}>
              <div className={styles["portfolio__item-image"]}>
                <img
                  src={project.image}
                  alt={project.alt}
                  className={styles.img}
                />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles["portfolio__item-cta"]}>
                <a
                  href={project.github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={project.live_demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
        <article className={styles.portfolio__item}>
          <div className={styles["portfolio__item-image"]}>
            <img
              src={dribbble}
              alt="Dribbble Profile- Deepesh Jain DJ"
              className={styles.img}
            />
          </div>
          <h3>Dribbble Profile</h3>
          <p>
            This profile is constantly updating. I have many other designs which
            are not posted yet. I'll be posting them soon. Stay tuned 😊
          </p>
          <div className={styles["portfolio__item-cta"]}>
            <a
              href="https://dribbble.com/deepeshjaindj"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Profile
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
