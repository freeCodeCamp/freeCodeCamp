export default `

.sprite-container {
  height: 100%;
  width: 100%;
}

.sprite-svg {
  height: 100%;
  width: 100%;
  background: #aaa;

}

@-webkit-keyframes shimmer{
  0% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    stroke-width: 2px;
  }
  35% {
    stroke-width: 30px;
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    stroke-width: 2px;
  }
}

@keyframes shimmer{
  0% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    stroke-width: 2px;
  }
  35% {
    stroke-width: 30px;
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    stroke-width: 2px;
  }
}

.sprite {
  -webkit-animation-name: shimmer;
  animation-name: shimmer;
  width: 2px;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-direction: normal;
  animation-direction: normal;
}
`;
