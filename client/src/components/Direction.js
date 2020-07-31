import React from "react";
import { NavigateNext } from "@styled-icons/material/NavigateNext";
import { NavigateBefore } from "@styled-icons/material/NavigateBefore";

export const Direction = (props) => {
  let icon = "";
  let divStyle = {};
  if (props.direction === "forward") {
    icon = <NavigateNext size={40} />;
    divStyle = { justifySelf: "end" };
  } else {
    icon = <NavigateBefore size={40} />;
  }

  const handleDirectionClick = () => {
    props.handleDirection(props.direction);
  };

  return (
    <div style={divStyle}>
      <button onClick={handleDirectionClick}>{icon}</button>
    </div>
  );
};
