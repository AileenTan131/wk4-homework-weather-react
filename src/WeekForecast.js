import axios from "axios";
import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeekForecast.css";

export default function WeekForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response);
    setForecast(response.data.daily);
    setReady(true);
  }

  function search() {
    // let apiKey = `87675437846ea8c4242459c1be7a1969`;
    let apiKey = `4c7756cb000c7f0ee92c930c2b6efd59`;
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  if (ready) {
    console.log(forecast);
    return (
      <div className="row week-forecast">
        {forecast.map(function (dailyForecast, index) {
          if (index < 6)
            return (
              <div className="col-2" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
        })}
        {/* <div className="col-2">
          <WeatherForecastDay data={forecast[1]} />
        </div>
        <div className="col-2">
          <WeatherForecastDay data={forecast[2]} />
        </div>
        <div className="col-2">
          <WeatherForecastDay data={forecast[3]} />
        </div>
        <div className="col-2">
          <WeatherForecastDay data={forecast[4]} />
        </div>
        <div className="col-2">
          <WeatherForecastDay data={forecast[5]} />
        </div>
        <div className="col-2">
          <WeatherForecastDay data={forecast[6]} />
        </div> */}
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
