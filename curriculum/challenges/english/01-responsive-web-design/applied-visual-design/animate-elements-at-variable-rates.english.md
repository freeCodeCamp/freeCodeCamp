---
id: 587d78a8367417b2b2512ae5
title: Animate Elements at Variable Rates
challengeType: 0
videoUrl: 'https://scrimba.com/c/cZ89WA4'
forumTopicId: 301040
---

## Description
<section id='description'>
There are a variety of ways to alter the animation rates of similarly animated elements. So far, this has been achieved by applying an <code>animation-iteration-count</code> property and setting <code>@keyframes</code> rules.
To illustrate, the animation on the right consists of two "stars" that each decrease in size and opacity at the 20% mark in the <code>@keyframes</code> rule, which creates the twinkle animation. You can change the <code>@keyframes</code> rule for one of the elements so the stars twinkle at different rates.
</section>

## Instructions
<section id='instructions'>
Alter the animation rate for the element with the class name of <code>star-1</code> by changing its <code>@keyframes</code> rule to 50%.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>@keyframes</code> rule for the <code>star-1</code> class should be 50%.
    testString: assert(code.match(/twinkle-1\s*?{\s*?50%/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .stars {
    background-color: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    animation-iteration-count: infinite;
  }

  .star-1 {
    margin-top: 15%;
    margin-left: 60%;
    animation-name: twinkle-1;
    animation-duration: 1s;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-name: twinkle-2;
    animation-duration: 1s;
  }

  @keyframes twinkle-1 {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  @keyframes twinkle-2 {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  #back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(black, #000099, #66c2ff, #ffcccc, #ffeee6);
  }
</style>

<div id="back"></div>
<div class="star-1 stars"></div>
<div class="star-2 stars"></div>
```

</div>



</section>

## Solution
<section id='solution'>


```html
<style>
  .stars {
    background-color: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    animation-iteration-count: infinite;
  }

  .star-1 {
    margin-top: 15%;
    margin-left: 60%;
    animation-name: twinkle-1;
    animation-duration: 1s;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-name: twinkle-2;
    animation-duration: 1s;
  }

  @keyframes twinkle-1 {
    50% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  @keyframes twinkle-2 {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  #back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(black, #000099, #66c2ff, #ffcccc, #ffeee6);
  }
</style>
<div id="back"></div>
<div class="star-1 stars"></div>
<div class="star-2 stars"></div>

```

</section>
