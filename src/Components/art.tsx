import { Fragment } from "react/jsx-runtime";
import styles from "./art.module.css";
function Art() {
  return (
    <Fragment>
      <div id="art" className={styles.artContainer}>
        <div className={styles.artText}>
          <h1>Art 2025</h1>
        </div>

        <div className={styles.containerPictures}>
          <div className={styles.picture} style={{ flexGrow: 1 }}>
            <img src="/art/art_04.jpg" alt="art_04" />
            <p>"MAN" B1 PENCIL</p>
          </div>
          <div className={styles.picture} style={{ flexGrow: 1 }}>
            <img src="/art/art_05.jpg" alt="art_04" />
            <p>"GUITAR" B1 PENCIL</p>
          </div>
          <div className={styles.picture} style={{ flexGrow: 1 }}>
            <img src="/art/art_03.jpg" alt="art_04" />
            <p>"STILL LIFE" B2 ACRYLIC</p>
          </div>
          <div className={styles.picture} style={{ flexGrow: 1 }}>
            <img src="/art/art_01.jpg" alt="art_04" />
            <p>"GIRL" B1 PENCIL"</p>
          </div>
          <div className={styles.picture} style={{ flexGrow: 1 }}>
            <img src="/art/art_06.jpg" alt="art_04" />
            <p>"MY CULTURE" B1 ACRYLIC </p>
          </div>
          <div className={styles.picture} style={{ flexGrow: 1 }}>
            <img src="/art/art_07.jpg" alt="art_04" />
            <p>"MY FIRST MEMORY" B1 ACRYLIC"</p>
          </div>
          <div className={styles.picture} style={{ flexGrow: 1 }}>
            <img src="/art/art_02.jpg" alt="art_04" />
            <p>"WITCH" B1 ACRYLIC"</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Art;
