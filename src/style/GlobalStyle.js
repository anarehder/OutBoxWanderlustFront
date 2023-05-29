import { createGlobalStyle } from "styled-components";
import { mainColorButton, mainContrastColor } from "../constants/colors";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Dosis', sans-serif;
        font-style: normal;
        font-weight: 400;
        
    }
    button {
        background-color: ${mainColorButton};
        font-family: 'Dosis', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
    }
`

export default GlobalStyle