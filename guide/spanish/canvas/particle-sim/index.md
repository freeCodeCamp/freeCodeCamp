---
title: Particle Sim
localeTitle: Particle Sí
---
## Simulación de partículas en lienzo

En esta guía, vamos a construir una simulación de partículas básica en Canvas usando principios simples de animación.

Queremos configurar una matriz de partículas con aceleraciones y velocidades. Crearemos 100 partículas en puntos aleatorios en el lienzo.

```js
canvas = document.getElementById("canvas"); 
 ctx = canvas.getContext('2d'); 
 
 var particles = []; 
 for(var i=0; i<100; i++) { 
  particles.push( 
    { 
      x:Math.random()*canvas.width, 
      y:Math.random()*canvas.height, 
      vx:0, 
      vy:0, 
      ax:0, 
      ay:0 
    } 
  ); 
 } 
```

En nuestro ciclo de dibujo, renderizamos estas partículas.

```js
function draw() { 
  ctx.clearRect(0, 0, canvas.width, canvas.height); 
  for(var i=0; i<particles.length; i++) { 
    // update state 
 
    // render state 
    ctx.beginPath(); 
    ctx.arc(particles[i].x, particles[i].y, 5, 0, 2*Math.PI); 
    ctx.fill(); 
  } 
 
  window.requestAnimationFrame(draw); 
 } 
 window.requestAnimationFrame(draw); 
```

Ahora, todo lo que necesitamos hacer es actualizar la velocidad y la aceleración de cada fotograma. Agregaremos la aceleración a la velocidad y agregaremos la velocidad a la posición.

```js
function draw() { 
  for(var i=0; i<particles.length; i++) { 
    // update state 
    particles[i].x+=particles[i].vx; 
    particles[i].y+=particles[i].vy; 
    particles[i].vx+=particles[i].ax; 
    particles[i].vy+=particles[i].ay; 
 
    /* render code */ 
  } 
 
  window.requestAnimationFrame(draw); 
 } 
 window.requestAnimationFrame(draw); 
```

¡Eso es! Todo lo que tenemos que hacer es crear una fuerza en alguna parte. Vamos a hacerlo con un oyente de clic.

```js
canvas.addEventListener("click", function(e) { 
  var clickX = e.clientX-canvas.offsetLeft; 
  var clickY = e.clientY-canvas.offsetTop; 
  for(var i=0; i<particles.length; i++) { 
    var delx = particles[i].x-clickX; 
    var dely = particles[i].y-clickY; 
    var magnitudeSquared = Math.pow(delx, 2)+Math.pow(dely, 2); 
 
 
    particles[i].ax = 0.1*delx/magnitudeSquared; 
    particles[i].ay = 0.1*dely/magnitudeSquared; 
 
  } 
 }); 
```

Esto agrega fuerza a través de la ley del cuadrado inverso. Vea [esta página](#placeholder) para más detalles.

¡Eso es todo! El codepen final:

Vea el Simulador de [Partículas de](https://codepen.io/alanluo/pen/OjMbpm/) Pluma [(FCC)](https://codepen.io/alanluo/pen/OjMbpm/) de Alan Luo ( [@alanluo](https://codepen.io/alanluo) ) en [CodePen](https://codepen.io) .

#### Más información:

*   [API MDN Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)