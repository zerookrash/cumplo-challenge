import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import logo from "./assets/img/logo.png";
import CountDown from "./components/CountDown";
import ListaCandidatos from "./components/ListaCandidatos";
import WinerPage from "./components/WinerPage";

function App() {
  const hoursMinSecs = { hours: 0, minutes: 30, seconds: 0 };

  return (
    <Router>
      <div className="container">
        <div className="header">
          <img src={logo} alt="logo" className="img-fluid m-2" />
          <CountDown hoursMinSecs={hoursMinSecs} />
        </div>
        <div className="title">
          <h1>El empleado del mes</h1>
        </div>

        <Routes>
          <Route path="/" exact element={<ListaCandidatos />} />
          <Route path="/winner" element={<WinerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
