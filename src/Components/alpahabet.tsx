import { Fragment } from "react/jsx-runtime";
import styles from "./alpahabet.module.css";
import { useState } from "react";
function Alphabet() {
  const images = [
    "/letters/Letter1.png",
    "/letters/letter2.png",
    "/letters/letter3.png",
    "/letters/letter4.png",
    "/letters/letter5.png",
    "/letters/letter6.png",
    "/letters/letter7.png",
    "/letters/letter8.png",
    "/letters/letter9.png",
    "/letters/letter10.png",
    "/letters/letter11.png",
    "/letters/letter12.png",
    "/letters/letter15.png",
    "/letters/letter16.png",
    "/letters/letter17.png",
    "/letters/letter18.png",
    "/letters/letter20.png",
    "/letters/letter21.png",
    "/letters/letter22.png",
  ];
  const [currentIndex, SetCurrentImage] = useState(0);
  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % images.length;
      visible.push(images[index]);
    }
    return visible;
  };
  function ChangeMinus() {
    SetCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  }
  function ChangePlus() {
    SetCurrentImage((prev) => (prev + 1) % images.length);
  }
  const visibleImages = getVisibleImages();
  return (
    <Fragment>
      <div id="alphabet" className={styles.alpahabetContainer}>
        <div className={styles.alpahabetContainerContent}>
          <div className={styles.alpahabetText}>
            <h1>Alphabet</h1>
            <p>
              This project was commissioned by the POLIN Museum. I created a
              custom alphabet in which each letter was individually designed,
              combining the aesthetics of medieval ornamentation with my
              signature artistic style. Every character is unique, featuring
              intricate, hand-crafted details that emphasize the individuality
              of the letterform while preserving visual harmony across the
              entire set. The commissioned work embodies a dialogue between
              historical inspiration and contemporary personal expression,
              resulting in a distinctive and cohesive design.
            </p>
          </div>
          <div className={styles.carouselLettes}>
            <button className={styles.button} onClick={ChangeMinus}>
              <img src="/arrow.png" />
            </button>
            {visibleImages.map((image, index) => (
              <div
                className={`${styles.carouselItem} ${
                  index === 2 ? styles.centerItem : ""
                }`}
                key={index}
              >
                <img src={image} alt="" />
              </div>
            ))}{" "}
            <button className={styles.buttonPlus} onClick={ChangePlus}>
              <img src="/arrow.png" />
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Alphabet;
