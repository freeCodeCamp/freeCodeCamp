---
title: Animation
---
## Animation in Canvas

Cycling through the following workflow as a best practice when creating animations in canvas.

#### 1. Clear the canvas
Unless the shapes you'll be drawing fill the complete canvas (for instance a backdrop image), you need to clear any shapes that have been drawn previously. The easiest way to do this is using the clearRect() method.

#### 2. Save the canvas state
If you're changing any setting (such as styles, transformations, etc.) which affect the canvas state and you want to make sure the original state is used each time a frame is drawn, you need to save that original state.

#### 3. Draw animated shapes
The step where you do the actual frame rendering.

#### 4. Restore the canvas state
If you've saved the state, restore it before drawing a new frame.


To animate things in `canvas`, use `window.requestAnimationFrame` to set up a draw loop.

```js
function draw() {
  /* code goes here */
  window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);
```

The below code will cause the `draw` function to be run every frame.

`canvas` has no special functions that allow for animating. You just have to be used to writing in animation loops. The usual design paradigm for animation loops is to update the state, then draw the state. For instance, to draw a square moving across the screen:

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

To see this concept in action, see the '[Particle Sim](/articles/canvas/particle-sim)' page.

#### More Information:

- [MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)


