import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = days[date.getDay()];

    return day;
  }

  return (
    <div className="WeatherForecastDay">
      <div>{day()}</div>
      <WeatherIcon
        className="weatherIcon"
        code={props.data.weather[0].icon}
        size={50}
        color="white"
      />
      <div className="temp-range">
        <strong> {Math.round(props.data.temp.min)}°C</strong>/{" "}
        {Math.round(props.data.temp.max)}°C
      </div>
    </div>
  );
}
