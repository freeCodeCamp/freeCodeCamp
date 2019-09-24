---
id: 587d78a8367417b2b2512ae7
title: Change Animation Timing with Keywords
challengeType: 0
videoUrl: https://scrimba.com/c/cJKvwCM
forumTopicId: 301045
localeTitle: Изменение времени анимации с помощью ключевых слов
---

## Description
<section id='description'>
В анимации CSS свойство <code>animation-timing-function</code> определяет, как быстро изменяется анимированный элемент во время анимации. Если анимация - это автомобиль, перемещающийся из точки A в точку B в заданное время (продолжительность <code>animation-duration</code> ), <code>animation-timing-function</code> говорит о том, как автомобиль ускоряется и замедляется в ходе движения. Для популярных опций есть несколько предопределенных ключевых слов. Например, значение по умолчанию - это <code>ease</code> , которая начинается медленно, ускоряется в середине, а затем в конце замедляется. Другие варианты включают <code>ease-out</code> , которое быстро начинается, а затем замедляется, <code>ease-in</code> , что медленно начинается, а затем ускоряется в конце или <code>linear</code> , что накладывает постоянную скорость анимации.
</section>

## Instructions
<section id='instructions'>
For the elements with id of <code>ball1</code> and <code>ball2</code>, add an <code>animation-timing-function</code> property to each, and set <code>#ball1</code> to <code>linear</code>, and <code>#ball2</code> to <code>ease-out</code>. Notice the difference between how the elements move during the animation but end together, since they share the same <code>animation-duration</code> of 2 seconds.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The value of the <code>animation-timing-function</code> property for the element with the id <code>ball1</code> should be linear.
    testString: assert($('#ball1').css('animation-timing-function') == 'linear');
  - text: The value of the <code>animation-timing-function</code> property for the element with the id <code>ball2</code> should be ease-out.
    testString: assert($('#ball2').css('animation-timing-function') == 'ease-out');

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
