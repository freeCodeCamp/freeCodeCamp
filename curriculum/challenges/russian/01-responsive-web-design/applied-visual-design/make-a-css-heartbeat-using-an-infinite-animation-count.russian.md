---
id: 587d78a8367417b2b2512ae4
title: Make a CSS Heartbeat using an Infinite Animation Count
challengeType: 0
videoUrl: ''
localeTitle: Сделайте Heartbeat с использованием бесконечного количества анимации
---

## Description
<section id="description"> Вот еще один пример непрерывной анимации с свойством <code>animation-iteration-count</code> которое использует сердце, которое вы разработали в предыдущем задании. Односекундная анимация сердечного ритма состоит из двух анимированных фигур. Элементы <code>heart</code> (включая <code>:before</code> и <code>:after</code> фрагментов) анимируются, чтобы изменить размер с помощью свойства <code>transform</code> , а фоновый <code>div</code> анимирован, чтобы изменить его цвет, используя свойство <code>background</code> . </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert($(".heart").css("animation-iteration-count") == "infinite", "The <code>animation-iteration-count</code> property for the <code>heart</code> class should have a value of infinite.");'
  - text: ''
    testString: 'assert($(".back").css("animation-iteration-count") == "infinite", "The <code>animation-iteration-count</code> property for the <code>back</code> class should have a value of infinite.");'

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

```js
// solution required
```
</section>
