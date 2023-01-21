import React from "react";
import Image from "../../../../assests/logo.png";
import styles from "./logo.module.css"
const Logo = () => {
  return (
    <div className={styles.mainDiv}>
    
      <img src={Image} alt="" />
    
    </div>
  );
};

export default Logo;
