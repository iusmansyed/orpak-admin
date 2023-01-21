import React from "react";
import Input from "../../../../Components/InputField/index";
import Button from "../../../../Components/Button/button";
import styles from "./forms.module.css";
const Forms = () => {
  return (
    <div className={styles.container}>
      <div style={{ alignSelf: "center" }}>
        <div>
          <p className={styles.text}>
            Welcome to <span className={styles.subText}>OrPak</span>
          </p>
        </div>
        <div className={styles.inp}>
          <Input type={"text"} placeholder={"user name"} />
        </div>
        <div className={styles.inp}>
          <Input type={"password"} placeholder={"password"} />
        </div>
        <div className={styles.btn} >
          <Button text={"login"} />
        </div>
      </div>
    </div>
  );
};

export default Forms;
