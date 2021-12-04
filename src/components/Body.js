import React from "react";
import styles from "../styles/Body.module.css";
import add from "../assets/img/addition.png";

export default function Body() {
  return (
    <div className={styles.body}>
      <div className={styles.body_content_column}>
        <div className={styles.body_content}>
          <div className={styles.body_content_img}>
            <nav className={styles.body_content_img_1}>Rp. 1000</nav>
            <div className={styles.body_content_img_desc}>
              <img src={add} alt="" width="50" />
            </div>
          </div>
          <div className={styles.body_content_desc}>
            <div className={styles.body_content_desc_name}>
              <a href="#">Pakaian Pria</a>
            </div>
          </div>
        </div>
        <div className={styles.body_content}>
          <div className={styles.body_content_img}>
            <nav className={styles.body_content_img_1}>Rp. 1000</nav>
            <div className={styles.body_content_img_desc}>
              <img src={add} alt="" width="50" />
            </div>
          </div>
          <div className={styles.body_content_desc}>
            <div className={styles.body_content_desc_name}>
              <a href="#">Pakaian Pria</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.body_content_column}>
        <div className={styles.body_content}>
          <div className={styles.body_content_img}>
            <nav className={styles.body_content_img_1}>Rp. 1000</nav>
            <div className={styles.body_content_img_desc}>
              <img src={add} alt="" width="50" />
            </div>
          </div>
          <div className={styles.body_content_desc}>
            <div className={styles.body_content_desc_name}>
              <a href="#">Pakaian Pria</a>
            </div>
          </div>
        </div>
        <div className={styles.body_content}>
          <div className={styles.body_content_img}>
            <nav className={styles.body_content_img_1}>Rp. 1000</nav>
            <div className={styles.body_content_img_desc}>
              <img src={add} alt="" width="50" />
            </div>
          </div>
          <div className={styles.body_content_desc}>
            <div className={styles.body_content_desc_name}>
              <a href="#">Pakaian Pria</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.body_content_column}>
        <div className={styles.body_content}>
          <div className={styles.body_content_img}>
            <nav className={styles.body_content_img_1}>Rp. 1000</nav>
            <div className={styles.body_content_img_desc}>
              <img src={add} alt="" width="50" />
            </div>
          </div>
          <div className={styles.body_content_desc}>
            <div className={styles.body_content_desc_name}>
              <a href="#">Pakaian Pria</a>
            </div>
          </div>
        </div>
        <div className={styles.body_content}>
          <div className={styles.body_content_img}>
            <nav className={styles.body_content_img_1}>Rp. 1000</nav>
            <div className={styles.body_content_img_desc}>
              <img src={add} alt="" width="50" />
            </div>
          </div>
          <div className={styles.body_content_desc}>
            <div className={styles.body_content_desc_name}>
              <a href="#">Pakaian Pria</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
