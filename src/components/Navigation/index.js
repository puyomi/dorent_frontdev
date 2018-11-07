import React from "react";
import { Link } from "react-router-dom";
import Ionicon from "react-ionicons";
import styles from "./styles.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.inner}>
        <Link to="/">
          <span>로고 |</span>
        </Link>
        <Link to="/products">
          <span>상품화면 |</span>
        </Link>
        <Link to="/upload">
          <span>
            <Ionicon icon="md-camera" fontSize="18px" />
            물건 등록하기 |
          </span>
        </Link>
        <Link to="/auth">
          <span>
            <Ionicon icon="md-person" fontSize="18px" />
            로그인
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
