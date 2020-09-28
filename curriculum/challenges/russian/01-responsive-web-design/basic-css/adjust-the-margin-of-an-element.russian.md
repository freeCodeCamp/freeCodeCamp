---
id: bad87fee1348bd9aedf08822
title: Adjust the Margin of an Element
challengeType: 0
videoUrl: https://scrimba.com/c/cVJarHW
forumTopicId: 16654
localeTitle: Отрегулируйте маржу элемента
---

## Description
<section id='description'>
Элемент по <code>margin</code> контролирует объем пространства между элементом в <code>border</code> и окружающих элементами. Здесь мы видим, что синий ящик и красный ящик вложены в желтый квадрат. Обратите внимание, что красный ящик имеет больший <code>margin</code> чем синий квадрат, что делает его меньше. Когда вы увеличите <code>margin</code> синего <code>margin</code> , это увеличит расстояние между его границей и окружающими элементами.
</section>

## Instructions
<section id='instructions'>
Измените <code>margin</code> синего квадрата так, чтобы он был красным.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>blue-box</code> class should give elements <code>20px</code> of <code>margin</code>.
    testString: assert($(".blue-box").css("margin-top") === "20px");

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
    margin: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 10px;
  }
</style>
<h5 class="injected-text">margin</h5>

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
    margin: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

</section>
