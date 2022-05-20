import axios from "axios";
import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeekForecast.css";

export default function WeekForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }

  let apiKey = `87675437846ea8c4242459c1be7a1969`;
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiURL).then(handleResponse);

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
