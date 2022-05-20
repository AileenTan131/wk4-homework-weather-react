import React from "react";

export default function FormattedTime(props) {
  let hour = props.time.getHours();
  let minutes = props.time.getMinutes();

  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {hour}:{minutes}
    </div>
  );
}
