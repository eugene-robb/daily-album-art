import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: Helvetica, Arial, sans-serif;
  }

  button {
    background-color: transparent;
    border: none;
    color: gainsboro;
    transition: all 0.3s ease 0s;

    
    &:hover{
      color: white;
    }

    &:focus{
      outline:none;
    }
  } 

`;
