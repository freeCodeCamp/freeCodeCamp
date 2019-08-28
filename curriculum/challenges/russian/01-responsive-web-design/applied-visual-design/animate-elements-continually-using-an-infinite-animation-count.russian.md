---
id: 587d78a8367417b2b2512ae3
title: Animate Elements Continually Using an Infinite Animation Count
challengeType: 0
videoUrl: https://scrimba.com/c/cVJDVfq
forumTopicId: 301041
localeTitle: Анимация элементов, постоянно использующих бесконечный подсчет анимации
---

## Description
<section id='description'>
Предыдущие проблемы касались использования некоторых свойств анимации и правила <code>@keyframes</code> . Другим свойством анимации является <code>animation-iteration-count</code> , который позволяет вам контролировать, сколько раз вы хотели бы прокручивать анимацию. Вот пример: <code>animation-iteration-count: 3;</code> В этом случае анимация остановится после запуска 3 раза, но можно сделать анимацию непрерывной, установив это значение в бесконечное.
</section>

## Instructions
<section id='instructions'>
Чтобы держать мяч подпрыгивая справа в непрерывном цикле, измените свойство <code>animation-iteration-count</code> на бесконечность.
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
