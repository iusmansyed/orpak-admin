import React from "react";
import styles from "./button.module.css"
const Button = (props) => {
  return (
    <div style={styles.mainDiv}>
      <button>{props.text}</button>
    </div>
  );
};

export default Button;
