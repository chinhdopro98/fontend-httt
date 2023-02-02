import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRouter from "./router/PrivateRouter";
import PublicRouter from "./router/PublicRouter";
import MainApp from "./components/layout";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Navigate to="/app" replace />} />
        <Route element={<PrivateRouter />}>
          <Route path="app/*" element={<MainApp />} />
        </Route>
        <Route element={<PublicRouter />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
