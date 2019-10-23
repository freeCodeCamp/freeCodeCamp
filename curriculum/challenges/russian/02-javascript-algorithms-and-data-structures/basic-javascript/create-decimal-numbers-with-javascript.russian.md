---
id: cf1391c1c11feddfaeb4bdef
title: Create Decimal Numbers with JavaScript
challengeType: 1
videoUrl: https://scrimba.com/c/ca8GEuW
forumTopicId: 16826
localeTitle: Создание десятичных чисел с помощью JavaScript
---

## Description
<section id='description'>
Мы также можем хранить десятичные числа в переменных. Десятичные числа иногда называются <dfn>числами с плавающей запятой</dfn> или <dfn>поплавками</dfn> . <strong>Заметка</strong> <br> Не все реальные числа могут быть точно представлены в <dfn>плавающей точке</dfn> . Это может привести к ошибкам округления. <a href="https://en.wikipedia.org/wiki/Floating_point#Accuracy_problems" target="_blank">Подробности здесь</a> .
</section>

## Instructions
<section id='instructions'>
Создайте переменную <code>myDecimal</code> и дайте ей десятичное значение с дробной частью (например, <code>5.7</code> ).
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myDecimal</code> should be a number.
    testString: assert(typeof myDecimal === "number");
  - text: <code>myDecimal</code> should have a decimal point
    testString: assert(myDecimal % 1 != 0);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var ourDecimal = 5.7;

// Only change code below this line

```

</div>

### After Tests
<div id='js-teardown'>

```js
(function(){if(typeof myDecimal !== "undefined"){return myDecimal;}})();

```

</div>

</section>

## Solution
<section id='solution'>

```js
var myDecimal = 9.9;
```

</section>
