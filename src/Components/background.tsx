import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
import styles from "./background.module.css";
function Background() {
  const images = [
    "./public/background/background01.jpg",
    "./public/background/background03.jpg",
    "./public/background/background02.png",
  ];
  const [currentImg, setCurrentImg] = useState(0);
  const visibleBakc = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentImg + i) % images.length;
      visible.push(images[index]);
    }
    return visible;
  };
  function plusImage() {
    setCurrentImg((currentImg + 1) % images.length);
  }
  function minusImage() {
    setCurrentImg((currentImg - 1 + images.length) % images.length);
  }
  const visibleBackground = visibleBakc();
  return (
    <Fragment>
      <div id="background" className={styles.background}>
        <div className={styles.backgroundText}>
          <h1>Background</h1>

          <p>
            I designed background art for IEN, an animation studio from Ukraine
            that produces feature-length folklore-inspired films for both
            children and adults. Each background was created by me under the
            guidance of the studio’s specialists, ensuring visual consistency
            with the film’s artistic direction while allowing space for my
            individual creative input. The work highlights attention to detail,
            atmosphere, and storytelling through environment design.
          </p>
        </div>
        <div className={styles.backgroundContainerSlider}>
          <button className={styles.buttonPlus} onClick={plusImage}>
            <img src="./public/arrow.png" alt="plusImg" />
          </button>
          <div className={styles.backgroundSlider}>
            {visibleBackground.map((image, index) => (
              <div key={index}>
                <img src={image} alt="" />
              </div>
            ))}
          </div>
          <button className={styles.buttonMinus} onClick={minusImage}>
            <img src="./public/arrow.png" alt="plusImg" />
          </button>
        </div>
      </div>
    </Fragment>
  );
}
export default Background;
