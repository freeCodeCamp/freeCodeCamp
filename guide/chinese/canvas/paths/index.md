---
title: Paths
localeTitle: 路径
---
## 画布中的路径

路径是Canvas中绘图的构建块。路径只是一种形状。然后，可以通过抚摸或填充形状来绘制形状。

我们可以使用`beginPath` ， `fill`和`stroke`创建使用路径。

```js
ctx.beginPath(); 
 ctx.rect(0, 0, 100, 100); 
 ctx.fillStyle="black"; 
 ctx.fill(); 
```

这会在画布的右上角创建一个黑色方块。我们可以使用`strokeStyle`和`fillStyle`来改变笔触和填充，它们都采用类似CSS的颜色字符串。我们也可以使用`lineWidth`来使笔划更粗。

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

有四种基本绘图功能： `rect` ， `moveTo` ， `lineTo`和`arc` 。

*   `rect(x, y, width, height)`将从（ `x` ， `y` ）维度（ `width` ， `height` ）创建的矩形添加到路径中。
*   `moveTo(x,y)`将笔移动到画布上的某个点
*   `lineTo(x,y)`将笔移动到画布上的某个点，然后在新点和旧点之间添加一条线到路径。
*   `arc(x, y, r, ti, tf)`在半径为`r` （ `x` ， `y` ）和从角度`ti`到`tf`的路径上添加弧（圆的一部分）。

请注意，这些功能会添加到工作路径中。他们没有创造新的道路。

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

第一个示例将绘制两个正方形，而第二个示例仅绘制一个正方形，因为`beginPath`丢弃了旧工作路径上的第一个矩形。

这个事实导致制作`canvas`动画时常见的错误。

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

上面的动画应该会在屏幕上移动，而不是创建一个长黑条。原因是在`draw`循环中没有调用`beginPath` 。

要阅读有关动画的更多信息，请参阅[动画](/articles/canvas/animation-in-canvas/)页面。

#### 更多信息：

*   [MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)