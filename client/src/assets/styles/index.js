import { createGlobalStyle } from 'styled-components';
import * as fontFiles from '../fonts';

const GlobalStyle = createGlobalStyle`
  :root {
    --header-height: 38px;
    --primary-color: ${props => (props.darkMode ? 'black' : '#0a0a2e')};
    --secondary-color: ${props => (props.darkMode ? '#1e2040' : '#f5f6f7')};
    --tertiary-color: ${props => (props.darkMode ? '#292948' : '#e8e8eb')};
    --quaternary-color: ${props => (props.darkMode ? '#43435d' : '#d4d4da')};
    --quaternary-canvas: ${props => (props.darkMode ? '#d4d4da' : '#43435d')};
    --tertiary-canvas: ${props => (props.darkMode ? '#e8e8eb' : '#292948')};
    --secondary-canvas: ${props => (props.darkMode ? '#f5f6f7' : '#1e2040')};
    --primary-canvas: ${props => (props.darkMode ? 'white' : '#0a0a2e')};
    --theme-color:#0a0a2e;
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
  @font-face {
    font-family: "latoregular";
    font-style: normal;
    font-weight: normal;
    src: local("latoregular"),
    local("latoregular"),
    url(${fontFiles.latoRegularTff}) format("truetype"),
    url(${fontFiles.latoRegularWoff}) format("woff");
  }
`;

export { GlobalStyle };
