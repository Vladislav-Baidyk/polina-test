import { Fragment } from "react/jsx-runtime";
import styles from "./contact.module.css";

function Contact() {
  return (
    <Fragment>
      <div id="contact" className={styles.portfolioContainer}>
        <img
          className={styles.imagePort}
          src="/contact/contact.jpg"
          alt="portfolio image"
        />
      </div>
    </Fragment>
  );
}

export default Contact;
