---
title: Animation
localeTitle: 动画
---
## 画布中的动画

要在`canvas`制作动画，请使用`window.requestAnimationFrame`设置绘制循环。

```js
function draw() { 
  /* code goes here */ 
  window.requestAnimationFrame(draw); 
 } 
 window.requestAnimationFrame(draw); 
```

下面的代码将导致`draw`函数每帧运行。

`canvas`没有允许动画的特殊功能。你只需要习惯于在动画循环中写作。动画循环的通常设计范例是更新状态，然后绘制状态。例如，要在屏幕上绘制一个正方形：

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

要查看此概念，请参阅“ [粒子模拟](/articles/canvas/particle-sim) ”页面。

#### 更多信息：

*   [MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)