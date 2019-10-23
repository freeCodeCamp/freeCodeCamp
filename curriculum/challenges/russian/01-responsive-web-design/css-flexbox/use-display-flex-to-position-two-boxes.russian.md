---
id: 587d78ab367417b2b2512af0
title: 'Use display: flex to Position Two Boxes'
challengeType: 0
videoUrl: https://scrimba.com/p/pVaDAv/cgz3QS7
forumTopicId: 301105
localeTitle: 'Используйте display: flex для позиционирования двух прямоугольников'
---

## Description
<section id='description'>
Задачи этого раздела призваны научить использовать CSS для "гибкого" позиционирования элементов. Вначале будет объяснена теорию. Затем нужно будет практически применить концепцию flexbox для оформления простого компонента твита. Применение CSS свойства <code>display: flex;</code> к элементу позволяет затем использовать другие свойства flex для создания отзывчивого дизайна страницы.
</section>

## Instructions
<section id='instructions'>
Добавьте CSS свойство <code>display</code> элементу <code>#box-container</code> и установите его значение равным flex.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>#box-container</code> should have the <code>display</code> property set to a value of flex.
    testString: assert($('#box-container').css('display') == 'flex');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    height: 500px;

  }

  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  #box-container {
    height: 500px;
    display: flex;
  }

  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

</section>
