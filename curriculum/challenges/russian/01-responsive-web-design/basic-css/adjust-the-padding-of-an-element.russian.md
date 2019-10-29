---
id: bad88fee1348bd9aedf08825
title: Adjust the Padding of an Element
challengeType: 0
videoUrl: https://scrimba.com/c/cED8ZC2
forumTopicId: 301083
localeTitle: Отрегулируйте прокладку элемента
---

## Description
<section id='description'>
Теперь давайте немного отложим наше приложение для фотоаппарата Cat, и узнаем больше о стилизации HTML. Возможно, вы это уже заметили, но все элементы HTML по существу представляют собой небольшие прямоугольники. Три важных свойства управляют пространством, которое окружает каждый элемент HTML: <code>padding</code> , <code>margin</code> и <code>border</code> . Элемент в <code>padding</code> контролирует объем пространства между содержимым элемента и его <code>border</code> . Здесь мы видим, что синий ящик и красный ящик вложены в желтый квадрат. Обратите внимание, что красное поле имеет больше <code>padding</code> чем синий. При увеличении синей коробке в <code>padding</code> , это увеличит расстояние ( <code>padding</code> ) между текстом и границей вокруг него.
</section>

## Instructions
<section id='instructions'>
Измените <code>padding</code> синего квадрата в соответствии с вашим красным полем.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>blue-box</code> class should give elements <code>20px</code> of <code>padding</code>.
    testString: assert($(".blue-box").css("padding-top") === "20px");

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
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 10px;
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
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

</section>
