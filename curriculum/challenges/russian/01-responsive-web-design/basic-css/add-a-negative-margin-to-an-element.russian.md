---
id: bad87fee1348bd9aedf08823
title: Add a Negative Margin to an Element
challengeType: 0
guideUrl: 'https://russian.freecodecamp.org/guide/certificates/add-a-negative-margin-to-an-element'
videoUrl: ''
localeTitle: Добавить отрицательную маржу к элементу
---

## Description
<section id="description"> Элемент по <code>margin</code> контролирует объем пространства между элементом в <code>border</code> и окружающих элементами. Если вы установите элемент <code>margin</code> отрицательного значение, то элемент будет расти больше. </section>

## Instructions
<section id="instructions"> Попытайтесь установить <code>margin</code> на отрицательное значение, подобное значению для красного квадрата. Измените <code>margin</code> синего <code>-15px</code> на <code>-15px</code> , чтобы он заполнил всю горизонтальную ширину желтой рамки вокруг него. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш класс <code>blue-box</code> должен давать элементы <code>-15px</code> от <code>margin</code> .
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
