import { createGlobalStyle } from 'styled-components';
import IBM_REG_WOFF2 from 'assets/fonts/ibm-plex-sans-v9-latin-regular.woff2';
import IBM_REG_WOFF from 'assets/fonts/ibm-plex-sans-v9-latin-regular.woff';
import IBM_BOLD_WOFF2 from 'assets/fonts/ibm-plex-sans-v9-latin-700.woff2';
import IBM_BOLD_WOFF from 'assets/fonts/ibm-plex-sans-v9-latin-700.woff';

export const GlobalStyle = createGlobalStyle`
    /* ibm-plex-sans-regular - latin */
    @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url(${IBM_REG_WOFF2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${IBM_REG_WOFF}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* ibm-plex-sans-700 - latin */
    @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url(${IBM_BOLD_WOFF2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${IBM_BOLD_WOFF}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    html {
        box-sizing: border-box;
        font-size: 62.5% // from now 1rem === 10px
    }
    *, *:before, *:after {
        box-sizing: inherit;
        padding: 0;
        margin: 0;
    }
    body {
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 1.6rem;
    }
`;
