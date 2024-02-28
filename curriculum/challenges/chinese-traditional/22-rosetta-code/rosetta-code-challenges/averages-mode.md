---
id: 594d8d0ab97724821379b1e6
title: 平均值模式
challengeType: 1
forumTopicId: 302226
dashedName: averagesmode
---

# --description--

Write a function `mode` to find the value that appears most in an array.

可以忽略集合爲空的情況。 必須小心處理模式不唯一的情況。

如果不適合或不可能支持常規集合，請儘可能使用向量（數組）。 如果不適合或不可能支持未指定的值類型，請使用整數。

# --hints--

`mode` should be a function.

```js
assert(typeof mode === 'function');
```

`mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17])` should equal `[6]`

```js
assert.deepEqual(mode(arr1), [6]);
```

`mode([1, 2, 4, 4, 1])` should equal `[1, 4]`.

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
