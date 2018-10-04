---
title: Basic Usage
---
## Basic Usage of Canvas

When using canvas, first place a canvas into the document as an element.

```html
<canvas width="400" height="400" id="canvas"></canvas>
```

The `width` and `height` attributes will control the size of the canvas. These attributes control the size of the drawing canvas, not the actual rendered size. See the "Canvas Dimensions" page for more.

In order to use a `canvas`, we must first grab the element from the page as a DOM element, and then get a drawing context from it.

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
```

All drawing calls after this will be made from the `ctx` object. The `ctx` represents the drawing context of the object, and contains information about the 2D drawing space. The `canvas` object is the actual DOM element. Interacting with it allows us to access attributes like `width` and `height`.

There are a few available drawing contexts, including `webgl`. WebGL is really an entirely different technology, so we will only focus on 2D drawing.

Paths are the building block of drawing in `canvas`. See the '[Paths](/articles/canvas/paths)' page for more.

#### More Information:

- [MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [HTMLCanvasElement.getContext() (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext)