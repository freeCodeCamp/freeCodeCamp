---
id: bad87fee1348bd9aedf08823
title: Add a Negative Margin to an Element
challengeType: 0
guideUrl: 'https://russian.freecodecamp.org/guide/certificates/add-a-negative-margin-to-an-element'
videoUrl: ''
localeTitle: Добавьте отрицательный отступ элементу
---

## Description
<section id="description"> Свойство <code>margin</code> элемента контролирует количество места между границей <code>border</code> элемента и окружающими его элементами. Если вы установите отступам <code>margin</code> отрицательное значение, то элемент будет возрастать в размерах. </section>

## Instructions
<section id="instructions"> Попробуйте установить значение <code>margin</code> на отрицательное значение, как для красного квадрата. Измените значение <code>margin</code> синего квадрата на <code>-15px</code> так, чтобы он заполнил всю ширину желтого квадрата вокруг него. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш класс <code>blue-box</code> должен задавать значение <code>-15px</code> для <code>margin</code> .
    testString: 'assert($(".blue-box").css("margin-top") === "-15px", "Your <code>blue-box</code> class should give elements <code>-15px</code> of <code>margin</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
    margin: -15px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }
</style>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
