import React from "react";
import { NavigateNext } from "@styled-icons/material/NavigateNext";
import { NavigateBefore } from "@styled-icons/material/NavigateBefore";

export const Direction = (props) => {
  let icon = "";
  let divStyle = {};
  if (props.direction === "Next") {
    icon = <NavigateNext size={35} />;
    divStyle = { justifySelf: "end" };
  } else {
    icon = <NavigateBefore size={35} />;
  }

  const handleDirectionClick = () => {
    props.handleDirection(props.direction);
  };

  return (
    <div style={divStyle}>
      <button onClick={handleDirectionClick}>{icon}</button>;
    </div>
  );
};
