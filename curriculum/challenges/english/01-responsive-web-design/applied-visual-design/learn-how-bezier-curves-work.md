---
id: 587d78a9367417b2b2512ae8
title: Learn How Bezier Curves Work
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bDrs8'
forumTopicId: 301058
---

## Description
<section id='description'>
The last challenge introduced the <code>animation-timing-function</code> property and a few keywords that change the speed of an animation over its duration. CSS offers an option other than keywords that provides even finer control over how the animation plays out, through the use of Bezier curves.
In CSS animations, Bezier curves are used with the <code>cubic-bezier</code> function. The shape of the curve represents how the animation plays out. The curve lives on a 1 by 1 coordinate system. The X-axis of this coordinate system is the duration of the animation (think of it as a time scale), and the Y-axis is the change in the animation.
The <code>cubic-bezier</code> function consists of four main points that sit on this 1 by 1 grid: <code>p0</code>, <code>p1</code>, <code>p2</code>, and <code>p3</code>. <code>p0</code> and <code>p3</code> are set for you - they are the beginning and end points which are always located respectively at the origin (0, 0) and (1, 1). You set the x and y values for the other two points, and where you place them in the grid dictates the shape of the curve for the animation to follow. This is done in CSS by declaring the x and y values of the <code>p1</code> and <code>p2</code> "anchor" points in the form: <code>(x1, y1, x2, y2)</code>. Pulling it all together, here's an example of a Bezier curve in CSS code:
<code>animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);</code>
In the example above, the x and y values are equivalent for each point (x1 = 0.25 = y1 and x2 = 0.75 = y2), which if you remember from geometry class, results in a line that extends from the origin to point (1, 1). This animation is a linear change of an element during the length of an animation, and is the same as using the <code>linear</code> keyword. In other words, it changes at a constant speed.
</section>

## Instructions
<section id='instructions'>
For the element with the id of <code>ball1</code>, change the value of the <code>animation-timing-function</code> property from <code>linear</code> to its equivalent <code>cubic-bezier</code> function value. Use the point values given in the example above.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The value of the <code>animation-timing-function</code> property for the element with the id <code>ball1</code> should be the linear-equivalent cubic-bezier function.
    testString: assert($('#ball1').css('animation-timing-function') == 'cubic-bezier(0.25, 0.25, 0.75, 0.75)');
  - text: The value of the <code>animation-timing-function</code> property for the element with the id <code>ball2</code> should not change.
    testString: const ball2Animation = __helpers.removeWhiteSpace($('#ball2').css('animation-timing-function')); assert(ball2Animation == 'ease-out' || ball2Animation == 'cubic-bezier(0,0,0.58,1)');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  .balls{
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left: 27%;
    animation-timing-function: linear;
  }
  #ball2 {
    left: 56%;
    animation-timing-function: ease-out;
  }

  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }

</style>

<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>

  .balls{
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left: 27%;
    animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
  }
  #ball2 {
    left: 56%;
    animation-timing-function: ease-out;
  }

  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }
</style>
<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```

</section>
