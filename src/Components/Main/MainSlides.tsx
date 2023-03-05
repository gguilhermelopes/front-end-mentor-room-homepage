import React from "react";
import Button from "../../Helpers/Button";
import left from "../../Helpers/images/icon-angle-left.svg";
import right from "../../Helpers/images/icon-angle-right.svg";
import image1 from "../../Helpers/images/desktop-image-hero-1.jpg";
import styles from "./MainSlides.module.css";

const MainSlides = () => {
  return (
    <div className={styles.mainSlides}>
      <img src={image1} alt="" />
      <div className={styles.slideInfo}>
        <h1>Discover innovative ways to decorate</h1>
        <p>
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <a href="/">Shop Now</a>
        <div className={styles.buttonWrapper}>
          <Button>
            <img src={left} alt="Before button" />
          </Button>
          <Button>
            <img src={right} alt="Next button" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainSlides;
