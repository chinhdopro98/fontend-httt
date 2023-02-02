import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRouter: React.FC = () => {
  const accessToken = localStorage.getItem("userToken");
  return !accessToken ? <Outlet /> : <Navigate to="/app" />;
};
export default PublicRouter;
