---
title: Happy numbers
id: 594810f028c0303b75339ad1
challengeType: 5
videoUrl: ''
localeTitle: Счастливые номера
---

## Description
<section id="description"><p> Счастливое число определяется следующим процессом: </p><p> Начиная с любого положительного целого числа, замените число на сумму квадратов его цифр и повторите процесс до тех пор, пока число не будет равно 1 (где оно останется), или оно бесконечно завершается в цикле, который не включает в себя 1. Эти цифры для которых этот процесс заканчивается на 1, являются счастливыми номерами, а те, которые не заканчиваются на 1, - это несчастливые цифры. </p><p> Реализуйте функцию, которая возвращает true, если число счастливое, или false, если нет. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>happy</code> функция.
    testString: 'assert(typeof happy === "function", "<code>happy</code> is a function.");'
  - text: <code>happy(1)</code> должен возвращать логическое значение.
    testString: 'assert(typeof happy(1) === "boolean", "<code>happy(1)</code> should return a boolean.");'
  - text: <code>happy(1)</code> должен возвращать истину.
    testString: 'assert(happy(1), "<code>happy(1)</code> should return true.");'
  - text: <code>happy(2)</code> должен возвращать false.
    testString: 'assert(!happy(2), "<code>happy(2)</code> should return false.");'
  - text: <code>happy(7)</code> должен вернуться к истине.
    testString: 'assert(happy(7), "<code>happy(7)</code> should return true.");'
  - text: <code>happy(10)</code> должен вернуться к истине.
    testString: 'assert(happy(10), "<code>happy(10)</code> should return true.");'
  - text: <code>happy(13)</code> должен вернуться к истине.
    testString: 'assert(happy(13), "<code>happy(13)</code> should return true.");'
  - text: <code>happy(19)</code> должен вернуться к истине.
    testString: 'assert(happy(19), "<code>happy(19)</code> should return true.");'
  - text: <code>happy(23)</code> должен вернуться к истине.
    testString: 'assert(happy(23), "<code>happy(23)</code> should return true.");'
  - text: <code>happy(28)</code> должен вернуться к истине.
    testString: 'assert(happy(28), "<code>happy(28)</code> should return true.");'
  - text: <code>happy(31)</code> должен вернуться к истине.
    testString: 'assert(happy(31), "<code>happy(31)</code> should return true.");'
  - text: '<code>happy(32)</code> должен возвращать true :.'
    testString: 'assert(happy(32), "<code>happy(32)</code> should return true:.");'
  - text: <code>happy(33)</code> должен вернуть ложь.
    testString: 'assert(!happy(33), "<code>happy(33)</code> should return false.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function happy (number) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
