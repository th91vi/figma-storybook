import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 100;
  font-display: swap;
	src: local(''),url('/fonts/poppins-v15-latin-100.woff2') format('woff2'), 
}

@font-face {
	font-family: 'Poppins';
	font-style: italic;
	font-weight: 100;
  font-display: swap;
	src: local(''),url('/fonts/poppins-v15-latin-100italic.woff2') format('woff2'), 
}

@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 200;
  font-display: swap;
	src: local(''),url('/fonts/poppins-v15-latin-200.woff2') format('woff2'), 
}

@font-face {
	font-family: 'Poppins';
	font-style: italic;
	font-weight: 200;
  font-display: swap;
	src: local(''),url('/fonts/poppins-v15-latin-200italic.woff2') format('woff2'), 
}

@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 300;
  font-display: swap;
	src: local(''),url('/fonts/poppins-v15-latin-300.woff2') format('woff2'), 
}

@font-face {
	font-family: 'Poppins';
	font-style: italic;
	font-weight: 300;
  font-display: swap;
	src: local(''),url('/fonts/poppins-v15-latin-300italic.woff2') format('woff2'), 
}

@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
  font-display: swap;
	src: local(''),url('/fonts/poppins-v15-latin-regular.woff2') format('woff2'), 
}

@font-face {
	font-family: 'Poppins';
	font-style: italic;
	font-weight: 400;
  font-display: swap;
	src: local(''),url('/fonts/poppins-v15-latin-italic.woff2') format('woff2'), 
}

@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 500;
  font-display: swap;
	src: local(''),url('/fonts/poppins-v15-latin-500.woff2') format('woff2'), 
}

@font-face {
	font-family: 'Poppins';
	font-style: italic;
	font-weight: 500;
  font-display: swap;
	src: local(''),url('/fonts/poppins-v15-latin-500italic.woff2') format('woff2'), 
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: local(''),
       url('../fonts/roboto-v29-latin-100.woff2') format('woff2'), 
}

@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 100;
  font-display: swap;
  src: local(''),
       url('../fonts/roboto-v29-latin-100italic.woff2') format('woff2'), 
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local(''),
       url('../fonts/roboto-v29-latin-300.woff2') format('woff2'), 
}

@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: local(''),
       url('../fonts/roboto-v29-latin-300italic.woff2') format('woff2'), 
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(''),
       url('../fonts/roboto-v29-latin-regular.woff2') format('woff2'), 
}

@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: local(''),
       url('../fonts/roboto-v29-latin-italic.woff2') format('woff2'), 
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local(''),
       url('../fonts/roboto-v29-latin-500.woff2') format('woff2'), 
}

@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: local(''),
       url('../fonts/roboto-v29-latin-500italic.woff2') format('woff2'), 
}


  body, html, * {
    margin: 0;
    padding: 0
  } 

  body {
    font-family: 'Poppins', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;
