import styles from "./inpost.module.css";
import { Fragment } from "react/jsx-runtime";
function Inpost() {
  return (
    <Fragment>
      <div id="inpost" className={styles.inpost}>
        <div className={styles.inpostText}>
          <h1>Inpost</h1>
          <p>
            InPost Local Parcel Locker Competition Created for the InPost
            competition, this project explores the design of a local parcel
            locker based on the characteristics of the participant’s own
            neighborhood. The concept combines functionality with
            community-focused design, reflecting the unique identity and needs
            of the area.
          </p>
        </div>
        <div className={styles.containerImg}>
          <img src="/inpost/inpost01.png" alt="img 1" />
          <img src="/inpost/inpost02.png" alt="img 1" />
        </div>
      </div>
    </Fragment>
  );
}
export default Inpost;
