import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import shoppingCart from "../assets/img/shopping-cart.png";

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.header_left}>TanggalMuda.com</div>
      <div className={styles.header_right}>
        <div className={styles.header_right_1}>
          <img src={shoppingCart} alt="" width="50" />
        </div>
        <div className={styles.header_right_2}>
          <button className={styles.header_right_2_toggle_theme}>Toggle Theme</button>
        </div>
        {isLogin ? <div className={styles.header_notif}>Selamat datang, Gugun!</div> : ""}
        <div className={styles.header_right_3}>
          <button className={styles.header_right_3_login} onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
