---
id: 587d7b88367417b2b2512b45
title: 'Використання функцій вищого порядку (map, filter та reduce) для розв’язання складних задач'
challengeType: 1
forumTopicId: 301311
dashedName: use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
---

# --description--

Ви вже працювали із функціями вищого порядку, як-от `map()`, `filter()` та `reduce()`, і зараз ви застосуєте їх для складнішого завдання.

# --instructions--

Завершіть код для функції `squareList`, використовуючи будь-яку комбінацію `map()`, `filter()` та `reduce()`. Функція повинна повертати новий масив, який містить квадрати *лише* цілих натуральних чисел (десяткові числа не є цілими числами), коли до неї передається масив дійсних чисел. Приклад масиву дійсних чисел: `[-3, 4.8, 5, 3, -3.2]`.

**Примітка:** ваша функція не повинна використовувати цикли `for` чи `while`, або функцію `forEach()`.

# --hints--

`squareList` повинна бути функцією (`function`).

```js
assert.typeOf(squareList, 'function'),
  '<code>squareList</code> should be a <code>function</code>';
```

Ви не повинні використовувати `for`, `while` або `forEach`.

```js
assert(!code.match(/for|while|forEach/g));
```

Ви повинні використовувати `map`, `filter` або `reduce`.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/\.(map|filter|reduce)\(/g)
);
```

Функція повинна повертати `array`.

```js
assert(Array.isArray(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])));
```

`squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])` має повертати `[16, 1764, 36]`.

```js
assert.deepStrictEqual(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]), [
  16,
  1764,
  36
]);
```

`squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])` має повертати `[9, 100, 49]`.

```js
assert.deepStrictEqual(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]), [
  9,
  100,
  49
]);
```

# --seed--

## --seed-contents--

```js
const squareList = arr => {
  // Only change code below this line
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```

# --solutions--

```js
const squareList = arr => {
  const positiveIntegers = arr.filter(num => {
    return num >= 0 && Number.isInteger(num);
  });
  const squaredIntegers = positiveIntegers.map(num => {
    return num ** 2;
  });
  return squaredIntegers;
};
```
