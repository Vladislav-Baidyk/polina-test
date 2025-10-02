import styles from "./plakat.module.css";
import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
import imagesData from "./plakat.json";
function Plakat() {
  const images = [
    "public/plakat/plakat_01.jpg",
    "public/plakat/plakat_02.jpg",
    "public/plakat/plakat_03.jpg",
    "public/plakat/plakat_04.jpg",
  ];
  const [activeImageId, setActiveImageId] = useState<number | null>(null);
  const [currentImg, setCurrentImg] = useState(0);
  const visibleImages = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentImg + i) % imagesData.length;
      visible.push(imagesData[index]);
    }
    return visible;
  };

  function plusImage() {
    setCurrentImg((currentImg + 1) % images.length);
    setActiveImageId(null);
  }
  function minusImage() {
    setCurrentImg((currentImg - 1 + images.length) % images.length);
    setActiveImageId(null);
  }
  const visibleImg = visibleImages();

  const handleImageClick = (id: number) => {
    setActiveImageId(activeImageId === id ? null : id);
  };
  return (
    <Fragment>
      <div id="plakat" className={styles.plakat}>
        <div className={styles.plakatText}>
          <h1>Plakaty</h1>
        </div>
        <div className={styles.plakatContainerSlider}>
          <button className={styles.buttonMinus} onClick={minusImage}>
            <img src="./public/arrow.png" alt="arrow img" />
          </button>

          {visibleImg.map((item, id) => (
            <div className={styles.slider} key={item.id}>
              {activeImageId !== item.id ? (
                <img
                  className={`${styles.carouselItem} ${
                    id === 1 ? styles.centerItem : ""
                  }`}
                  src={item.image}
                  alt="plakat img"
                  onClick={() => handleImageClick(item.id)}
                />
              ) : (
                <div
                  onClick={() => handleImageClick(item.id)}
                  className={`${styles.carouselItem} ${
                    id === 1 ? styles.textImageItem : styles.textImage
                  }`}
                >
                  <p>{item.text}</p>
                </div>
              )}
            </div>
          ))}
          <button className={styles.buttonPlus} onClick={plusImage}>
            <img src="./public/arrow.png" alt="arrow img" />
          </button>
        </div>
      </div>
    </Fragment>
  );
}
export default Plakat;
