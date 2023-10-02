---
id: 594d8d0ab97724821379b1e6
title: 平均/最頻値
challengeType: 1
forumTopicId: 302226
dashedName: averagesmode
---

# --description--

Write a function `mode` to find the value that appears most in an array.

データが空の場合は無視します。 最頻値が1つではない場合には注意が必要です。

一般的なデータの使用が不適切または不可能な場合は、可能であればベクトル(配列)を使用します。 指定されていない値型の使用が不適切または不可能な場合は、整数を使用します。

# --hints--

`mode` という関数です。

```js
assert(typeof mode === 'function');
```

`mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17])` は `[6]`になります。

```js
assert.deepEqual(mode(arr1), [6]);
```

`mode([1, 2, 4, 4, 1])` は `[1, 4]`になります。

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
