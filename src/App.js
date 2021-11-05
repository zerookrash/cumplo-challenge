import React from "react";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import logo from "./assets/img/logo.png";
import ListaCandidatos from "./components/ListaCandidatos";
import CountDown from "./components/CountDown";

function App() {
  const hoursMinSecs = { hours: 0, minutes: 30, seconds: 0 };
  return (
    <div className="container">
      <div className="header">
        <img src={logo} alt="logo" className="img-fluid m-2" />
        <CountDown hoursMinSecs={hoursMinSecs} />
      </div>
      <div className="title">
        <h1>El empleado del mes</h1>
      </div>

      <ListaCandidatos />
    </div>
  );
}

export default App;
