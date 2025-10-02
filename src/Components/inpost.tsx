import styles from "./inpost.module.css";
import { Fragment } from "react/jsx-runtime";
function Inpost() {
  return (
    <Fragment>
      <div id="inpost" className={styles.inpost}>
        <div className={styles.inpostText}>
          <h1>Inpost</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className={styles.containerImg}>
          <img src="./public/inpost/inpost_01.png" alt="img 1" />
          <img src="./public/inpost/inpost_02.png" alt="img 1" />
        </div>
      </div>
    </Fragment>
  );
}
export default Inpost;
