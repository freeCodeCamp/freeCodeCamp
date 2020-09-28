---
id: 587d78a8367417b2b2512ae6
title: Animate Multiple Elements at Variable Rates
challengeType: 0
videoUrl: https://scrimba.com/c/cnpWZc9
forumTopicId: 301042
localeTitle: Анимация нескольких элементов при переменных значениях
---

## Description
<section id='description'>
В предыдущей задаче вы изменили скорость анимации для двух одинаково анимированных элементов, изменив их правила <code>@keyframes</code> . Вы можете достичь той же цели, манипулируя <code>animation-duration</code> нескольких элементов. В анимации, запущенной в редакторе кода, в небе есть три «звезды», которые мерцают с одинаковой скоростью в непрерывном цикле. Чтобы заставить их мерцать с разной скоростью, вы можете установить для свойства <code>animation-duration</code> для разных значений для каждого элемента.
</section>

## Instructions
<section id='instructions'>
Установите <code>animation-duration</code> элементов с классами <code>star-1</code> , <code>star-2</code> и <code>star-3</code> на 1s, 0.9s и 1.1s соответственно.
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
