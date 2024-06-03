---
id: 5a23c84252665b21eecc8042
title: 平方和
challengeType: 1
forumTopicId: 302334
dashedName: sum-of-squares
---

# --description--

Write a function to find the sum of squares of an array of integers.

# --hints--

`sumsq` 應該是一個函數。

```js
assert(typeof sumsq == 'function');
```

`sumsq([1, 2, 3, 4, 5])` 應該返回一個數字。

```js
assert(typeof sumsq([1, 2, 3, 4, 5]) == 'number');
```

`sumsq([1, 2, 3, 4, 5])` 應該返回 `55`。

```js
assert.equal(sumsq([1, 2, 3, 4, 5]), 55);
```

`sumsq([25, 32, 12, 7, 20])` 應該返回 `2242`。

```js
assert.equal(sumsq([25, 32, 12, 7, 20]), 2242);
```

`sumsq([38, 45, 35, 8, 13])` 應該返回 `4927`。

```js
assert.equal(sumsq([38, 45, 35, 8, 13]), 4927);
```

`sumsq([43, 36, 20, 34, 24])` 應該返回 `5277`。

```js
assert.equal(sumsq([43, 36, 20, 34, 24]), 5277);
```

`sumsq([12, 33, 26, 18, 1, 16, 3])` 應該返回 `2499`。

```js
assert.equal(sumsq([12, 33, 26, 18, 1, 16, 3]), 2499);
```

# --seed--

## --seed-contents--

```js
function sumsq(array) {

}
```

# --solutions--

```js
function sumsq(array) {
  var sum = 0;
  var i, iLen;

  for (i = 0, iLen = array.length; i < iLen; i++) {
    sum += array[i] * array[i];
  }
  return sum;
}
```
