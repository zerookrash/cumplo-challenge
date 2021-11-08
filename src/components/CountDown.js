import React, { useState, useEffect } from "react";
import "./CountDown.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CountDown = () => {
  const [countDown, setCountDown] = useState(1);
  let navigate = useNavigate();

  const countDownApi = () => {
    const url = "http://localhost:3001/api/v1/countdown";
    axios.get(url).then((res) => {
      let a = Math.floor(res.data.secondsLeft / 60); // minutes
      let b = Math.floor(res.data.secondsLeft % 60); // seconds
      let timer = {
        minutes: a,
        seconds: b,
      };
      let c = `${timer.minutes}:${timer.seconds}`;
      setCountDown(c);

      if (res.data.secondsLeft === 0) {
        navigate("/winner");
      }
    });
  };

  useEffect(() => {
    setTimeout(() => {
      countDownApi();
    }, 1000);
  });

  return <div className="countDown">{countDown}</div>;
};

export default CountDown;
