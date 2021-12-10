---
id: 587d7dab367417b2b2512b6e
title: Використовуйте кожен метод, щоб перевірити, чи кожний елемент у масиві відповідає критеріям
challengeType: 1
forumTopicId: 301312
dashedName: use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria
---

# --description--

Метод `every` працює з масивами, щоб перевірити, чи проходить елемент *every* певний тест. Якщо всі значення відповідають критеріям, то він повертає булеве значення `true`, якщо ж ні, тоді - `false`.

Наприклад, наступний код перевіряє чи кожен елемент в масиві `numbers` менший за 10:

```js
const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10;
});
```

В цьому випадку метод `every` поверне `false`.

# --instructions--

Використовуйте метод `every` всередині функції `checkPositive`, щоб перевірити, чи кожний елемент у `arr` додатній. Функція має повернути булеве значення.

# --hints--

Використовуйте у коді метод `every`.

```js
assert(code.match(/\.every/g));
```

`checkPositive([1, 2, 3, -4, 5])` має повернути `false`.

```js
assert.isFalse(checkPositive([1, 2, 3, -4, 5]));
```

`checkPositive([1, 2, 3, 4, 5])` має повернути `true`.

```js
assert.isTrue(checkPositive([1, 2, 3, 4, 5]));
```

`checkPositive([1, -2, 3, -4, 5])` має повернути `false`.

```js
assert.isFalse(checkPositive([1, -2, 3, -4, 5]));
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
  return arr.every(num => num > 0);
}
```
