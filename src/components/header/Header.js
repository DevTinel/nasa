import React, { useState } from "react";
import Logo from "../../assets/shared/logo.svg";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import "../../App.css";

export const Header = () => {
  const [selected, setSelected] = useState(1);
  const handleClickHeader = (id) => {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };
  return (
    <header>
      <nav className={styles.nav}>
        <img src={Logo} alt="Logo" />
        <div className={styles.navLinks}>
          <Link
            to="/"
            onClick={() => handleClickHeader(1)}
            className={`${styles.navLinksItem} ${
              selected === 1 ? styles.selected : ""
            }`}
          >
            <span>00</span>
            <p>HOME</p>
          </Link>
          <Link
            to="/destination"
            onClick={() => handleClickHeader(2)}
            className={`${styles.navLinksItem} ${
              selected === 2 ? styles.selected : ""
            }`}
          >
            <span>01</span>
            <p>DESTINATION</p>
          </Link>
          <Link
            to="/crew"
            onClick={() => handleClickHeader(3)}
            className={`${styles.navLinksItem} ${
              selected === 3 ? styles.selected : ""
            }`}
          >
            <span>02</span>
            <p>CREW</p>
          </Link>
          <Link
            to="/technology"
            onClick={() => handleClickHeader(4)}
            className={`${styles.navLinksItem} ${
              selected === 4 ? styles.selected : ""
            }`}
          >
            <span>03</span>
            <p>TECHNOLOGY</p>
          </Link>
        </div>
      </nav>
    </header>
  );
};
