import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    src: local('Poppins Light'),
        url('/fonts/poppins-v15-latin-300.woff2') format('woff2'),        
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: local('Poppins Regular'),
        url('/fonts/poppins-v15-latin-regular.woff2') format('woff2'), 
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: local('Poppins Semibold'),
        url('/fonts/poppins-v15-latin-600.woff2') format('woff2'),        
  }

  body, html, * {
    margin: 0;
    padding: 0
  } 

  body {
    font-family: 'Poppins', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;
