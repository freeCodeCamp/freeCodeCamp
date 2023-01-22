---
id: 587d7dab367417b2b2512b6f
title: Використовуйте метод some, щоб перевірити, чи будь-які елементи в масиві відповідають критеріям
challengeType: 1
forumTopicId: 301314
dashedName: use-the-some-method-to-check-that-any-elements-in-an-array-meet-a-criteria
---

# --description--

Метод `some` працює з масивами, щоб перевірити, чи проходить елемент *any* певний тест. Якщо будь-яке зі значень відповідає критеріям, то він повертає булеве значення `true`, якщо ж ні, тоді - `false`.

Наприклад, наступний код перевіряє чи будь-який елемент в масиві `numbers` менший за 10:

```js
const numbers = [10, 50, 8, 220, 110, 11];

numbers.some(function(currentValue) {
  return currentValue < 10;
});
```

Метод `some` поверне `true`.

# --instructions--

Використовуйте метод `some` всередині функції `checkPositive`, щоб перевірити, чи будь-який елемент у `arr` додатній. Функція повинна повертати булеве значення.

# --hints--

Ваш код повинен використовувати метод `some`.

```js
assert(code.match(/\.some/g));
```

`checkPositive([1, 2, 3, -4, 5])` повинна повертати `true`.

```js
assert(checkPositive([1, 2, 3, -4, 5]));
```

`checkPositive([1, 2, 3, 4, 5])` повинна повертати `true`.

```js
assert(checkPositive([1, 2, 3, 4, 5]));
```

`checkPositive([-1, -2, -3, -4, -5])` повинна повертати `false`.

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
