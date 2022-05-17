import React from "react";
import "./IconTempHumidWind.css";
import WeatherIcon from "./WeatherIcon";

export default function IconTempHumidWind(props) {
  return (
    <div className="row align-items-center day-forecast">
      <div className="col-6 icon">
        <WeatherIcon code={props.forecastData.icon} />
      </div>
      <div className="col-6 day-forecast-text">
        <span className="temperature">
          {Math.round(props.forecastData.temperature)}
        </span>
        <span className="temperature-type active celcius"> °C</span>
        <p className="forecast">{props.forecastData.description}</p>
        <p className="extra-info">
          Humidity: <span>{props.forecastData.humidity}</span>%
          <br />
          Wind: <span>{Math.round(props.forecastData.wind)}</span>m/h
        </p>
      </div>
    </div>
  );
}
