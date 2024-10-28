// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
html , body {
    width: 100%;
    font-family: "Exo 2", sans-serif;
    background-color: green;


}

a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }
`;

export default GlobalStyle;
