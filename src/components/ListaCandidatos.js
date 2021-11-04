import React, { useState, useEffect } from "react";
import "./ListaCandidatos.css";
import axios from "axios";

const ListaCandidatos = () => {
  const [candidates, setCandidates] = useState([]);

  const getCandidates = () => {
    axios.get("http://localhost:3001/api/v1/candidates").then((res) => {
      const candidates = res.data;
      setCandidates(candidates);
      console.log(candidates);
    });
  };

  useEffect(() => {
    getCandidates();
  }, []);

  return (
    <>
      <p className="title">Los nominados son:</p>

      <div className="list-group h100">
        {candidates.map((candidate) => (
          <div className="row">
            <div className="col-1">
              <button className="btn btn-outline-danger">Votar</button>
            </div>
            <div className="col">
              <h3>{candidate.name}</h3>
              <small> {candidate.store} </small>
            </div>
            <div className="col d-flex justify-content-end">
              <p className="votes">{candidate.votes}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListaCandidatos;
