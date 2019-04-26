---
title: Animation
---
## Animation in Canvas

To animate things in `canvas`, use `window.requestAnimationFrame` to set up a draw loop.

```js
const draw = () => {
  /* code goes here */
  window.requestAnimationFrame(draw);
};
window.requestAnimationFrame(draw);
```

`canvas` has no special functions that allow for animating. You just have to be used to writing in animation loops. The usual design paradigm for animation loops is to update the state, then draw the state. For instance, to draw a square moving across the screen:

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const y = 50;
let x = 0;
const draw = () => {
  // reset canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // update state
  x += 1;

  // render state
  ctx.beginPath();
  ctx.rect(x, y, 50, 50);
  ctx.fill();

  window.requestAnimationFrame(draw);
};
window.requestAnimationFrame(draw);
```

To see this concept in action, see the [Particle Sim](/articles/canvas/particle-sim) page.

#### More Information:

- [MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)


