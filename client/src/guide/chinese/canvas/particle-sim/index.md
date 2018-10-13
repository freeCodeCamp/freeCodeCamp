---
title: Particle Sim
localeTitle: 粒子是的
---
## 画布中的粒子模拟

在本指南中，我们将使用简单的动画原理在Canvas中构建基本粒子模拟。

我们想要建立一个具有加速度和速度的粒子阵列。我们将在画布上的随机点创建100个粒子。

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

在我们的绘制循环中，我们渲染这些粒子。

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

现在，我们需要做的就是每帧更新速度和加速度。我们将加速度添加到速度并将速度添加到位置。

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

而已！我们需要做的就是在某处创造一股力量。让我们用点击监听器来做。

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

这通过平方反比定律增加了力。有关详细信息，请参阅[此页面](#placeholder) 。

就这样！最终的代码：

见笔[粒子SIM（FCC）](https://codepen.io/alanluo/pen/OjMbpm/)由罗志祥（ [@alanluo](https://codepen.io/alanluo)上） [CodePen](https://codepen.io) 。

#### 更多信息：

*   [MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)