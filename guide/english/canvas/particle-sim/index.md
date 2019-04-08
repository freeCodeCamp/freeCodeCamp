---
title: Particle Sim
---
## Particle Simulation in Canvas

In this guide, we're going to build a basic particle simulation in Canvas using simple principles of animation.

We will want to set up an array of particles with accelerations and velocities. We will create 100 particles at random points on the canvas.

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const particles = [];
for (let i=0; i<100; i++) {
  particles.push(
    {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: 0,
      vy: 0,
      ax: 0,
      ay: 0
    }
  );
}
```

In our draw loop, we render these particles.

```js
const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i=0; i<particles.length; i++) {
    // update state

    // render state
    ctx.beginPath();
    ctx.arc(particles[i].x, particles[i].y, 5, 0, 2*Math.PI);
    ctx.fill();
  }

  window.requestAnimationFrame(draw);
};
window.requestAnimationFrame(draw);
```

Now, all we need to do is update velocity and acceleration each frame. We will add the acceleration to the velocity and add the velocity to the position.

```js
const draw = () => {
  for (let i=0; i<particles.length; i++) {
    // update state
    particles[i].x += particles[i].vx;
    particles[i].y += particles[i].vy;
    particles[i].vx += particles[i].ax;
    particles[i].vy += particles[i].ay;
  
    /* render code */
  }

  window.requestAnimationFrame(draw);
};
window.requestAnimationFrame(draw);
```

That's it! All we need to do to is create a force somewhere. Let's do it with a click listener.

```js
canvas.addEventListener('click', e => {
  const clickX = e.clientX - canvas.offsetLeft;
  const clickY = e.clientY - canvas.offsetTop;
  for (let i=0; i<particles.length; i++) {
    const delx = particles[i].x - clickX;
    const dely = particles[i].y - clickY;
    const magnitudeSquared = Math.pow(delx, 2) + Math.pow(dely, 2);
    
    particles[i].ax = 0.1*delx/magnitudeSquared;
    particles[i].ay = 0.1*dely/magnitudeSquared;
  }
});
```

This adds force via the [inverse-square law](https://en.wikipedia.org/wiki/Inverse-square_law).

That's all! The final codepen:

<p data-height="265" data-theme-id="0" data-slug-hash="OjMbpm" data-default-tab="js,result" data-user="alanluo" data-embed-version="2" data-pen-title="Particle Sim (FCC)" class="codepen">See the Pen <a href="https://codepen.io/alanluo/pen/OjMbpm/">Particle Sim (FCC)</a> by Alan Luo (<a href="https://codepen.io/alanluo">@alanluo</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<!-- TODO: make it cooler! -->

#### More Information:

- [MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)


