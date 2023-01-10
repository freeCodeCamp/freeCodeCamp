---
id: a24c1a4622e3c05097f71d67
title: 找出元素在排序后数组中的索引
challengeType: 1
forumTopicId: 16094
dashedName: where-do-i-belong
---

# --description--

数组（第一个参数）在排序后，将一个值（第二个参数）插入该数组，并使数组保持有序。返回这个新插入元素的最小索引值。 返回值应为一个数字。

例如，`getIndexToIns([1,2,3,4], 1.5)` 应该返回 `1` 因为1.5 大于 `1`（索引为 0）且小于 `2`（索引为 1）。

同样地，`getIndexToIns([20,3,5], 19)` 应该返回 `2`。 因为数组排序后会变成 `[3,5,20]`，而 `19` 小于 `20`（索引为 2）且大于 `5`（索引为 1）。

# --hints--

`getIndexToIns([10, 20, 30, 40, 50], 35)` 应返回 `3`。

```js
assert(getIndexToIns([10, 20, 30, 40, 50], 35) === 3);
```

`getIndexToIns([10, 20, 30, 40, 50], 35)` 应返回一个数字。

```js
assert(typeof getIndexToIns([10, 20, 30, 40, 50], 35) === 'number');
```

`getIndexToIns([10, 20, 30, 40, 50], 30)` 应返回 `2`。

```js
assert(getIndexToIns([10, 20, 30, 40, 50], 30) === 2);
```

`getIndexToIns([10, 20, 30, 40, 50], 30)` 应返回一个数字。

```js
assert(typeof getIndexToIns([10, 20, 30, 40, 50], 30) === 'number');
```

`getIndexToIns([40, 60], 50)` 应返回 `1`。

```js
assert(getIndexToIns([40, 60], 50) === 1);
```

`getIndexToIns([40, 60], 50)` 应返回一个数字。

```js
assert(typeof getIndexToIns([40, 60], 50) === 'number');
```

`getIndexToIns([3, 10, 5], 3)` 应返回 `0`。

```js
assert(getIndexToIns([3, 10, 5], 3) === 0);
```

`getIndexToIns([3, 10, 5], 3)` 应返回一个数字。

```js
assert(typeof getIndexToIns([3, 10, 5], 3) === 'number');
```

`getIndexToIns([5, 3, 20, 3], 5)` 应返回 `2`。

```js
assert(getIndexToIns([5, 3, 20, 3], 5) === 2);
```

`getIndexToIns([5, 3, 20, 3], 5)` 应返回一个数字。

```js
assert(typeof getIndexToIns([5, 3, 20, 3], 5) === 'number');
```

`getIndexToIns([2, 20, 10], 19)` 应返回 `2`。

```js
assert(getIndexToIns([2, 20, 10], 19) === 2);
```

`getIndexToIns([2, 20, 10], 19)` 应返回一个数字。

```js
assert(typeof getIndexToIns([2, 20, 10], 19) === 'number');
```

`getIndexToIns([2, 5, 10], 15)` 应返回 `3`。

```js
assert(getIndexToIns([2, 5, 10], 15) === 3);
```

`getIndexToIns([2, 5, 10], 15)` 应返回一个数字。

```js
assert(typeof getIndexToIns([2, 5, 10], 15) === 'number');
```

`getIndexToIns([], 1)`应该返回 `0`。

```js
assert(getIndexToIns([], 1) === 0);
```

`getIndexToIns([], 1)` 应返回一个数字。

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
