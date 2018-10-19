---
title: Animation
localeTitle: Animação
---
## Animação em tela

Para animar coisas na `canvas` , use `window.requestAnimationFrame` para configurar um loop de desenho.

```js
function draw() { 
  /* code goes here */ 
  window.requestAnimationFrame(draw); 
 } 
 window.requestAnimationFrame(draw); 
```

O código abaixo fará com que a função de `draw` seja executada a cada quadro.

`canvas` não tem funções especiais que permitam animar. Você só precisa estar acostumado a escrever em loops de animação. O paradigma usual de design para loops de animação é atualizar o estado e desenhar o estado. Por exemplo, para desenhar um quadrado em movimento na tela:

```js
canvas = document.getElementById("canvas"); 
 ctx = canvas.getContext('2d'); 
 
 var x=0; 
 var y=50; 
 function draw() { 
  // reset canvas 
  ctx.clearRect(0, 0, canvas.width, canvas.height); 
  //update state 
  x+=1; 
 
  // render state 
  ctx.beginPath(); 
  ctx.rect(x, y, 50, 50); 
  ctx.fill(); 
 
  window.requestAnimationFrame(draw); 
 } 
 window.requestAnimationFrame(draw); 
```

Para ver este conceito em ação, consulte a página " [Sim de partícula](/articles/canvas/particle-sim) ".

#### Mais Informações:

*   [API de tela MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)