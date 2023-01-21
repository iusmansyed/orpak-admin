import { Button } from "@mui/material";
import React from "react";
import styles from "./excel.module.css"
const Excel = () => {
  return (
    <div>
      <Button variant="contained" className={styles.btn} style={{ width: "200px", height: "56px" }}>
        Import From Excel
      </Button>
    </div>
  );
};

export default Excel;
