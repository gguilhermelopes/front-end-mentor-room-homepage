import { useState } from "react";
import Button from "../../Helpers/Button";
import left from "../../Helpers/images/icon-angle-left.svg";
import right from "../../Helpers/images/icon-angle-right.svg";
import image1 from "../../Helpers/images/desktop-image-hero-1.jpg";
import imageMobile1 from "../../Helpers/images/mobile-image-hero-1.jpg";
import imageMobile2 from "../../Helpers/images/mobile-image-hero-2.jpg";
import imageMobile3 from "../../Helpers/images/mobile-image-hero-3.jpg";
import image2 from "../../Helpers/images/desktop-image-hero-2.jpg";
import image3 from "../../Helpers/images/desktop-image-hero-3.jpg";
import styles from "./MainSlides.module.css";
import useMobile from "../../Hooks/useMobile";

const slides = [
  {
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life.  collection and make your property a reflection of you and what you love.",
    image: image1,
    imageMobile: imageMobile1,
    alt: "Four white chairs made of wood and a table with a bonsai in a room",
  },
  {
    title: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    image: image2,
    imageMobile: imageMobile2,

    alt: "Three chairs on a simple room",
  },
  {
    title: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    image: image3,
    imageMobile: imageMobile3,
    alt: "Dark chair on a room with gray wall",
  },
];

const MainSlides = () => {
  const [slide, setSlide] = useState<number>(0);
  const mobile = useMobile("(max-width:1100px)");
  const mobileImage = useMobile("(max-width:900px)");

  function next() {
    if (slide < slides.length - 1) setSlide(slide + 1);
  }

  function before() {
    if (slide > 0) setSlide(slide - 1);
  }

  return (
    <div className={styles.mainSlides}>
      {mobile ? (
        <div className={styles.imageMobileWrapper}>
          <img
            src={mobileImage ? slides[slide].imageMobile : slides[slide].image}
            alt={slides[slide].alt}
          />
          <div className={styles.buttonWrapper}>
            <Button onClick={before} disabled={slide === 0}>
              <img src={left} alt="Before button" />
            </Button>
            <Button onClick={next} disabled={slide === slides.length - 1}>
              <img src={right} alt="Next button" />
            </Button>
          </div>
        </div>
      ) : (
        <img src={slides[slide].image} alt={slides[slide].alt} />
      )}
      <div className={styles.slideInfo}>
        <h1>{slides[slide].title}</h1>
        <p>{slides[slide].description}</p>
        <a href="/">Shop Now</a>
        {!mobile && (
          <div className={styles.buttonWrapper}>
            <Button onClick={before} disabled={slide === 0}>
              <img src={left} alt="Before button" />
            </Button>
            <Button onClick={next} disabled={slide === slides.length - 1}>
              <img src={right} alt="Next button" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainSlides;
