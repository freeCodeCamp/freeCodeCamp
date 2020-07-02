---
id: a6e40f1041b06c996f7b2406
title: Finders Keepers
isRequired: true
challengeType: 5
forumTopicId: 16016
localeTitle: Finders Keepers
---

## Description
<section id='description'>
Создайте функцию, которая просматривает массив (первый аргумент) и возвращает первый элемент в массиве, который проходит тест истины (второй аргумент). Если ни один элемент не проходит тест, возвращайте значение undefined. Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })</code> should return 8.
    testString: assert.strictEqual(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }), 8);
  - text: <code>findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })</code> should return undefined.
    testString: assert.strictEqual(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }), undefined);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function findElement(arr, func) {
  return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```

</section>
