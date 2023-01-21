import { border, height } from "@mui/system";
import React from "react";
import Forms from "./Components/Forms/Forms";
import Logo from "./Components/Sidelogo/logo";

const Index = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div
        style={{
          width: "35%",
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
          height:"100vh",

        }}
      >
        <Logo />
      </div>
      <div
        style={{
          width: "75%",
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Forms />
      </div>
    </div>
  );
};

export default Index;
