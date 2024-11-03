import styles from "./navBar.module.css";
import { MenuSVG } from "../../../public/IconsSVG";
import { useState } from "react";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

function NavBar({ children }: Props) {
  const [menuLarge, setMenuLarge] = useState<boolean>(false);
  const handleClick = () => {
    setMenuLarge(!menuLarge);
  };

  return (
    <nav
      className={`${menuLarge ? styles.containerLarge : ""} ${
        styles.container
      }`}
    >
      <button className={styles.menuSVG} onClick={handleClick}>
        <MenuSVG />
      </button>
      <section className={styles.links_container}>{children}</section>
    </nav>
  );
}
export default NavBar;
