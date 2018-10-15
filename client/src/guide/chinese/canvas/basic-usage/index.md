---
title: Basic Usage
localeTitle: 基本用法
---
## 画布的基本用法

使用canvas时，首先将画布作为元素放入文档中。

```html

<canvas width="400" height="400" id="canvas"></canvas> 
```

`width`和`height`属性将控制画布的大小。这些属性控制绘图画布的大小，而不是实际渲染的大小。有关更多信息，请参阅“画布尺寸”页面。

为了使用`canvas` ，我们必须首先从页面中获取元素作为DOM元素，然后从中获取绘图上下文。

```js
var canvas = document.getElementById("canvas"); 
 var ctx = canvas.getContext('2d'); 
```

此后的所有绘图调用都将从`ctx`对象进行。 `ctx`表示对象的绘图上下文，并包含有关2D绘图空间的信息。 `canvas`对象是实际的DOM元素。与它交互允许我们访问`width`和`height`等属性。

有一些可用的绘图上下文，包括`webgl` 。 WebGL实际上是一种完全不同的技术，因此我们只关注2D绘图。

路径是`canvas`中绘图的构建块。有关详细信息，请参阅“ [路径](/articles/canvas/paths) ”页面。

#### 更多信息：

*   [MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
*   [HTMLCanvasElement.getContext（）（MDN）](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext)