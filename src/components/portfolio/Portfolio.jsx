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
      "This application for food ordering is developed using React.js, providing users with a seamless experience to browse and order their preferred meals from the menu. Users can review and confirm their selected items in the shopping cart, input address details, and effortlessly place an order. The interactive user interface enhances the overall ordering process, ensuring a user-friendly and convenient experience.",
    github: "https://github.com/deepeshjaindj/food-order-app",
    live_demo: "https://deepeshjaindj-food-order-app.netlify.app/",
  },
  {
    id: "02",
    image: cbpi_ss,
    alt: "CBPI Website - Deepesh Jain DJ",
    title: "Book Publishing Website",
    description:
      "This website project, dedicated to a prominent book publishing firm, was meticulously developed to meet the client's unique requirements. A front-end exclusive, multi-page website, it boasts full responsiveness, adapting seamlessly to diverse devices, including mobile platforms, to deliver an exceptional user experience. The intuitive design prioritize aesthetic appeal and user engagement.",
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
      "This portfolio website, constructed using React.js, represents a dynamic web project that incorporates the React Router library, spanning across three distinct pages. While the initial build currently lacks responsiveness, it distinguishes itself with captivating animations and a highly interactive user interface. Furthermore, the project integrates various CSS libraries to enhance its visual appeal and functionality.",
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
