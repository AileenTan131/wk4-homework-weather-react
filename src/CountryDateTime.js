import React from "react";
import "./CountryDateTime.css";

export default function CountryDateTime() {
  let weatherData = {
    country: "Singapore",
    date: "Tuesday, 18 January",
    time: "8.35pm",
  };

  return (
    <div className="row align-items-center">
      <h1 className="col-6 country">{weatherData.country}</h1>
      <div className="col-6 today-text">
        <div>{weatherData.date}</div>
        <div>{weatherData.time}</div>
      </div>
    </div>
  );
}
