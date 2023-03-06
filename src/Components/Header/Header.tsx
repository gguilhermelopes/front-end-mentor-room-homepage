import { useState } from "react";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../Helpers/images/logo.svg";
import { ReactComponent as Hamburger } from "../../Helpers/images/icon-hamburger.svg";
import useMobile from "../../Hooks/useMobile";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const mobile = useMobile("(max-width:1100px)");
  const [menuActive, setMenuActive] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      {mobile && !menuActive && (
        <Hamburger
          className={styles.hamburgerMenu}
          onClick={() => setMenuActive(!menuActive)}
        />
      )}
      {menuActive && (
        <MobileMenu menuActive={menuActive} setMenuActive={setMenuActive} />
      )}
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
