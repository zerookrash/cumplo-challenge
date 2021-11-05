import React, { useState, useEffect } from "react";
import "./ListaCandidatos.css";
import logo from "../assets/img/logo.png";
import axios from "axios";
import Swal from "sweetalert2";

const ListaCandidatos = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

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
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "¡Gracias por tu Voto!",
          html: `Esperamos que a <strong>${res.data.name}</strong> le vaya muy bien.`,
          showConfirmButton: false,
          timer: 3500,
        });
        getCandidates();
        setHasVoted(true);
        console.log(res);
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "El tiempo se agoto",
          html: "<small>" + err + "</small>",
          showConfirmButton: false,
          timer: 1500,
        });
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
              <div className=" col-md-1 col-sm-1">
                <button
                  className={
                    hasVoted
                      ? "btn btn-outline-danger disabled"
                      : "btn btn-outline-danger"
                  }
                  onClick={() => getVote(candidate.id)}
                >
                  Votar
                </button>
              </div>
              <div className="col-md-10 col-sm-10">
                <h3>{candidate.name}</h3>
                <small> {candidate.store} </small>
              </div>
              <div className="col-md-1 col-sm-1 d-flex justify-content-end">
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
