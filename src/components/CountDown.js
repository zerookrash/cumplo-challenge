import React, { useState, useEffect } from "react";
import "./CountDown.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

const CountDown = () => {
  const [countDown, setCountDown] = useState(1);

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
    });
  };

  useEffect(() => {
    setTimeout(() => {
      if (countDown !== 0) {
        countDownApi();
      } else {
        console.log("Navegar");
        <Redirect to="/winer" />;
      }
    }, 1000);
  }, [countDown]);

  return <div className="countDown">{countDown}</div>;
};

export default CountDown;
