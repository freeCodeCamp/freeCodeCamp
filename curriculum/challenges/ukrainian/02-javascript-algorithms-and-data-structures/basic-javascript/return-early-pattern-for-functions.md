---
id: 56533eb9ac21ba0edf2244c4
title: Повернення початкового шаблона для функцій
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe39Sq'
forumTopicId: 18272
dashedName: return-early-pattern-for-functions
---

# --description--

Коли ви досягнули команди `return`, виконання поточної функції припиняється і об'єкт керування повертається до місця виклику.

**Наприклад**

```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```

Показане вище відобразить рядок `Hello` у консолі і поверне рядок `World`. Рядок `byebye` ніколи не відобразиться у консолі, тому що функція виходить з команди `return`.

# --instructions--

Модифікуйте функцію `abTest` і тому, якщо `a` або `b` дорівнюватиме менше `0`, функція відразу вийде зі значенням `undefined`.

**Hint**  
Remember that <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-uninitialized-variables" target="_blank" rel="noopener noreferrer nofollow"><code>undefined</code> is a keyword</a>, not a string.

# --hints--

`abTest(2, 2)` повинен повернути число

```js
assert(typeof abTest(2, 2) === 'number');
```

`abTest(2, 2)` повинен повернути `8`

```js
assert(abTest(2, 2) === 8);
```

`abTest(-2, 2)` повинен повернути `undefined`

```js
assert(abTest(-2, 2) === undefined);
```

`abTest(2, -2)` повинен повернути `undefined`

```js
assert(abTest(2, -2) === undefined);
```

`abTest(2, 8)` повинен повернути `18`

```js
assert(abTest(2, 8) === 18);
```

`abTest(3, 3)` повинен повернути `12`

```js
assert(abTest(3, 3) === 12);
```

`abTest(0, 0)` повинен повернути `0`

```js
assert(abTest(0, 0) === 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function abTest(a, b) {
  // Only change code below this line



  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
```

# --solutions--

```js
function abTest(a, b) {
  if(a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
```
