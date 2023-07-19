import React from "react";
import styles from "./Testimonials.module.css";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const REVIEWS = [
  {
    id: 1,
    name: "Ernest Achiever",
    image: "https://source.unsplash.com/random/?person",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus explicabo esse voluptatibus eaque a, fugit quasi! Voluptates, quae! Libero eum praesentium fugiat, enim possimus fuga eveniet at adipisci impedit! Voluptatibus.",
  },
  {
    id: 2,
    name: "Ernest Achiever",
    image: "https://source.unsplash.com/random/?person",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus explicabo esse voluptatibus eaque a, fugit quasi! Voluptates, quae! Libero eum praesentium fugiat, enim possimus fuga eveniet at adipisci impedit! Voluptatibus.",
  },
  {
    id: 3,
    name: "Ernest Achiever",
    image: "https://source.unsplash.com/random/?person",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus explicabo esse voluptatibus eaque a, fugit quasi! Voluptates, quae! Libero eum praesentium fugiat, enim possimus fuga eveniet at adipisci impedit! Voluptatibus.",
  },
  {
    id: 4,
    name: "Ernest Achiever",
    image: "https://source.unsplash.com/random/?person",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus explicabo esse voluptatibus eaque a, fugit quasi! Voluptates, quae! Libero eum praesentium fugiat, enim possimus fuga eveniet at adipisci impedit! Voluptatibus.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className={`container ${styles.testimonials__container}`}
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {REVIEWS.map((review) => {
          return (
            <SwiperSlide key={review.id} className={styles.testimonial}>
              <div className={styles.client__avatar}>
                <img src={review.image} alt={review.name} />
              </div>
              <h5 className={styles.client__name}>{review.name}</h5>
              <small className={styles.client__review}>{review.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
