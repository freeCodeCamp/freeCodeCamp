---
title: Animation
localeTitle: Анимация
---
## Анимация в холсте

Чтобы анимировать объекты в `canvas` , используйте `window.requestAnimationFrame` для создания цикла рисования.

```js
function draw() { 
  /* code goes here */ 
  window.requestAnimationFrame(draw); 
 } 
 window.requestAnimationFrame(draw); 
```

Приведенный ниже код заставит функцию `draw` запускать каждый кадр.

`canvas` не имеет специальных функций, которые позволяют анимировать. Вы просто должны быть использованы для написания в циклах анимации. Обычная парадигма проектирования для циклов анимации - это обновление состояния, а затем рисование состояния. Например, чтобы нарисовать квадрат, перемещающийся по экрану:

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

Чтобы увидеть эту концепцию в действии, см. Страницу « [Particle Sim](/articles/canvas/particle-sim) ».

#### Дополнительная информация:

*   [API холста MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)