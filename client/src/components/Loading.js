import React from "react";
import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0);
  }
  
  to{
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  margin: 8px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 4px solid gainsboro;
  border-top-color: transparent;
  animation: ${rotate360} 1s linear infinite;
`;

const LoadStyle = styled.section`
  grid-area: main;
  grid-column-start: back;
  grid-column-end: random;
  background-color: #262626;
  max-width: 100%;
  height: 50vh;
  border-bottom: solid black 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: gainsboro;
  margin-bottom: 250px;
`;

export const Loading = () => {
  return (
    <LoadStyle>
      <Spinner />
      {/* <h3>Fetching new album...</h3> */}
    </LoadStyle>
  );
};
