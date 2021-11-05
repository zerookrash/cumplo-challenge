import React, { useState, useEffect } from "react";
import "./CountDown.css";
import axios from "axios";

const CountDown = ({ hoursMinSecs }) => {
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);

  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) reset();
    else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  const reset = () =>
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

  const countDownApi = () => {
    const url = "http://localhost:3001/api/v1/countdown";
    axios.get(url).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    countDownApi();
    return () => clearInterval(timerId);
  });

  return (
    <div>
      <p className="countDown">{`${hrs.toString().padStart(2, "0")}:${mins
        .toString()
        .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`}</p>
    </div>
  );
};

export default CountDown;
