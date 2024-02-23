---
id: 5679ceb97cbaa8c51670a16b
title: Повернення булевих значень із функцій
challengeType: 1
videoUrl: 'https://scrimba.com/c/cp62qAQ'
forumTopicId: 18273
dashedName: returning-boolean-values-from-functions
---

# --description--

Як ви можете пригадати з <a href="/ukrainian/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator" target="_blank" rel="noopener noreferrer nofollow">порівняння з оператором «дорівнює»</a>, всі оператори порівняння повертають булеве значення `true` або `false`.

Іноді люди використовують інструкцію `if/else`, щоб виконати порівняння:

```js
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
```

Але існує кращий спосіб. Оскільки `===` повертає `true` або `false`, ми можемо повернути результат порівняння:

```js
function isEqual(a, b) {
  return a === b;
}
```

# --instructions--

Виправте функцію `isLess` так, щоб видалити інструкції `if/else`.

# --hints--

`isLess(10, 15)` має повертати `true`

```js
assert(isLess(10, 15) === true);
```

`isLess(15, 10)` має повертати `false`

```js
assert(isLess(15, 10) === false);
```

Ви не повинні використовувати інструкції `if` або `else`

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
