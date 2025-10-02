import { Fragment } from "react/jsx-runtime";
import styles from "./magazine.module.css";
import HTMLFlipBook from "react-pageflip";
function Magazine() {
  const images = [
    "/magazine/magazine_03.png",
    "/magazine/magazine_04.png",
    "/magazine/magazine_05.png",
    "/magazine/magazine_06.png",
    "/magazine/magazine_07.png",
    "/magazine/magazine_08.png",
    "/magazine/magazine_09.png",
    "/magazine/magazine_10.png",
    "/magazine/magazine_11.png",
    "/magazine/magazine_12.png",
    "/magazine/magazine_13.png",
    "/magazine/magazine_14.png",
    "/magazine/magazine_15.png",
    "/magazine/magazine_16.png",
    "/magazine/magazine_17.png",
    "/magazine/magazine_18.png",
    "/magazine/magazine_19.png",
    "/magazine/magazine_20.png",
    "/magazine/magazine_21.png",
    "/magazine/magazine_22.png",
    "/magazine/magazine_23.png",
  ];
  return (
    <Fragment>
      <div id="magazine" className={styles.magazineContainer}>
        <HTMLFlipBook
          width={370}
          height={500}
          size="fixed"
          minWidth={370}
          maxWidth={370}
          minHeight={500}
          maxHeight={500}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={() => {}}
          onChangeOrientation={() => {}}
          onChangeState={() => {}}
          className="demo-book"
          style={{}}
          startPage={0}
          drawShadow={true}
          flippingTime={1000}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
          disableFlipByClick={false}
        >
          <div className="page">
            <div className="page-content cover">
              <img
                className={styles.pageSize}
                src="./magazine/magazine_02.png"
                alt="bookPage"
              />
            </div>
          </div>
          {images.map((image, index) => (
            <div className="page" key={index}>
              <div className="page-content ">
                <img className={styles.pageSize} src={image} alt="bookPage" />
              </div>
            </div>
          ))}
        </HTMLFlipBook>

        <div className={styles.magazineText}>
          <h1>Magazine</h1>
          <p>
            As part of a university assignment, I created a magazine dedicated
            to various art movements, including Impressionism, Abstractionism,
            and the Renaissance. The project involved not only the layout and
            visual design of the pages but also working with text, curating
            content, and developing advertising spreads. The magazine balances
            academic insight with a strong visual identity, showcasing both
            editorial design skills and an understanding of historical art
            contexts.
          </p>
        </div>
      </div>
    </Fragment>
  );
}
export default Magazine;
