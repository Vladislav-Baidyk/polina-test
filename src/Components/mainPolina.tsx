import { Fragment } from "react/jsx-runtime";
import styles from "./mainPolina.module.css";

function Main() {
  return (
    <Fragment>
      <div id="main" className={styles.portfolioContainer}>
        <img
          className={styles.imagePort}
          src="./public/PORTFOLIO 1.jpg"
          alt="portfolio image"
        />
        <h1 className={styles.name}>Polina Tkachuk</h1>
      </div>
    </Fragment>
  );
}

export default Main;
