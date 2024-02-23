---
id: a24c1a4622e3c05097f71d67
title: أين انتمي
challengeType: 1
forumTopicId: 16094
dashedName: where-do-i-belong
---

# --description--

انتج أدنى الترتيب حيث إدراج قيمته (الحَجَّة الثانية) في القائمة (الحَجَّة الأولى) بمجرد ترتيبها. القيمة المنتجة يجب أن تكون رقما.

على سبيل المثال، `getIndexToIns([1,2,3,4], 1.5)` يجب أن ينتج `1` لأنه أكبر من `1` (الترتيب 0)، ولكن أقل من `2` (الترتيب 1).

كذلك، `getIndexToIns([20,3,5], 19)` يجب أن ينتج `2` لأنه بمجرد ترتيب القائمة سوف تبدو مثل `[3,5,20]`, و `19` هي أقل من `20` (الترتيب 2) وأكثر من `5` (الترتيب 1).

# --hints--

`getIndexToIns([10, 20, 30, 40, 50], 35)` يجب أن ينتج `3`.

```js
assert(getIndexToIns([10, 20, 30, 40, 50], 35) === 3);
```

`getIndexToIns([10, 20, 30, 40, 50], 35)` يجب أن ينتج رَقَم.

```js
assert(typeof getIndexToIns([10, 20, 30, 40, 50], 35) === 'number');
```

`getIndexToIns([10, 20, 30, 40, 50], 30)` يجب ينتج `2`.

```js
assert(getIndexToIns([10, 20, 30, 40, 50], 30) === 2);
```

`getIndexToIns([10, 20, 30, 40, 50], 30)` يجب أن ينتج رَقَم.

```js
assert(typeof getIndexToIns([10, 20, 30, 40, 50], 30) === 'number');
```

`getIndexToIns([40, 60], 50)` يجب أن ينتج `1`.

```js
assert(getIndexToIns([40, 60], 50) === 1);
```

`getIndexToIns([40, 60], 50)` يجب أن ينتج رَقَم.

```js
assert(typeof getIndexToIns([40, 60], 50) === 'number');
```

`getIndexToIns([3, 10, 5], 3)` يجب أن ينتج `0`.

```js
assert(getIndexToIns([3, 10, 5], 3) === 0);
```

`getIndexToIns([3, 10, 5], 3)` يجب أن ينتج رَقَم.

```js
assert(typeof getIndexToIns([3, 10, 5], 3) === 'number');
```

`getIndexToIns([5, 3, 20, 3], 5)` يجب أن ينتج `2`.

```js
assert(getIndexToIns([5, 3, 20, 3], 5) === 2);
```

`getIndexToIns([5, 3, 20, 3], 5)` يجب أن ينتج رَقَم.

```js
assert(typeof getIndexToIns([5, 3, 20, 3], 5) === 'number');
```

`getIndexToIns([2, 20, 10], 19)` يجب أن ينتج `2`.

```js
assert(getIndexToIns([2, 20, 10], 19) === 2);
```

`getIndexToIns([2, 20, 10], 19)` يجب أن ينتج رَقَم.

```js
assert(typeof getIndexToIns([2, 20, 10], 19) === 'number');
```

`getIndexToIns([2, 5, 10], 15)` يجب أن ينتج `3`.

```js
assert(getIndexToIns([2, 5, 10], 15) === 3);
```

`getIndexToIns([2, 5, 10], 15)` يجب أن ينتج رَقَم.

```js
assert(typeof getIndexToIns([2, 5, 10], 15) === 'number');
```

`getIndexToIns([], 1)` يجب أن ينتج `0`.

```js
assert(getIndexToIns([], 1) === 0);
```

`getIndexToIns([], 1)` يجب أن ينتج رَقَم.

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
