---
id: bad87fee1348bd9aedf08824
title: Add Different Padding to Each Side of an Element
challengeType: 0
videoUrl: https://scrimba.com/c/cB7mwUw
forumTopicId: 16634
localeTitle: Добавьте разные внутренние отступы к каждой стороне элемента
---

## Description
<section id='description'>
Иногда вам нужно настроить элемент таким образом, чтобы на каждой его стороне было различное количество внутренних отступов - <code>padding</code> . CSS позволяет вам управлять <code>padding</code> всех четырех отдельных сторон элемента с помощью свойств <code>padding-top</code> , <code>padding-right</code> , <code>padding-bottom</code> и <code>padding-left</code> .
</section>

## Instructions
<section id='instructions'>
Задайте синему квадрату <code>padding</code> <code>40px</code> на его верхней и левой стороне, но только <code>20px</code> на его нижней и правой стороне.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>blue-box</code> class should give the top of the elements <code>40px</code> of <code>padding</code>.
    testString: assert($(".blue-box").css("padding-top") === "40px");
  - text: Your <code>blue-box</code> class should give the right of the elements <code>20px</code> of <code>padding</code>.
    testString: assert($(".blue-box").css("padding-right") === "20px");
  - text: Your <code>blue-box</code> class should give the bottom of the elements <code>20px</code> of <code>padding</code>.
    testString: assert($(".blue-box").css("padding-bottom") === "20px");
  - text: Your <code>blue-box</code> class should give the left of the elements <code>40px</code> of <code>padding</code>.
    testString: assert($(".blue-box").css("padding-left") === "40px");

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
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
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
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

</section>
