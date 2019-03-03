import { createGlobalStyle } from 'styled-components';
import * as fontFiles from '../fonts';

const GlobalStyle = createGlobalStyle`
  html{
    color: blue;
  }

  @font-face {
    font-family: "saxmonoregular";
    font-style: normal;
    font-weight: normal;
    src: local("saxmonoregular"),
    local("saxmonoregular"),
    url(${fontFiles.saxmonoRegularTff}) format("truetype"),
    url(${fontFiles.saxmonoRegularWoff}) format("woff");
  }

  @font-face {
    font-family: "hackregular";
    font-style: normal;
    font-weight: normal;
    src: local("hackregular"),
    local("hackregular"),
    url(${fontFiles.hackRegularTff}) format("truetype"),
    url(${fontFiles.hackRegularWoff}) format("woff");
  }
`;

export { GlobalStyle };
