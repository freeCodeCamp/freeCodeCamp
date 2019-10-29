---
id: bad87fee1348bd9aedf08823
title: Add a Negative Margin to an Element
challengeType: 0
videoUrl: https://scrimba.com/c/cnpyGs3
forumTopicId: 16166
localeTitle: Добавить отрицательные поля к элементу
---

## Description
<section id='description'>
Значение <code>margin</code> (поле) элемента контролирует объем пространства между значением <code>border</code> (границей) элемента и окружающими элементами. Если вы установите значение <code>margin</code> отрицательным, то размер элемента увеличится.
</section>

## Instructions
<section id='instructions'>
Попытайтесь установить значение <code>margin</code> отрицательным, как у красного окна. Установите <code>margin</code> синего окна равным <code>-15px</code>, чтобы он заполнил всю горизонтальную ширину желтой рамки вокруг него.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>blue-box</code> class should give elements <code>-15px</code> of <code>margin</code>.
    testString: assert($(".blue-box").css("margin-top") === "-15px");

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
    margin-top: -15px;
  }
</style>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

</section>
