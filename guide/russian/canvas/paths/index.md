---
title: Paths
localeTitle: пути
---
## Контуры в холсте

Пути - это строительный блок рисования в холсте. Путь - это просто форма. Затем форму можно нарисовать, погладив ее или наполнив.

Мы можем создавать пути использования с `beginPath` , `fill` и `stroke` .

```js
ctx.beginPath(); 
 ctx.rect(0, 0, 100, 100); 
 ctx.fillStyle="black"; 
 ctx.fill(); 
```

Это создает черный квадрат в верхнем правом углу холста. Мы можем изменять штрихи и заливки с помощью `strokeStyle` и `fillStyle` , которые берут CSS-подобные цветовые строки. Мы также можем использовать `lineWidth` для `lineWidth` .

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

Существуют четыре основные функции рисования: `rect` , `moveTo` , `lineTo` и `arc` .

*   `rect(x, y, width, height)` добавляет прямоугольник, созданный из ( `x` , `y` ) размеров ( `width` , `height` ) к пути.
*   `moveTo(x,y)` перемещает перо в точку на холсте
*   `lineTo(x,y)` перемещает перо в точку на холсте, а затем добавляет линию между новой точкой и старой точкой пути.
*   `arc(x, y, r, ti, tf)` добавляет дугу (часть круга) в точке ( `x` , `y` ) с радиусом `r` и от угла `ti` до `tf` до пути.

Обратите внимание, что эти функции добавляют к рабочему пути. Они не создают новые пути.

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

Первый пример будет рисовать два квадрата, а второй будет рисовать только один, так как `beginPath` отбрасывает первый прямоугольник на прежнем рабочем пути.

Этот факт приводит к общей ошибке при создании анимации `canvas` .

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

Вышеупомянутая анимация, которая должна сделать квадратное перемещение по экрану, вместо этого создает длинную черную полосу. Причина в том, что `beginPath` не вызывается внутри цикла `draw` .

Подробнее о анимации читайте на странице « [Анимация»](/articles/canvas/animation-in-canvas/) .

#### Дополнительная информация:

*   [API холста MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)