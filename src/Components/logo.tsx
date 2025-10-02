import { Fragment } from "react/jsx-runtime";
import styles from "./logo.module.css";

function Logo() {
  return (
    <Fragment>
      <div id="logo" className={styles.logo}>
        <div className={styles.logoText}>
          <h1>Logo</h1>
          <p>
            InPost Local Parcel Locker Competition Created for the InPost
            competition, this project explores the design of a local parcel
            locker based on the characteristics of the participant’s own
            neighborhood. The concept combines functionality with
            community-focused design, reflecting the unique identity and needs
            of the area.
          </p>
        </div>
        <div className={styles.logoImg}>
          <img src="./public/logo/logo_01.png" alt="logo img" />
        </div>
      </div>
    </Fragment>
  );
}
export default Logo;
