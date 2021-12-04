import React from "react";
import styles from "../styles/ShoppingCart.module.css";
import up from "../assets/img/up-arrow.png";

export default function ShoppingCart() {
  return (
    <div className={styles.body}>
      <div className={styles.body_content_column}>
        <div className={styles.body_content_left}>Image</div>
        <div className={styles.body_content_right}>
          <div className={styles.body_content_right_title}>Pakaian Pria</div>
          <div className={styles.body_content_right_desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illo maxime cum alias. Modi est labore nemo eos corporis in itaque quibusdam tempore minus, vero nobis rem necessitatibus, veritatis sint!
          </div>
          <div className={styles.body_content_right_price}>Rp. 1000</div>
          <div className={styles.body_content_right_actions}>
            <div className={styles.body_content_right_actions_qty}>Quantity: 1</div>
            <div className={styles.body_content_right_actions_plus_minus}>
              <div className={styles.body_content_right_actions_plus_minus_left}>
                <img src={up} alt="" height="20" width="20" className={styles.image_up} />
              </div>
              <div className={styles.body_content_right_actions_plus_minus_right}>
                <img src={up} alt="" height="20" width="20" className={styles.image_down} />
              </div>
            </div>
            <div className={styles.body_content_right_actions_remove}>
              <button className={styles.remove_button}>Remove</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.body_content_column}>
        <div className={styles.body_content_left}>Image</div>
        <div className={styles.body_content_right}>
          <div className={styles.body_content_right_title}>Pakaian Pria</div>
          <div className={styles.body_content_right_desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illo maxime cum alias. Modi est labore nemo eos corporis in itaque quibusdam tempore minus, vero nobis rem necessitatibus, veritatis sint!
          </div>
          <div className={styles.body_content_right_price}>Rp. 1000</div>
          <div className={styles.body_content_right_actions}>
            <div className={styles.body_content_right_actions_qty}>Quantity: 1</div>
            <div className={styles.body_content_right_actions_plus_minus}>
              <div className={styles.body_content_right_actions_plus_minus_left}>
                <img src={up} alt="" height="20" width="20" className={styles.image_up} />
              </div>
              <div className={styles.body_content_right_actions_plus_minus_right}>
                <img src={up} alt="" height="20" width="20" />
              </div>
            </div>
            <div className={styles.body_content_right_actions_remove}>
              <button className={styles.remove_button}>Remove</button>
            </div>
          </div>
        </div>
      </div>
      {/* checkout */}
      <div className={styles.body_content_column}>
        <div className={styles.checkout_border}>
          <div className={styles.checkout_total}>Total</div>
          <div className={styles.checkout_qty}>Rp. 2000</div>
          <div>
            <button className={styles.checkout_button}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
