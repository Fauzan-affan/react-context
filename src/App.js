// import logo from "./logo.svg";
// import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Login from "./components/Login";
import ShoppingCart from "./components/ShoppingCart";
import styles from "./styles/App.module.css";

function App() {
  const [loginStatus, setLoginStatus] = useState(true);
  const [shoppingCart, setShoppingCart] = useState(false);
  return !loginStatus ? (
    <div className={styles.App_login}>
      <Login />
    </div>
  ) : (
    <div className={styles.App_header}>
      <Header />
      {shoppingCart ? <ShoppingCart /> : <Body />}
    </div>
  );
}

export default App;
