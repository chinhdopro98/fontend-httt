import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
const MainView: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </div>
  );
};

export default MainView;
