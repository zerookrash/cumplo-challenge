import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import logo from "./assets/img/logo.png";

function App() {
  return (
    <div className="container">
      <header>
        <img src={logo} alt="logo" className="img-fluid m-2" />

        <h3>30:00</h3>
      </header>
      <div>
        <h1>El empleado del mes</h1>
      </div>
    </div>
  );
}

export default App;
