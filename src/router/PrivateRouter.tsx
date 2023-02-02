import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter: React.FC = () => {
  const accessToken = localStorage.getItem("userToken");
  return accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
