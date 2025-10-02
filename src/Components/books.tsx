import styles from "./book.module.css";
import { Fragment } from "react";
import HTMLFlipBook from "react-pageflip";
function Book() {
  const images = [
    "/book/1.jpg",
    "/book/4.jpg",
    "/book/5.jpg",
    "/book/6.jpg",
    "/book/7.jpg",
    "/book/8.jpg",
  ];
  return (
    <Fragment>
      <div id="book" className={styles.book}>
        <div className={styles.bookText}>
          <h1>Foxes and boots</h1>
          <p>
            Foxes and Boots is a children’s book entirely written in verse and
            fully illustrated by me. The story follows foxes in a village
            setting, offering a charming and educational narrative about
            kindness, collaboration, and mutual support. Through playful rhymes
            and detailed illustrations, the book engages young readers while
            conveying an important moral lesson in an accessible and imaginative
            way.
          </p>
          <img src="/book/foxes.png" alt="foxes" />
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
              <img className={styles.pageSize} src="/book/9.jpg" alt="cover" />
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

export default Book;
