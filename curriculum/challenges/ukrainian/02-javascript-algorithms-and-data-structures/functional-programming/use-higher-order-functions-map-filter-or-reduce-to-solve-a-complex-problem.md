---
id: 587d7b88367417b2b2512b45
title: 'Використовуйте функції вищого порядку map, filter або reduce для розв''язання складних проблем'
challengeType: 1
forumTopicId: 301311
dashedName: use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
---

# --description--

Тепер, коли ви розв'язали кілька проблем, використовуючи такі функції вищого порядку, як: `map()`, `filter()`, та `reduce()`, ви можете застосовувати їх для виконання складнішого завдання.

# --instructions--

Завершіть код для функції `squareList` за допомогою комбінації `map()`, `filter()`, і `reduce()`. Функція має повернути новий масив, який містить квадрати *only* цілих натуральних чисел (десяткові числа не є цілими числами), коли до неї передається масив дійсних чисел. Приклад масиву дійсних чисел - `[-3, 4.8, 5, 3, -3.2]`.

**Примітка:** Ваша функція не повинна використовувати будь-які цикли `for` або `while`, або функцію `forEach()`.

# --hints--

`squareList` має бути `function`.

```js
assert.typeOf(squareList, 'function'),
  '<code>squareList</code> should be a <code>function</code>';
```

Не слід використовувати `for`, `while` та `forEach`.

```js
assert(!code.match(/for|while|forEach/g));
```

Слід використовувати `map`, `filter` або `reduce`.

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

`squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])` повинна повертати `[16, 1764, 36]`.

```js
assert.deepStrictEqual(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]), [
  16,
  1764,
  36
]);
```

`squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])` повинна повертати `[9, 100, 49]`.

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
