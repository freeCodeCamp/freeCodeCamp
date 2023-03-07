---
id: 56533eb9ac21ba0edf2244c4
title: Повернення початкового шаблону функцій
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe39Sq'
forumTopicId: 18272
dashedName: return-early-pattern-for-functions
---

# --description--

Коли досягається інструкція `return`, виконання поточної функції припиняється, а керування повертається до місця, де було викликано функцію.

**Приклад**

```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```

Вищеподане покаже рядок `Hello` на консолі та поверне рядок `World`. Рядок `byebye` ніколи не зобразиться на консолі, оскільки функція виходить з інструкції `return`.

# --instructions--

Змініть функцію `abTest` таким чином, що коли `a` або `b` буде менше за `0`, функція одразу вийде зі значенням `undefined`.

**Підказка**  
Пам’ятайте, що <a href="https://www.freecodecamp.org/ukrainian/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-uninitialized-variables" target="_blank" rel="noopener noreferrer nofollow"><code>undefined</code> є ключовим словом</a>, а не рядком.

# --hints--

`abTest(2, 2)` має повертати число

```js
assert(typeof abTest(2, 2) === 'number');
```

`abTest(2, 2)` має повертати `8`

```js
assert(abTest(2, 2) === 8);
```

`abTest(-2, 2)` має повертати `undefined`

```js
assert(abTest(-2, 2) === undefined);
```

`abTest(2, -2)` має повертати `undefined`

```js
assert(abTest(2, -2) === undefined);
```

`abTest(2, 8)` має повертати `18`

```js
assert(abTest(2, 8) === 18);
```

`abTest(3, 3)` має повертати `12`

```js
assert(abTest(3, 3) === 12);
```

`abTest(0, 0)` має повертати `0`

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
