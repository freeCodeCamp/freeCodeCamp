---
id: 587d78a8367417b2b2512ae4
title: Make a CSS Heartbeat using an Infinite Animation Count
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/c/cDZpDUr'
forumTopicId: 301062
---

## Description
<section id='description'>
Here's one more continuous animation example with the <code>animation-iteration-count</code> property that uses the heart you designed in a previous challenge.
The one-second long heartbeat animation consists of two animated pieces. The <code>heart</code> elements (including the <code>:before</code> and <code>:after</code> pieces) are animated to change size using the <code>transform</code> property, and the background <code>div</code> is animated to change its color using the <code>background</code> property.
</section>

## Instructions
<section id='instructions'>
Keep the heart beating by adding the <code>animation-iteration-count</code> property for both the <code>back</code> class and the <code>heart</code> class and setting the value to infinite. The <code>heart:before</code> and <code>heart:after</code> selectors do not need any animation properties.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>animation-iteration-count</code> property for the <code>heart</code> class should have a value of infinite.
    testString: assert($('.heart').css('animation-iteration-count') == 'infinite');
  - text: The <code>animation-iteration-count</code> property for the <code>back</code> class should have a value of infinite.
    testString: assert($('.back').css('animation-iteration-count') == 'infinite');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation-name: backdiv;
    animation-duration: 1s;

  }

  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
    animation-name: beat;
    animation-duration: 1s;

  }
  .heart:after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart:before {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }

  @keyframes backdiv {
    50% {
      background: #ffe6f2;
    }
  }

  @keyframes beat {
    0% {
      transform: scale(1) rotate(-45deg);
    }
    50% {
      transform: scale(0.6) rotate(-45deg);
    }
  }

</style>
<div class="back"></div>
<div class="heart"></div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  .back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation-name: backdiv;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
    animation-name: beat;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  .heart:after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart:before {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }

  @keyframes backdiv {
    50% {
      background: #ffe6f2;
    }
  }

  @keyframes beat {
    0% {
      transform: scale(1) rotate(-45deg);
    }
    50% {
      transform: scale(0.6) rotate(-45deg);
    }
  }
</style>
<div class="back"></div>
<div class="heart"></div>
```

</section>
