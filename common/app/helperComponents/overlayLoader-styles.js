export default `

.svg-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index:5;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100vh;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
}

.svg-container + div {
  -webkit-filter: blur(5px);
          filter: blur(5px);
}

@-webkit-keyframes overlay-loader {
  0% {
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
    opacity: 0;
  }
  50% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.8;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}

@keyframes overlay-loader {
  0% {
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0.0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.innerCircle {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-name: overlay-loader;
  animation-name: overlay-loader;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
  opacity: 0;
}

`;
