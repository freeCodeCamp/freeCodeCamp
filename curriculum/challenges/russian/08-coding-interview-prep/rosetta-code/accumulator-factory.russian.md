---
title: Accumulator factory
id: 594810f028c0303b75339ace
challengeType: 5
videoUrl: ''
localeTitle: Аккумуляторный завод
---

## Description
<section id="description"><p> Создайте функцию, которая принимает один (числовой) аргумент и возвращает другую функцию, которая является аккумулятором. Возвращенная функция аккумулятора, в свою очередь, также принимает один числовой аргумент и возвращает сумму всех числовых значений, переданных до этого аккумулятора (включая начальное значение, переданное при создании аккумулятора). </p><p> Правила: </p><p> Не используйте глобальные переменные. </p><p> Подсказка: </p><p> Закрытие сохраняет внешнее состояние. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>accumulator</code> - это функция.
    testString: 'assert(typeof accumulator === "function", "<code>accumulator</code> is a function.");'
  - text: <code>accumulator(0)</code> должен возвращать функцию.
    testString: 'assert(typeof accumulator(0) === "function", "<code>accumulator(0)</code> should return a function.");'
  - text: <code>accumulator(0)(2)</code> должен вернуть номер.
    testString: 'assert(typeof accumulator(0)(2) === "number", "<code>accumulator(0)(2)</code> should return a number.");'
  - text: 'Передача значений 3, -4, 1.5 и 5 должна возвращать 5.5.'
    testString: 'assert(testFn(5) === 5.5, "Passing in the values 3, -4, 1.5, and 5 should return 5.5.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function accumulator (sum) {
  // Good luck!
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
