import { Fragment } from "react/jsx-runtime";
import styles from "./content.module.css";
function Content() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <Fragment>
      <div id="content" className={styles.contentContainer}>
        <ul>
          <h1>Content </h1>
          <li onClick={() => scrollToSection("main")}>
            Main <span>P.1</span>{" "}
          </li>
          <li onClick={() => scrollToSection("content")}>
            Content<span>P.2</span>
          </li>
          <li onClick={() => scrollToSection("aboutMe")}>
            About Me<span>P.3</span>
          </li>
          <li onClick={() => scrollToSection("alphabet")}>
            Alphabet<span>P.4</span>
          </li>
          <li onClick={() => scrollToSection("books")}>
            Fox and Books<span>P.5</span>
          </li>
          <li onClick={() => scrollToSection("magazine")}>
            Magazine<span>P.6</span>
          </li>
          <li onClick={() => scrollToSection("bakcground")}>
            Background<span>P.7</span>
          </li>
          <li onClick={() => scrollToSection("plakat")}>
            Plakaty<span>P.8</span>
          </li>
          <li onClick={() => scrollToSection("logo")}>
            Logo<span>P.9</span>
          </li>
          <li onClick={() => scrollToSection("inpost")}>
            Inpost<span>P.10</span>
          </li>
          <li onClick={() => scrollToSection("art")}>
            Art 2025<span>P.11</span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
export default Content;
