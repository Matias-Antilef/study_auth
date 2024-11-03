import { ReactNode } from "react";
import styles from "./button.module.css";

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

function Button({ children, onClick }: Props) {
  return (
    <button className={styles.container} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
