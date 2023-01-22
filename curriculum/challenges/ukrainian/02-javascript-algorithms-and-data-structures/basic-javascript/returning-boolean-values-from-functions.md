---
id: 5679ceb97cbaa8c51670a16b
title: Повернення логічних значень з функцій
challengeType: 1
videoUrl: 'https://scrimba.com/c/cp62qAQ'
forumTopicId: 18273
dashedName: returning-boolean-values-from-functions
---

# --description--

You may recall from <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator" target="_blank" rel="noopener noreferrer nofollow">Comparison with the Equality Operator</a> that all comparison operators return a boolean `true` or `false` value.

Інколи люди використовують `if/else` команду для того, щоб зробити порівняння на зразок цього:

```js
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
```

Але є кращий спосіб це зробити. Оскільки `===` повертає `true` або `false`, ми можемо повернути результат порівняння:

```js
function isEqual(a, b) {
  return a === b;
}
```

# --instructions--

Виправте функцію `isLess` для того, щоб видалити `if/else` команду.

# --hints--

`isLess(10, 15)` повинен повернути `true`

```js
assert(isLess(10, 15) === true);
```

`isLess(15, 10)` повинен повернути `false`

```js
assert(isLess(15, 10) === false);
```

Вам не слід використовувати будь-які `if` чи `else` команди

```js
assert(!/if|else/g.test(code));
```

# --seed--

## --seed-contents--

```js
function isLess(a, b) {
  // Only change code below this line
  if (a < b) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

isLess(10, 15);
```

# --solutions--

```js
function isLess(a, b) {
  return a < b;
}
```
