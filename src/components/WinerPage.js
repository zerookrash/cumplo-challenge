import React, { useState, useEffect } from "react";
import "./WinerPage.css";
import axios from "axios";

const WinerPage = () => {
  const [winer, setWiner] = useState([]);

  const getWiner = () => {
    const url = "http://localhost:3001/api/v1/candidates/winner";
    const headers = {
      "Content-Type": "application/json",
    };
    axios.get(url, { headers: { headers } }).then((res) => {
      setWiner(res.data);
    });
  };

  useEffect(() => {
    getWiner();
  }, []);

  return (
    <div className="winner">
      <h3>El empledo del mes es:</h3>
      <h1 className="name">{winer.name}</h1>
      <h3>
        con <span className="votes">{winer.votes}</span> votos.{" "}
      </h3>
      <h2>¡Felicidades!</h2>
    </div>
  );
};

export default WinerPage;
