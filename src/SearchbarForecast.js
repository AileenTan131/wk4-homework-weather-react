import React, { useState } from "react";
import axios from "axios";
import "./SearchbarForecast.css";
import CountryDateTime from "./CountryDateTime";
import IconTempHumidWind from "./IconTempHumidWind";

export default function Searchbar() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/01d@2x.png",
      country: "Singapore",
      date: "Tuesday, 18 January",
      time: "8.35pm",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Searchbar">
        <form className="top">
          <input
            type="text"
            placeholder=" Enter a city here!"
            className="city-search"
          />
          <input type="submit" className="submit-button" />
          <button className="submit-button">Current</button>
        </form>

        <br />
        <CountryDateTime forecastData={weatherData} />
        <IconTempHumidWind forecastData={weatherData} />
      </div>
    );
  } else {
    let apiKey = `4c7756cb000c7f0ee92c930c2b6efd59`;
    let city = "london";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading...";
  }
}
