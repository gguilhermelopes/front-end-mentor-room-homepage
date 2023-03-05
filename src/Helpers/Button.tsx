import { FunctionComponent } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <button onClick={onClick} className={styles.button} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
