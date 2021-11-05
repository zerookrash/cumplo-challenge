import React, { useState, useEffect } from "react";
import "./ListaCandidatos.css";
import logo from "../assets/img/logo.png";
import axios from "axios";

const ListaCandidatos = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCandidates = async () => {
    const url = "http://localhost:3001/api/v1/candidates";
    const headers = "Content-Type: application/json";
    await axios
      .get(url, { headers: { headers } })
      .then((res) => {
        const candidates = res.data;
        setCandidates(candidates);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getVote = async (id) => {
    const url = "http://localhost:3001/api/v1/candidates/vote/";
    const headers = {
      "Content-Type": "application/json",
    };
    console.log(id);
    await axios
      .post(url, { id: id }, { headers: { headers } })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(`Algo salio mal: ${err}`);
      });
  };

  useEffect(() => {
    getCandidates();
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }, []);

  return (
    <>
      <p className="title">Los nominados son:</p>

      <div className="list-group h100">
        {!loading ? (
          <div id="content">
            <div className="spinner-border spinner" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <img src={logo} alt="Logo" />
          </div>
        ) : (
          candidates.map((candidate) => (
            <div className="row" key={candidate.id}>
              <div className="col col-md-1 col-sm-3">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => getVote(candidate.id)}
                >
                  Votar
                </button>
              </div>
              <div className="col col-sm-7">
                <h3>{candidate.name}</h3>
                <small> {candidate.store} </small>
              </div>
              <div className="col col-sm-2 d-flex justify-content-end">
                <p className="votes">{candidate.votes}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ListaCandidatos;
