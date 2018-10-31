---
title: Department Numbers
id: 59f40b17e79dbf1ab720ed7a
challengeType: 5
videoUrl: ''
localeTitle: Номера отделений
---

## Description
<section id="description"><p> Существует высоко организованный город, который решил присвоить номер каждому из своих отделов: </p> Отдел полиции Отдел санитарии Отдел пожарной охраны <p> Каждый отдел может иметь число от 1 до 7 (включительно). </p><p> Три номера отделов должны быть уникальными (отличными друг от друга) и должны содержать до 12. </p><p> Начальник полиции не любит странные цифры и хочет иметь четное число для своего отдела. </p> Задача: <p> Напишите программу, которая выводит все допустимые комбинации: </p><p> [2, 3, 7] </p><p> [2, 4, 6] </p><p> [2, 6, 4] </p><p> [2, 7, 3] </p><p> [4, 1, 7] </p><p> [4, 2, 6] </p><p> [4, 3, 5] </p><p> [4, 5, 3] </p><p> [4, 6, 2] </p><p> [4, 7, 1] </p><p> [6, 1, 5] </p><p> [6, 2, 4] </p><p> [6, 4, 2] </p><p> [6, 5, 1] </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>combinations</code> должны быть функцией.
    testString: 'assert(typeof combinations === "function", "<code>combinations</code> should be a function.");'
  - text: '<code>combinations([1, 2, 3], 6)</code> должны возвращать массив.'
    testString: 'assert(Array.isArray(combinations([1, 2, 3], 6)), "<code>combinations([1, 2, 3], 6)</code> should return an Array.");'
  - text: '<code>combinations([1, 2, 3, 4, 5, 6, 7], 12)</code> должны возвращать массив длиной 14.'
    testString: 'assert(combinations(nums, total).length === len, "<code>combinations([1, 2, 3, 4, 5, 6, 7], 12)</code> should return an array of length 14.");'
  - text: '<code>combinations([1, 2, 3, 4, 5, 6, 7], 12)</code> должны возвращать все допустимые комбинации.'
    testString: 'assert.deepEqual(combinations(nums, total), result, "<code>combinations([1, 2, 3, 4, 5, 6, 7], 12)</code> should return all valid combinations.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function combinations (possibleNumbers, total) {
  // Good luck!
  return true;
}

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
