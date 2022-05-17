import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  return (
    // <img src="https://solarsystem.nasa.gov/system/basic_html_elements/11561_Sun.png" />
    <ReactAnimatedWeather
      icon="CLEAR_DAY"
      color="goldenrod"
      size={512}
      animate={true}
    />
  );
}
