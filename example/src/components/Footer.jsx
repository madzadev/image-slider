import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.credits}>
        Placeholder images from{" "}
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://picsum.photos/"
        >
          Lorem picsum
        </a>
        . Icons from{" "}
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.flaticon.com/"
        >
          FlatIcon.
        </a>
      </p>
      <p>
        Have a suggestion?{" "}
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/madzadev/image-slider"
        >
          Contribute{" "}
        </a>
        to project!
      </p>
    </div>
  );
};

export default Footer;
