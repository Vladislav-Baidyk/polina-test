import styles from "./buklet.module.css";
import { Fragment } from "react";
import HTMLFlipBook from "react-pageflip";
function Buklet() {
  const images = [
    "/buklet/buklet02.jpg",
    "/buklet/buklet01.jpg",
    "/buklet/buklet03.jpg",
    "/buklet/buklet04.jpg",
    "/buklet/buklet05.jpg",
    "/buklet/buklet06.jpg",
    "/buklet/buklet07.jpg",
  ];
  return (
    <Fragment>
      <div id="buklet" className={styles.book}>
        <div className={styles.bookText}>
          <h1>Dobrochyn Center Brochure</h1>
          <p>
            Commissioned by the Dobrochyn Center, a community-based NGO in
            Chernihiv, Ukraine, this brochure was designed to effectively
            communicate the organization's mission, activities, and impact to
            the local community and stakeholders.
          </p>
        </div>{" "}
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
                src="/buklet/buklet08.jpg"
                alt="cover"
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
        <div className={styles.justPadding}></div>
      </div>
    </Fragment>
  );
}

export default Buklet;
