---
id: cf1391c1c11feddfaeb4bdef
title: Create Decimal Numbers with JavaScript
challengeType: 1
videoUrl: ''
localeTitle: Создание десятичных чисел с помощью JavaScript
---

## Description
<section id="description"> Мы также можем хранить десятичные числа в переменных. Десятичные числа иногда называются <dfn>числами с плавающей запятой</dfn> или <dfn>поплавками</dfn> . <strong>Заметка</strong> <br> Не все реальные числа могут быть точно представлены в <dfn>плавающей точке</dfn> . Это может привести к ошибкам округления. <a href="https://en.wikipedia.org/wiki/Floating_point#Accuracy_problems" target="_blank">Подробности здесь</a> . </section>

## Instructions
<section id="instructions"> Создайте переменную <code>myDecimal</code> и дайте ей десятичное значение с дробной частью (например, <code>5.7</code> ). </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myDecimal</code> должен быть числом.
    testString: 'assert(typeof myDecimal === "number", "<code>myDecimal</code> should be a number.");'
  - text: <code>myDecimal</code> должен иметь десятичную точку
    testString: 'assert(myDecimal % 1 != 0, "<code>myDecimal</code> should have a decimal point"); '

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


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
