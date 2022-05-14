import React from "react";
import "./CountryDateTime.css";

export default function CountryDateTime(props) {
  return (
    <div className="row align-items-center">
      <h1 className="col-6 country">{props.forecastData.country}</h1>
      <div className="col-6 today-text">
        <div>{props.forecastData.date}</div>
        <div>{props.forecastData.time}</div>
      </div>
    </div>
  );
}
