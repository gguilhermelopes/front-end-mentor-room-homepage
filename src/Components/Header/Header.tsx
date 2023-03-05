import React from "react";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../Helpers/images/logo.svg";
import useMobile from "../../Hooks/useMobile";

const Header = () => {
  const mobile = useMobile("(max-width:1100px)");

  return (
    <header className={styles.header}>
      <Logo />
      {!mobile && (
        <nav>
          <ul className={styles.ul}>
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="/">shop</a>
            </li>
            <li>
              <a href="/">about</a>
            </li>
            <li>
              <a href="/">contact</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
