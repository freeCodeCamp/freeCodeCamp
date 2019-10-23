---
id: 587d78a8367417b2b2512ae6
title: Animate Multiple Elements at Variable Rates
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpWZc9'
forumTopicId: 301042
---

## Description
<section id='description'>
In the previous challenge, you changed the animation rates for two similarly animated elements by altering their <code>@keyframes</code> rules. You can achieve the same goal by manipulating the <code>animation-duration</code> of multiple elements.
In the animation running in the code editor, there are three "stars" in the sky that twinkle at the same rate on a continuous loop. To make them twinkle at different rates, you can set the <code>animation-duration</code> property to different values for each element.
</section>

## Instructions
<section id='instructions'>
Set the <code>animation-duration</code> of the elements with the classes <code>star-1</code>, <code>star-2</code>, and <code>star-3</code> to 1s, 0.9s, and 1.1s, respectively.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>animation-duration</code> property for the star with class <code>star-1</code> should remain at 1s.
    testString: assert($('.star-1').css('animation-duration') == '1s');
  - text: The <code>animation-duration</code> property for the star with class <code>star-2</code> should be 0.9s.
    testString: assert($('.star-2').css('animation-duration') == '0.9s');
  - text: The <code>animation-duration</code> property for the star with class <code>star-3</code> should be 1.1s.
    testString: assert($('.star-3').css('animation-duration') == '1.1s');

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
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-3 {
    margin-top: 10%;
    margin-left: 50%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  @keyframes twinkle {
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
<div class="star-3 stars"></div>
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
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-duration: 0.9s;
    animation-name: twinkle;
  }

  .star-3 {
    margin-top: 10%;
    margin-left: 50%;
    animation-duration: 1.1s;
    animation-name: twinkle;
  }

  @keyframes twinkle {
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
<div class="star-3 stars"></div>
```

</section>
