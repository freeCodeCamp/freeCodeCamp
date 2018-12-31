---
title: Paths
localeTitle: Caminos
---
## Senderos en lienzo

Los caminos son la piedra angular del dibujo en Canvas. Un camino es solo una forma. Luego, la forma se puede dibujar ya sea acariciándola o rellenándola.

Podemos crear rutas de uso con `beginPath` , `fill` y `stroke` .

```js
ctx.beginPath(); 
 ctx.rect(0, 0, 100, 100); 
 ctx.fillStyle="black"; 
 ctx.fill(); 
```

Esto crea un cuadrado negro en la esquina superior derecha del lienzo. Podemos cambiar los trazos y rellenos con `strokeStyle` y `fillStyle` , que ambos toman cadenas de colores similares a CSS. También podemos usar `lineWidth` para hacer trazos más gruesos.

```js
ctx.beginPath(); 
 ctx.moveTo(0,0); 
 ctx.lineTo(300,150); 
 ctx.moveTo(0, 100); 
 ctx.lineTo(300, 250); 
 
 ctx.strokeStyle="red"; 
 ctx.lineWidth=2; 
 ctx.stroke(); 
```

Hay cuatro funciones básicas de dibujo: `rect` , `moveTo` , `lineTo` y `arc` .

*   `rect(x, y, width, height)` agrega un rectángulo creado a partir de ( `x` , `y` ) de dimensiones ( `width` , `height` ) a la ruta.
*   `moveTo(x,y)` mueve el lápiz a un punto en el lienzo
*   `lineTo(x,y)` mueve el lápiz a un punto en el lienzo, luego agrega una línea entre el punto nuevo y el punto anterior a la ruta.
*   `arc(x, y, r, ti, tf)` agrega un arco (una porción de un círculo) a ( `x` , `y` ), del radio `r` , y desde el ángulo `ti` a `tf` a la trayectoria.

Tenga en cuenta que estas funciones se agregan a la ruta de trabajo. No crean nuevos caminos.

```js
//example 1 
 ctx.beginPath(); 
 ctx.rect(0, 0, 50, 50); 
 ctx.rect(100, 100, 50, 50); 
 ctx.fill(); 
 
 //example 2 
 ctx.beginPath(); 
 ctx.rect(0, 0, 50, 50); 
 ctx.beginPath(); 
 ctx.rect(100, 100, 50, 50); 
 ctx.fill(); 
```

El primer ejemplo dibujará dos cuadrados, mientras que el segundo solo dibujará uno ya que `beginPath` descartó el primer rectángulo en la ruta de trabajo anterior.

Este hecho lleva a un error común al hacer animaciones de `canvas` .

```js
var x = 0; 
 var y = 0; 
 function draw() { 
  ctx.clearRect(0, 0, canvas.width, canvas.height); 
 
  ctx.rect(x, y, 50, 50); 
  ctx.fill(); 
  x+=1; 
 
  window.requestAnimationFrame(draw); 
 } 
 
 window.requestAnimationFrame(draw); 
```

La animación anterior, que se supone que hace un movimiento cuadrado en la pantalla, crea una barra negra larga. La razón es que no se llama a `beginPath` dentro del ciclo de `draw` .

Para leer más sobre animación, vea la página de [animación](/articles/canvas/animation-in-canvas/) .

#### Más información:

*   [API MDN Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)