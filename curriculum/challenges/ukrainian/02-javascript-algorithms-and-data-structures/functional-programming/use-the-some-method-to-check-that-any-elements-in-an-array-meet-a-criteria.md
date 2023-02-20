---
id: 587d7dab367417b2b2512b6f
title: Використання методу some для перевірки будь-яких елементів на відповідність критеріям
challengeType: 1
forumTopicId: 301314
dashedName: use-the-some-method-to-check-that-any-elements-in-an-array-meet-a-criteria
---

# --description--

Метод `some` працює з масивами, щоб перевірити, чи *будь-який* елемент проходить певний тест. Він повертає булеве значення: `true`, якщо значення відповідає критеріям або `false`, якщо навпаки.

Наприклад, наступний код перевіряє, чи будь-який елемент в масиві `numbers` менший за 10:

```js
const numbers = [10, 50, 8, 220, 110, 11];

numbers.some(function(currentValue) {
  return currentValue < 10;
});
```

Метод `some` поверне `true`.

# --instructions--

Використайте метод `some` всередині функції `checkPositive`, щоб перевірити, чи будь-який елемент в `arr` додатній. Функція повинна повертати булеве значення.

# --hints--

Ваш код повинен використовувати метод `some`.

```js
assert(code.match(/\.some/g));
```

`checkPositive([1, 2, 3, -4, 5])` має повертати `true`.

```js
assert(checkPositive([1, 2, 3, -4, 5]));
```

`checkPositive([1, 2, 3, 4, 5])` має повертати `true`.

```js
assert(checkPositive([1, 2, 3, 4, 5]));
```

`checkPositive([-1, -2, -3, -4, -5])` має повертати `false`.

```js
assert(!checkPositive([-1, -2, -3, -4, -5]));
```

# --seed--

## --seed-contents--

```js
function checkPositive(arr) {
  // Only change code below this line


  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
```

# --solutions--

```js
function checkPositive(arr) {
  return arr.some(elem => elem > 0);
}
```
