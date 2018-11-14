---
title: Particle Sim
localeTitle: Частица Да
---
## Моделирование частиц в холсте

В этом руководстве мы собираемся создать базовое моделирование частиц в Canvas, используя простые принципы анимации.

Мы захотим создать массив частиц с ускорениями и скоростями. Мы создадим 100 частиц в случайных точках на холсте.

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

В нашем рисовальном цикле мы делаем эти частицы.

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

Теперь нам нужно только обновить скорость и ускорить каждый кадр. Мы добавим ускорение к скорости и добавим скорость в позицию.

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

Это оно! Все, что нам нужно сделать, это создать где-то силу. Давайте сделаем это с помощью прослушивателя кликов.

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

Это добавляет силу через закон обратного квадрата. См. [Эту страницу](#placeholder) для получения более подробной информации.

Это все! Окончательный код:

См. « [Ручной](https://codepen.io/alanluo) [элементный](https://codepen.io) [симулятор» (FCC)](https://codepen.io/alanluo/pen/OjMbpm/) Алана Ло ( [@alanluo](https://codepen.io/alanluo) ) на [CodePen](https://codepen.io) .

#### Дополнительная информация:

*   [API холста MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)