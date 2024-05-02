import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>nicholas</div>
      <div className={styles.text}>NicholasCloud4 © All rights reserved.</div>
    </div>
  );
};

export default Footer;
