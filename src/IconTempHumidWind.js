import React from "react";
import "./IconTempHumidWind.css";

export default function IconTempHumidWind() {
  let weatherData = {
    temperature: "28",
    humidity: "10",
    wind: "15",
  };

  return (
    <div className="row align-items-center day-forecast">
      <div className="col-6 icon">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          className="main-weather-icon"
          alt=""
        />
      </div>
      <div className="col-6 day-forecast-text">
        <span className="temperature">{weatherData.temperature}</span>
        <span className="temperature-type active celcius">°C</span>
        <p className="forecast"></p>
        <p className="extra-info">
          Humidity: <span>{weatherData.humidity}</span>%
          <br />
          Wind: <span>{weatherData.wind}</span>m/h
        </p>
      </div>
    </div>
  );
}
