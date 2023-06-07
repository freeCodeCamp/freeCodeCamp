---
id: 5a23c84252665b21eecc8042
title: 平方和
challengeType: 1
forumTopicId: 302334
dashedName: sum-of-squares
---

# --description--

整数の配列の平方和を求める関数を記述してください。

# --hints--

`sumsq` は関数とします。

```js
assert(typeof sumsq == 'function');
```

`sumsq([1, 2, 3, 4, 5])` は数値を返す必要があります。

```js
assert(typeof sumsq([1, 2, 3, 4, 5]) == 'number');
```

`sumsq([1, 2, 3, 4, 5])` は `55` を返す必要があります。

```js
assert.equal(sumsq([1, 2, 3, 4, 5]), 55);
```

`sumsq([25, 32, 12, 7, 20])` は `2242` を返す必要があります。

```js
assert.equal(sumsq([25, 32, 12, 7, 20]), 2242);
```

`sumsq([38, 45, 35, 8, 13])` は `4927` を返す必要があります。

```js
assert.equal(sumsq([38, 45, 35, 8, 13]), 4927);
```

`sumsq([43, 36, 20, 34, 24])` は `5277` を返す必要があります。

```js
assert.equal(sumsq([43, 36, 20, 34, 24]), 5277);
```

`sumsq([12, 33, 26, 18, 1, 16, 3])` は `2499` を返す必要があります。

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
