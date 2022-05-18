import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [temperature, setTemperature] = useState("Celcius");

  function showFarhenheit(event) {
    event.preventDefault();
    setTemperature("Farhenheit");
  }
  function showCelcius(event) {
    event.preventDefault();
    setTemperature("Celcius");
  }

  if (temperature === "Celcius") {
    return (
      <div>
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="temperature-type active celcius">
          {" "}
          °C |{" "}
          <a href="" onClick={showFarhenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let Farhenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div>
        <span className="temperature">{Math.round(Farhenheit)}</span>
        <span className="temperature-type active celcius">
          {" "}
          <a href="" onClick={showCelcius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
