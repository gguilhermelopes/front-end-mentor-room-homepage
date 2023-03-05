import React from "react";
import styles from "./MainAbout.module.css";
import imageDark from "../../Helpers/images/image-about-dark.jpg";
import imageLight from "../../Helpers/images/image-about-light.jpg";

const MainAbout = () => {
  return (
    <div className={styles.about}>
      <img src={imageDark} alt="" />
      <div className={styles.aboutInfo}>
        <h2>About our Furniture</h2>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <img src={imageLight} alt="" />
    </div>
  );
};

export default MainAbout;
