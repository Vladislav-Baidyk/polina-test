import { Fragment } from "react/jsx-runtime";
import styles from "./alpahabet.module.css";
import { useState } from "react";
function Alphabet() {
  const images = [
    "./public/letters/Letter1.png",
    "./public/letters/Letter2.png",
    "./public/letters/Letter3.png",
    "./public/letters/Letter4.png",
    "./public/letters/Letter5.png",
    "./public/letters/Letter6.png",
    "./public/letters/Letter7.png",
    "./public/letters/Letter8.png",
    "./public/letters/Letter9.png",
    "./public/letters/Letter10.png",
    "./public/letters/Letter11.png",
    "./public/letters/Letter12.png",
    "./public/letters/Letter15.png",
    "./public/letters/Letter16.png",
    "./public/letters/Letter17.png",
    "./public/letters/Letter18.png",
    "./public/letters/Letter20.png",
    "./public/letters/Letter21.png",
    "./public/letters/Letter22.png",
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
