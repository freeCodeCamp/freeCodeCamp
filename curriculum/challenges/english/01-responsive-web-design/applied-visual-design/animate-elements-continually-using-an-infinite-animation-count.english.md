---
id: 587d78a8367417b2b2512ae3
title: Animate Elements Continually Using an Infinite Animation Count
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJDVfq'
forumTopicId: 301041
---

## Description
<section id='description'>
The previous challenges covered how to use some of the animation properties and the <code>@keyframes</code> rule. Another animation property is the <code>animation-iteration-count</code>, which allows you to control how many times you would like to loop through the animation. Here's an example:
<code>animation-iteration-count: 3;</code>
In this case the animation will stop after running 3 times, but it's possible to make the animation run continuously by setting that value to infinite.
</section>

## Instructions
<section id='instructions'>
To keep the ball bouncing on the right on a continuous loop, change the <code>animation-iteration-count</code> property to <code>infinite</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>animation-iteration-count</code> property should have a value of infinite.
    testString: assert($('#ball').css('animation-iteration-count') == 'infinite');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  #ball {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: 3;
  }

  @keyframes bounce{
    0% {
      top: 0px;
    }
    50% {
      top: 249px;
      width: 130px;
      height: 70px;
    }
    100% {
      top: 0px;
    }
  }
</style>
<div id="ball"></div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  #ball {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  @keyframes bounce{
    0% {
      top: 0px;
    }
    50% {
      top: 249px;
      width: 130px;
      height: 70px;
    }
    100% {
      top: 0px;
    }
  }
</style>
<div id="ball"></div>
```

</section>
