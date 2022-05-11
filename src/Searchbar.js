import React from "react";
import "./Searchbar.css";

export default function Searchbar() {
  return (
    <form className="top">
      <input
        type="text"
        placeholder=" Enter a city here!"
        className="city-search"
      />
      <input type="submit" className="submit-button" />
      <button className="submit-button">Current</button>
    </form>
  );
}
