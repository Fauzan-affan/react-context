import React from "react";
import styles from "../styles/Login.module.css";

export default function Login() {
  return (
    <div className={styles.card_container}>
      <form action="#">
        <div className={styles.card_title}>TanggalMuda.com</div>
        <div className={styles.card_body}>
          <div className={styles.card_username}>
            <div className={styles.card_username_label}>Username: </div>
            <div className={styles.card_username_input}>
              <input type="text" className={styles.card_username_input_text} />
            </div>
          </div>
          <div className={styles.gap}></div>
          <div className={styles.card_password}>
            <div className={styles.card_password_label}>Password: </div>
            <div className={styles.card_password_input}>
              <input type="text" className={styles.card_password_input_text} />
            </div>
          </div>
        </div>
        <div className={styles.card_submit}>
          <input type="submit" value="Login" className={styles.card_submit_button} />
        </div>
      </form>
    </div>
  );
}
