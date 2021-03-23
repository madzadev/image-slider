import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const backButton = require("../public/back.svg");
const nextButton = require("../public/next.svg");

export const Slider = ({
  imageList,
  width,
  height,
  loop = true,
  autoPlay = true,
  autoPlayInterval = 3000,
  showArrowControls = true,
  showDotControls = true,
}) => {
  // const [array, setArray] = useState([1, 2, 3])
  let [active, setActive] = useState(0);

  const setPreviousImage = () => {
    if (active !== 0) {
      setActive((active -= 1));
    } else {
      if (loop) {
        setActive((active = imageList.length - 1));
      }
    }
  };

  const setNextImage = () => {
    if (active !== imageList.length - 1) {
      setActive((active += 1));
    } else {
      if (loop) {
        setActive((active = 0));
      }
    }
  };

  const leftClickHandle = () => {
    setPreviousImage();

    // const [first, second, ...rest] = array
    // setArray([...rest, first, second])
  };

  const rightClickHandle = () => {
    setNextImage();

    // const [first, ...rest] = array
    // setArray([...rest, first])
  };

  const dotClickHandler = (e) => {
    const dotNum = e.target.getAttribute("data-key");
    setActive((active = parseInt(dotNum)));
  };

  useEffect(() => {
    if (autoPlay) {
      let autoSlider = setInterval(setNextImage, autoPlayInterval);
      return () => clearInterval(autoSlider);
    }
  }, [active]);

  return (
    <div>
      <div className={styles.wrapper}>
        {((showArrowControls && !loop && active !== 0) || loop) && (
          <div className={styles.leftClick} onClick={leftClickHandle}>
            <img className={styles.button} src={backButton} alt="back" />
          </div>
        )}
        <img
          src={imageList[active].url}
          style={{ width: width, height: height, objectFit: "cover" }}
          alt="image"
        />
        {((showArrowControls && !loop && active !== imageList.length - 1) ||
          loop) && (
          <div className={styles.rightClick} onClick={rightClickHandle}>
            <img className={styles.button} src={nextButton} alt="next" />
          </div>
        )}
      </div>
      {showDotControls && (
        <div className={styles.dots}>
          {imageList.map((el, index) => {
            if (index !== active) {
              return (
                <div
                  key={index}
                  className={styles.dot}
                  data-key={index}
                  onClick={dotClickHandler}
                />
              );
            } else {
              return <div className={styles.activeDot}></div>;
            }
          })}
        </div>
      )}
    </div>
  );
};
