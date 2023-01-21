import React from "react";
import styles from "./sidebar.module.css";
import Img from "../../assests/logo.png";
import PeopleIcon from "@mui/icons-material/People";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import { useState } from "react";

const Sidebar = () => {
const [click, setclick] = useState(false);
const [click1, setclick1] = useState(false);
    return (
      <div className={styles.mainDiv}>
        <div>
          <img src={Img} alt="" width="240px" />
        </div>
        <div
          className={styles.optn}
          onClick={() => {
            setclick(!click);
            setclick1(false);
          }}
          style={{ backgroundColor: click ? "#E5F0FF" : "" }}
        >
          <div>
            <PeopleIcon
              style={{ fontSize: 40, color: click ? "#0016BB" : "" }}
            />{" "}
          </div>
          <div>
            <p>Mobile User</p>
          </div>
        </div>
        <div
          className={styles.optn}
          onClick={() => {
            setclick1(!click1);
            setclick(false);
          }}
          style={{ backgroundColor: click1 ? "#E5F0FF" : "" }}
        >
          <div>
            <LocalGasStationIcon
              style={{ fontSize: 40, color: click1 ? "#0016BB" : "" }}
            />{" "}
          </div>
          <div>
            <p>Mobile User</p>
          </div>
        </div>
      </div>
    );
};

export default Sidebar;
