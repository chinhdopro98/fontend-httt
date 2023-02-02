import React from "react";
import MainContainer from "../mainview/MainView";
import NavBar from "../navbar/NavBar";
const index = () => {
  return (
    <div>
      <NavBar />
      <div>
        <MainContainer />
      </div>
    </div>
  );
};

export default index;
