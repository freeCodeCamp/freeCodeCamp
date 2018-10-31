---
id: bad87fee1348bd9aedf08826
title: Use Clockwise Notation to Specify the Padding of an Element
challengeType: 0
videoUrl: ''
localeTitle: Использовать по часовой стрелке для указания заполнения элемента
---

## Description
<section id="description"> Вместо того, чтобы отдельно указывать свойства <code>padding-top</code> , <code>padding-right</code> , <code>padding-bottom</code> и <code>padding-left</code> , вы можете указать их все в одной строке, например: <code>padding: 10px 20px 10px 20px;</code> Эти четыре значения работают как часы: верх, правый, нижний, левый и будут давать то же самое, что и при использовании спецификаций дополнений для конкретной стороны. </section>

## Instructions
<section id="instructions"> Используйте «По часовой стрелке», чтобы присвоить классу «.blue-box» <code>padding</code> <code>40px</code> на верхней и левой стороне, но только 20 <code>20px</code> на нижней и правой стороне. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш <code>blue-box</code> класс должен дать верхнюю часть элементов <code>40px</code> из <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-top") === "40px", "Your <code>blue-box</code> class should give the top of elements <code>40px</code> of <code>padding</code>.");'
  - text: Ваш класс с <code>blue-box</code> должен давать право на элементы <code>20px</code> <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-right") === "20px", "Your <code>blue-box</code> class should give the right of elements <code>20px</code> of <code>padding</code>.");'
  - text: Ваш класс <code>blue-box</code> должен дать основание элементов <code>20px</code> <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-bottom") === "20px", "Your <code>blue-box</code> class should give the bottom of elements <code>20px</code> of <code>padding</code>.");'
  - text: Ваш <code>blue-box</code> класс должен дать слева от элементов <code>40px</code> из <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-left") === "40px", "Your <code>blue-box</code> class should give the left of elements <code>40px</code> of <code>padding</code>.");'
  - text: 'Вы должны использовать обозначение по часовой стрелке, чтобы установить заполнение класса <code>blue-box</code> .'
    testString: 'assert(!/padding-top|padding-right|padding-bottom|padding-left/.test(code), "You should use the clockwise notation to set the padding of <code>blue-box</code> class.");'

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
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px 40px 20px 40px;
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

```js
// solution required
```
</section>
