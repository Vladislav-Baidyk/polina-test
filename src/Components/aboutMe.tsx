import styles from "./aboutMe.module.css";
import { Fragment } from "react/jsx-runtime";
function AboutMe() {
  return (
    <Fragment>
      <div id="aboutMe" className={styles.containerAboutMe}>
        <img src="/aboutMe/polina01.jpg" alt="about me" />
      </div>
    </Fragment>
  );
}
export default AboutMe;
