import React from "react";

export default function FormattedTime(props) {
  let hour = props.time.getHours();
  let minutes = props.time.getMinutes();

  return (
    <div>
      {hour}:{minutes}
    </div>
  );
}
