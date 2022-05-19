import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeekForecast.css";

export default function WeekForecast() {
  return (
    <div className="row week-forecast">
      <div className="col-2">
        <div>WED</div>
        <WeatherIcon
          className="weatherIcon"
          code="01d"
          size={50}
          color="white"
        />
        <div class="temp-range">
          <strong> 30°C </strong>/ 26°C
        </div>
      </div>
    </div>
  );
}
