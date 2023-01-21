import React from "react";
import { Input } from "@mui/material";
import styles from "./input.module.css";
const InputFields = (props) => {
  return (
    <div className={styles.mainDiv}>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
};

export default InputFields;
