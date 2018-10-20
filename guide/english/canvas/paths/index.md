---
title: Paths
---
## Paths in Canvas

Paths are the building block of drawing in Canvas. A path is just a shape. Then, the shape can be drawn on by either stroking it or filling it.

We can create use paths with `beginPath`, `fill`, and `stroke`.

```js
ctx.beginPath();
ctx.rect(0, 0, 100, 100);
ctx.fillStyle="black";
ctx.fill();
```

This creates a black square in the upper-right corner of the canvas. We can change strokes and fills with `strokeStyle` and `fillStyle`, which both take CSS-like color strings. We can also use `lineWidth` to make strokes thicker.

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

There are four basic drawing functions: `rect`, `moveTo`, `lineTo`, and `arc`.

- `rect(x, y, width, height)` adds a rectangle created from (`x`,`y`) of dimensions (`width`, `height`) to the path.
- `moveTo(x,y)` moves the pen to a point on the canvas
- `lineTo(x,y)` moves the pen to a point on the canvas, then adds a line between the new point and the old point to the path.
- `arc(x, y, r, ti, tf)` adds an arc (a portion of a circle) at (`x`,`y`), of radius `r`, and from angle `ti` to `tf` to the path.

Note that these functions add to the working path. They don't create new paths.

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

The first example will draw two squares, while the second will only draw one since `beginPath` discarded the first rectangle on the old working path.

This fact leads to a common mistake in making `canvas` animations.

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

The above animation, which is supposed to make a square move across the screen, instead creates a long black bar. The reason is that `beginPath` is not called inside the `draw` loop.

To read more about animation, see the [Animation](/articles/canvas/animation-in-canvas/) page.

#### More Information:

- [MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)


