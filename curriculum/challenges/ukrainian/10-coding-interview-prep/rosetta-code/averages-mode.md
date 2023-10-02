---
id: 594d8d0ab97724821379b1e6
title: Середні значення/Режим
challengeType: 1
forumTopicId: 302226
dashedName: averagesmode
---

# --description--

Write a function `mode` to find the value that appears most in an array.

Випадок, коли колекція є порожньою, можна ігнорувати. Необхідно бути обережним у випадку, коли режим не є унікальним.

Якщо недоцільно або неможливо підтримувати загальну колекцію, по можливості використовуйте вектор (масив). Якщо недоцільно або неможливо підтримувати невизначений тип значення, то використовуйте цілі числа.

# --hints--

`mode` має бути функцією.

```js
assert(typeof mode === 'function');
```

`mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17])` повинен дорівнювати `[6]`

```js
assert.deepEqual(mode(arr1), [6]);
```

`mode([1, 2, 4, 4, 1])` повинен дорівнювати `[1, 4]`.

```js
assert.deepEqual(mode(arr2).sort(), [1, 4]);
```

# --seed--

## --after-user-code--

```js
const arr1 = [1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17];
const arr2 = [1, 2, 4, 4, 1];
```

## --seed-contents--

```js
function mode(arr) {

  return true;
}
```

# --solutions--

```js
function mode(arr) {
  const counter = {};
  let result = [];
  let max = 0;
  // for (const i in arr) {
  arr.forEach(el => {
    if (!(el in counter)) {
      counter[el] = 0;
    }
    counter[el]++;

    if (counter[el] === max) {
      result.push(el);
    }
    else if (counter[el] > max) {
      max = counter[el];
      result = [el];
    }
  });
  return result;
}
```
