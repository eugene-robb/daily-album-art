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
  margin: 0 auto;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 3px solid #262626;
  border-top-color: transparent;
  animation: ${rotate360} 1s linear infinite;
`;

const LoadStyle = styled.section`
  grid-area: main;
  background-color: lightgray;
  max-width: 100%;
  height: 640px;
  border: solid black 2px;
  margin-top: 50px;
`;

export const Loading = () => {
  return (
    <LoadStyle>
      <Spinner />
    </LoadStyle>
  );
};
