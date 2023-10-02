---
id: a24c1a4622e3c05097f71d67
title: 挿入位置
challengeType: 1
forumTopicId: 16094
dashedName: where-do-i-belong
---

# --description--

ソート後、配列 (最初の引数) の中で値 (2 番目の引数) を挿入すべきインデックスの最小値を返してください。 返される値は数値である必要があります。

たとえば、`getIndexToIns([1,2,3,4], 1.5)` は `1` を返す必要があります。値の 1.5 は `1` (インデックスは 0) より大きく、`2` (インデックスは 1) より小さいからです。

同様に、`getIndexToIns([20,3,5], 19)` は `2` を返します。配列をソートすると `[3,5,20]` となり、`19` は `20` (インデックスは 2) より小さく、`5` (インデックスは 1) より大きいからです。

# --hints--

`getIndexToIns([10, 20, 30, 40, 50], 35)` は `3` を返す必要があります。

```js
assert(getIndexToIns([10, 20, 30, 40, 50], 35) === 3);
```

`getIndexToIns([10, 20, 30, 40, 50], 35)` は数値を返す必要があります。

```js
assert(typeof getIndexToIns([10, 20, 30, 40, 50], 35) === 'number');
```

`getIndexToIns([10, 20, 30, 40, 50], 30)` は `2` を返す必要があります。

```js
assert(getIndexToIns([10, 20, 30, 40, 50], 30) === 2);
```

`getIndexToIns([10, 20, 30, 40, 50], 30)` は数値を返す必要があります。

```js
assert(typeof getIndexToIns([10, 20, 30, 40, 50], 30) === 'number');
```

`getIndexToIns([40, 60], 50)` は `1` を返す必要があります。

```js
assert(getIndexToIns([40, 60], 50) === 1);
```

`getIndexToIns([40, 60], 50)` は数値を返す必要があります。

```js
assert(typeof getIndexToIns([40, 60], 50) === 'number');
```

`getIndexToIns([3, 10, 5], 3)` は `0` を返す必要があります。

```js
assert(getIndexToIns([3, 10, 5], 3) === 0);
```

`getIndexToIns([3, 10, 5], 3)` は数値を返す必要があります。

```js
assert(typeof getIndexToIns([3, 10, 5], 3) === 'number');
```

`getIndexToIns([5, 3, 20, 3], 5)` は `2` を返す必要があります。

```js
assert(getIndexToIns([5, 3, 20, 3], 5) === 2);
```

`getIndexToIns([5, 3, 20, 3], 5)` は数値を返す必要があります。

```js
assert(typeof getIndexToIns([5, 3, 20, 3], 5) === 'number');
```

`getIndexToIns([2, 20, 10], 19)` は `2` を返す必要があります。

```js
assert(getIndexToIns([2, 20, 10], 19) === 2);
```

`getIndexToIns([2, 20, 10], 19)` は数値を返す必要があります。

```js
assert(typeof getIndexToIns([2, 20, 10], 19) === 'number');
```

`getIndexToIns([2, 5, 10], 15)` は `3` を返す必要があります。

```js
assert(getIndexToIns([2, 5, 10], 15) === 3);
```

`getIndexToIns([2, 5, 10], 15)` は数値を返す必要があります。

```js
assert(typeof getIndexToIns([2, 5, 10], 15) === 'number');
```

`getIndexToIns([], 1)` は `0` を返す必要があります。

```js
assert(getIndexToIns([], 1) === 0);
```

`getIndexToIns([], 1)` は数値を返す必要があります。

```js
assert(typeof getIndexToIns([], 1) === 'number');
```

# --seed--

## --seed-contents--

```js
function getIndexToIns(arr, num) {
  return num;
}

getIndexToIns([40, 60], 50);
```

# --solutions--

```js
function getIndexToIns(arr, num) {
  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }

  return arr.length;
}

getIndexToIns([40, 60], 50);
```
