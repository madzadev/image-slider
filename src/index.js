import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

import backButton from "./icons/back.svg";
import nextButton from "./icons/next.svg";

const Slider = ({
  imageList,
  width,
  height,
  loop = true,
  autoPlay = true,
  autoPlayInterval = 3000,
  showArrowControls = true,
  showDotControls = true,
  bgColor = "none",
}) => {
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
  };

  const rightClickHandle = () => {
    setNextImage();
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
      <div className={styles.wrapper} style={{ backgroundColor: bgColor }}>
        {((showArrowControls && !loop && active !== 0) ||
          (showArrowControls && loop)) && (
          <div className={styles.leftClick} onClick={leftClickHandle}>
            <img className={styles.button} src={backButton} alt="back" />
          </div>
        )}
        <img
          src={imageList[active].url}
          style={{
            width: width,
            height: height,
            objectFit: "cover",
          }}
          alt="image"
        />
        {((showArrowControls && !loop && active !== imageList.length - 1) ||
          (showArrowControls && loop)) && (
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
              return <div key={index} className={styles.activeDot}></div>;
            }
          })}
        </div>
      )}
    </div>
  );
};

export default Slider;
