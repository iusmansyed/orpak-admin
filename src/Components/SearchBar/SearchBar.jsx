import { TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./search.module.css"
const SearchBar = () => {
  return (
    <div className={styles.mainDiv}>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        style={{ width: "450px",border:"none" }}
      />
      <div className={styles.search}>
        <SearchIcon style={{color:"#727F89",fontSize:30}} />
      </div>
    </div>
  );
};

export default SearchBar;
