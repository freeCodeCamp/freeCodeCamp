---
title: Particle Sim
localeTitle: Particle Sim
---
## Simulação de Partículas em Lona

Neste guia, vamos construir uma simulação básica de partículas no Canvas usando princípios simples de animação.

Vamos querer configurar uma matriz de partículas com acelerações e velocidades. Nós vamos criar 100 partículas em pontos aleatórios na tela.

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

Em nosso loop de desenho, renderizamos essas partículas.

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

Agora, tudo o que precisamos fazer é atualizar a velocidade e a aceleração de cada quadro. Vamos adicionar a aceleração à velocidade e adicionar a velocidade à posição.

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

É isso aí! Tudo o que precisamos fazer é criar uma força em algum lugar. Vamos fazer isso com um ouvinte de cliques.

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

Isso adiciona força através da lei do inverso do quadrado. Veja [esta página](#placeholder) para mais detalhes.

Isso é tudo! O codepen final:

Veja o Pen [Particle Sim (FCC)](https://codepen.io/alanluo/pen/OjMbpm/) de Alan Luo ( [@alanluo](https://codepen.io/alanluo) ) no [CodePen](https://codepen.io) .

#### Mais Informações:

*   [API de tela MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)