---
id: 587d78a8367417b2b2512ae7
title: Change Animation Timing with Keywords
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJKvwCM'
forumTopicId: 301045
---

## Description

<section id='description'>

In CSS animations, the `animation-timing-function` property controls how quickly an animated element changes over the duration of the animation. If the animation is a car moving from point A to point B in a given time (your `animation-duration`), the `animation-timing-function` says how the car accelerates and decelerates over the course of the drive.

There are a number of predefined keywords available for popular options. For example, the default value is `ease`, which starts slow, speeds up in the middle, and then slows down again in the end. Other options include `ease-out`, which is quick in the beginning then slows down, `ease-in`, which is slow in the beginning, then speeds up at the end, or `linear`, which applies a constant animation speed throughout.

</section>

## Instructions

<section id='instructions'>

For the elements with id of `ball1` and `ball2`, add an `animation-timing-function` property to each, and set `#ball1` to `linear`, and `#ball2` to `ease-out`. Notice the difference between how the elements move during the animation but end together, since they share the same `animation-duration` of 2 seconds.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: The value of the <code>animation-timing-function</code> property for the element with the id <code>ball1</code> should be linear.
    testString: const ball1Animation = __helpers.removeWhiteSpace($('#ball1').css('animation-timing-function'));assert(ball1Animation == 'linear' || ball1Animation == 'cubic-bezier(0,0,1,1)');
  - text: The value of the <code>animation-timing-function</code> property for the element with the id <code>ball2</code> should be ease-out.
    testString: const ball2Animation = __helpers.removeWhiteSpace($('#ball2').css('animation-timing-function')); assert(ball2Animation == 'ease-out' || ball2Animation == 'cubic-bezier(0,0,0.58,1)');

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  .balls {
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
    left:27%;

  }
  #ball2 {
    left:56%;

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
  .balls {
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
    left:27%;
    animation-timing-function: linear;
  }
  #ball2 {
    left:56%;
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
