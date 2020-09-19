---
id: 587d78a9367417b2b2512ae9
title: Use a Bezier Curve to Move a Graphic
challengeType: 0
videoUrl: 'https://scrimba.com/c/c6bnRCK'
forumTopicId: 301071
---

## Description
<section id='description'>
A previous challenge discussed the <code>ease-out</code> keyword that describes an animation change that speeds up first and then slows down at the end of the animation. On the right, the difference between the <code>ease-out</code> keyword (for the blue element) and <code>linear</code> keyword (for the red element) is demonstrated. Similar animation progressions to the <code>ease-out</code> keyword can be achieved by using a custom cubic Bezier curve function.
In general, changing the <code>p1</code> and <code>p2</code> anchor points drives the creation of different Bezier curves, which controls how the animation progresses through time. Here's an example of a Bezier curve using values to mimic the ease-out style:
<code>animation-timing-function: cubic-bezier(0, 0, 0.58, 1);</code>
Remember that all <code>cubic-bezier</code> functions start with <code>p0</code> at (0, 0) and end with <code>p3</code> at (1, 1). In this example, the curve moves faster through the Y-axis (starts at 0, goes to <code>p1</code> y value of 0, then goes to <code>p2</code> y value of 1) than it moves through the X-axis (0 to start, then 0 for <code>p1</code>, up to 0.58 for <code>p2</code>). As a result, the change in the animated element progresses faster than the time of the animation for that segment. Towards the end of the curve, the relationship between the change in x and y values reverses - the y value moves from 1 to 1 (no change), and the x values move from 0.58 to 1, making the animation changes progress slower compared to the animation duration.
</section>

## Instructions
<section id='instructions'>
To see the effect of this Bezier curve in action, change the <code>animation-timing-function</code> of the element with id of <code>red</code> to a <code>cubic-bezier</code> function with x1, y1, x2, y2 values set respectively to 0, 0, 0.58, 1. This will make both elements progress through the animation similarly.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The value of the <code>animation-timing-function</code> property of the element with the id <code>red</code> should be a <code>cubic-bezier</code> function with x1, y1, x2, y2 values set respectively to 0, 0, 0.58, 1 .
    testString: assert($('#red').css('animation-timing-function') == 'cubic-bezier(0, 0, 0.58, 1)');
  - text: The element with the id <code>red</code> should no longer have the <code>animation-timing-function</code> property of linear.
    testString: assert($('#red').css('animation-timing-function') !== 'linear');
  - text: The value of the <code>animation-timing-function</code> property for the element with the id <code>blue</code> should not change.
    testString: const blueBallAnimation = __helpers.removeWhiteSpace($('#blue').css('animation-timing-function')); assert(blueBallAnimation == 'ease-out' || blueBallAnimation == 'cubic-bezier(0,0,0.58,1)');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .balls{
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 27%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
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
<div class="balls" id= "red"></div>
<div class="balls" id= "blue"></div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  .balls{
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 27%;
    animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  }
  #blue {
    background: blue;
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
<div class="balls" id= "red"></div>
<div class="balls" id= "blue"></div>
```

</section>
