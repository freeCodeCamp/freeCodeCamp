---
id: 56533eb9ac21ba0edf2244d1
title: Порівняння з Оператором Абсолютної Рівності
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87atr'
forumTopicId: 16790
dashedName: comparison-with-the-strict-equality-operator
---

# --description--

Абсолютна рівність (`===`) є аналогом оператора рівності (`==`). Однак, на відміну від оператора рівності, який намагається перетворити обидва значення в порівнянні зі звичайним типом, оператор абсолютної рівності не виконує перетворення типів.

Якщо значення, які перетворюються, мають різні типи, вони вважаються нерівними і оператор абсолютної рівності видасть помилку.

**Наприклад**

```js
3 ===  3  // true
3 === '3' // false
```

In the second example, `3` is a `Number` type and `'3'` is a `String` type.

# --instructions--

Use the strict equality operator in the `if` statement so the function will return the string `Equal` when `val` is strictly equal to `7`.

# --hints--

`testStrict(10)` should return the string `Not Equal`

```js
assert(testStrict(10) === 'Not Equal');
```

`testStrict(7)` should return the string `Equal`

```js
assert(testStrict(7) === 'Equal');
```

`testStrict("7")` should return the string `Not Equal`

```js
assert(testStrict('7') === 'Not Equal');
```

You should use the `===` operator

```js
assert(code.match(/(val\s*===\s*\d+)|(\d+\s*===\s*val)/g).length > 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function testStrict(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
```

# --solutions--

```js
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
```
