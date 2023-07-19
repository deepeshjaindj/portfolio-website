import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vepoyen",
        "template_1mb4d7j",
        form.current,
        "L15Mkm-f18tczx618"
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className={`container ${styles.contact__container}`}>
        <div className={styles.contact__options}>
          <article className={styles.contact__option}>
            <MdOutlineEmail className={styles["contact__option-icon"]} />
            <h4>Email</h4>
            <h5>deepeshjainofficial@gmail.com</h5>
            <a
              href="mailto:jaind1616@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className={styles.contact__option}>
            <BsLinkedin className={styles["contact__option-icon"]} />
            <h4>LinkedIn</h4>
            <h5>deepeshjain-dj</h5>
            <a
              href="https://linkedin.com/in/deepeshjain-dj"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className={styles.contact__option}>
            <BsWhatsapp className={styles["contact__option-icon"]} />
            <h4>WhatsApp</h4>
            <h5>+91 8120183005</h5>
            <a
              href="https://wa.me/918120183005"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="12"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
