---
id: cf1111c1c12feddfaeb1bdef
title: Generate Random Whole Numbers with JavaScript
challengeType: 1
videoUrl: https://scrimba.com/c/cRn6bfr
forumTopicId: 18186
localeTitle: Генерировать случайные целые числа с помощью JavaScript
---

## Description
<section id='description'>
Замечательно, что мы можем генерировать случайные десятичные числа, но это еще более полезно, если мы используем его для генерации случайных целых чисел. <ol><li> Используйте <code>Math.random()</code> для генерации случайного десятичного знака. </li><li> Умножьте это случайное число на <code>20</code> . </li><li> Используйте другую функцию, <code>Math.floor()</code> чтобы округлить число до его ближайшего целого числа. </li></ol> Помните, что <code>Math.random()</code> никогда не может полностью вернуть <code>1</code> и, поскольку мы округливаем, на самом деле получить <code>20</code> невозможно. Этот метод даст нам целое число от <code>0</code> до <code>19</code> . Соединяя все вместе, это выглядит как наш код: <code>Math.floor(Math.random() * 20);</code> Мы вызываем <code>Math.random()</code> , умножая результат на 20, затем передавая значение функции <code>Math.floor()</code> чтобы округлить значение до ближайшего целого числа.
</section>

## Instructions
<section id='instructions'>
Используйте этот метод для генерации и возврата случайного целого числа от <code>0</code> до <code>9</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The result of <code>randomWholeNum</code> should be a whole number.
    testString: assert(typeof randomWholeNum() === "number" && (function(){var r = randomWholeNum();return Math.floor(r) === r;})());
  - text: You should be using <code>Math.random</code> to generate a random number.
    testString: assert(code.match(/Math.random/g).length > 1);
  - text: You should have multiplied the result of <code>Math.random</code> by 10 to make it a number that is between zero and nine.
    testString: assert(code.match(/\s*?Math.random\s*?\(\s*?\)\s*?\*\s*?10[\D]\s*?/g) || code.match(/\s*?10\s*?\*\s*?Math.random\s*?\(\s*?\)\s*?/g));
  - text: You should use <code>Math.floor</code> to remove the decimal part of the number.
    testString: assert(code.match(/Math.floor/g).length > 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.random();
}

```

</div>

### After Tests
<div id='js-teardown'>

```js
(function(){return randomWholeNum();})();

```

</div>

</section>

## Solution
<section id='solution'>

```js
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
```

</section>
