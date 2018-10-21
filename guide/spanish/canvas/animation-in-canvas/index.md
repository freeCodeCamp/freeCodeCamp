---
title: Animation
localeTitle: Animación
---
## Animación en lienzo

Para animar cosas en el `canvas` , use `window.requestAnimationFrame` para configurar un ciclo de dibujo.

```js
function draw() { 
  /* code goes here */ 
  window.requestAnimationFrame(draw); 
 } 
 window.requestAnimationFrame(draw); 
```

El siguiente código hará que la función de `draw` se ejecute en cada fotograma.

`canvas` no tiene funciones especiales que permitan animar. Solo tienes que estar acostumbrado a escribir en bucles de animación. El paradigma de diseño habitual para los bucles de animación es actualizar el estado, luego dibujar el estado. Por ejemplo, para dibujar un cuadrado moviéndose a través de la pantalla:

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

Para ver este concepto en acción, vea la página ' [Simulador de partículas](/articles/canvas/particle-sim) '.

#### Más información:

*   [API MDN Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)