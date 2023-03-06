import { FunctionComponent } from "react";
import styles from "./MobileMenu.module.css";
import { ReactComponent as Close } from "../../Helpers/images/icon-close.svg";

interface menuProps {
  menuActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: FunctionComponent<menuProps> = ({
  menuActive,
  setMenuActive,
}) => {
  return (
    <div className={styles.mobileMenuWrapper}>
      <nav className={styles.mobileMenu}>
        <Close
          className={styles.closeButton}
          onClick={() => setMenuActive(!menuActive)}
        />
        <ul>
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
    </div>
  );
};

export default MobileMenu;
