---
id: 587d78a8367417b2b2512ae5
title: Animate Elements at Variable Rates
challengeType: 0
videoUrl: https://scrimba.com/c/cZ89WA4
forumTopicId: 301040
localeTitle: Анимационные элементы по переменным ценам
---

## Description
<section id='description'>
Существует множество способов изменить скорость анимации похожих анимированных элементов. До сих пор это было достигнуто путем применения свойства <code>animation-iteration-count</code> и установки правил <code>@keyframes</code> . Чтобы проиллюстрировать, анимация справа состоит из двух «звезд», каждая из которых уменьшает размер и непрозрачность на 20% в правиле <code>@keyframes</code> , что создает анимацию мерцания. Вы можете изменить правило <code>@keyframes</code> для одного из элементов, чтобы звезды мерцали с разной скоростью.
</section>

## Instructions
<section id='instructions'>
Измените коэффициент анимации для элемента с именем класса <code>star-1</code> , изменив его правило <code>@keyframes</code> на 50%.
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
