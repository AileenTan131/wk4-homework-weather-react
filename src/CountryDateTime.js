import React from "react";
import "./CountryDateTime.css";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function CountryDateTime(props) {
  return (
    <div className="row align-items-center">
      <h1 className="col-6 country">{props.forecastData.country}</h1>
      <div className="col-6 today-text">
        <div>
          <FormattedDate date={props.forecastData.date} />
          {/* created a new function to tap on the solely the date props in a new page */}
        </div>
        <div>
          <FormattedTime time={props.forecastData.date} />
        </div>
      </div>
    </div>
  );
}
