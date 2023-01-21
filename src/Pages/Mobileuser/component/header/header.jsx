import React from "react";
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import SearchBar from "../../../../Components/SearchBar/SearchBar";
import styles from "./header.module.css";
import Dropdown from "../../../../Components/Dropdown/Dropdown";
import Excel from "../../../../Components/ImportExcelButton/excel";
const header = () => {
  return (
    <>
      <Sidebar />
      <div className={styles.mainDiv}>
        <div className={styles.subDiv}>
          <div className={styles.search}>
            <SearchBar />
          </div>
          <div className={styles.s}>
            <div className={styles.Dropdown}>
              <span className={styles.text}>
                {" "}
                <p> Payment Method </p>
              </span>
              <Dropdown />
            </div>
            <div className={styles.excel}>
              <Excel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default header;
