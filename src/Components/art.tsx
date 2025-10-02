import { Fragment } from "react/jsx-runtime";
import styles from "./art.module.css";
function Art() {
  return (
    <Fragment>
      <div id="art" className={styles.artContainer}>
        <div className={styles.artText}>
          <h1>Art 2025</h1>
          <p>text</p>
        </div>

        <div className={styles.containerPictures}>
          <img
            style={{ flexGrow: 1 }}
            src="./public/art/art_04.jpg"
            alt="art_04"
          />
          <img
            style={{ flexGrow: 1 }}
            src="./public/art/art_05.jpg"
            alt="art_05"
          />
          <img
            style={{ flexGrow: 1 }}
            src="./public/art/art_03.jpg"
            alt="art_03"
          />
          <img
            style={{ flexGrow: 1 }}
            src="./public/art/art_01.jpg"
            alt="art_01"
          />
          <img
            style={{ flexGrow: 1 }}
            src="./public/art/art_06.jpg"
            alt="art_06"
          />
          <img
            style={{ flexGrow: 1 }}
            src="./public/art/art_07.jpg"
            alt="art_07"
          />
          <img
            style={{ flexGrow: 1 }}
            src="./public/art/art_02.jpg"
            alt="art_02"
          />
        </div>
      </div>
    </Fragment>
  );
}
export default Art;
