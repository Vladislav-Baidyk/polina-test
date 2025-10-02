import { Fragment } from "react/jsx-runtime";
import styles from "./magazine.module.css";
import HTMLFlipBook from "react-pageflip";
function Magazine() {
  const images = [
    "/magazine/magazine03.png",
    "/magazine/magazine04.png",
    "/magazine/magazine05.png",
    "/magazine/magazine06.png",
    "/magazine/magazine07.png",
    "/magazine/magazine08.png",
    "/magazine/magazine09.png",
    "/magazine/magazine10.png",
    "/magazine/magazine11.png",
    "/magazine/magazine12.png",
    "/magazine/magazine13.png",
    "/magazine/magazine14.png",
    "/magazine/magazine15.png",
    "/magazine/magazine16.png",
    "/magazine/magazine17.png",
    "/magazine/magazine18.png",
    "/magazine/magazine19.png",
    "/magazine/magazine20.png",
    "/magazine/magazine21.png",
    "/magazine/magazine22.png",
    "/magazine/magazine23.png",
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
                src="/magazine/magazine02.png"
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
