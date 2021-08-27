const styles = `

.sprite-container {
  height: 100%;
  width: 100%;
}

.sprite-svg {
  height: 100%;
  width: 100%;
  background: var(--theme-color);

}

@-webkit-keyframes shimmer{
  0% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    stroke-width: 2px;
  }
  5%{
   opacity:100%;
  }
  35% {
    stroke-width: 30px;
    opacity:100%;
  }
  65%{
    opacity:100%;
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
    opacity:100%;
  }
  65%{
    opacity:100%;
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    stroke-width: 2px;
  }
}

.sprite {
  opacity:0%;
  -webkit-animation-name: shimmer;
  animation-name: shimmer;
  animation-delay: 1s;
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

export default styles;
