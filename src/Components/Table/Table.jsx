import React from "react";
import styles from "./table.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import AddButton from "../addButoon/addButton";
const Table1 = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
    return (
      <div className={styles.mainDiv}>
        <div className={styles.table}>
          <table>
            <tr>
              <th>Actions</th>
              <th>Status</th>
              <th>Status</th>
              <th>Last Name</th>
              <th>Payment Method</th>
              <th>Employee ID Number</th>
              <th>Role</th>
              <th>Points</th>
              <th>Points</th>
              <th>Points</th>
              <th>Points</th>
              <th>Points</th>
            </tr>
            <tr>
              <td>
                <Switch {...label} defaultChecked />
              </td>
              <td>Smith</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
            </tr>
            <tr>
              <td>
                <Switch {...label} defaultChecked />
              </td>
              <td>Jackson</td>
              <td>94</td>
              <td>94</td>
              <td>94</td>
              <td>94</td>
              <td>94</td>
              <td>94</td>
              <td>94</td>
              <td>94</td>
              <td>94</td>
              <td>94</td>
            </tr>
            <tr>
              <td>
                <Switch {...label} defaultChecked />
              </td>
              <td>Johnson</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
            </tr>
            <tr>
              <td>
                <Switch {...label} defaultChecked />
              </td>
              <td>Johnson</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
            </tr>
            <tr>
              <td>
                <Switch {...label} defaultChecked />
              </td>
              <td>Johnson</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
            </tr>
          </table>
        </div>
        <div className={styles.btn}>
            <AddButton/>
        </div>
      </div>
    );
};

export default Table1;
