import { createGlobalStyle } from 'styled-components';
import * as fontFiles from '../fonts';

const GlobalStyle = createGlobalStyle`
  :root {
    --header-height: 38px;
    --primary-color: black;
    --secondary-color: #0a0a2e;
    --tertiary-color: #292948;
    --quaternary-color: #43435d;
    --quaternary-canvas: #d4d4da;
    --tertiary-canvas: #e8e8eb;
    --secondary-canvas: #f5f6f7;
    --primary-canvas: white;
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
