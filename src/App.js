import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import logo from "./assets/img/logo.png";
import ListaCandidatos from "./components/ListaCandidatos";

function App() {
  return (
    <div className="container">
      <div className="header">
        <img src={logo} alt="logo" className="img-fluid m-2" />
        <h3>30:00</h3>
      </div>
      <div className="title">
        <h1>El empleado del mes</h1>
      </div>

      <ListaCandidatos />
    </div>
  );
}

export default App;
