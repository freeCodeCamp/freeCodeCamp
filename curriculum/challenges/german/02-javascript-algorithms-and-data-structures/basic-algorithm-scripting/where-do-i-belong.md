---
id: a24c1a4622e3c05097f71d67
title: Where do I Belong
challengeType: 1
forumTopicId: 16094
dashedName: where-do-i-belong
---

# --description--

Gib den niedrigsten Index zurück, bei dem ein Wert (zweites Argument) in ein Array (erstes Argument) eingefügt werden sollte, nachdem es sortiert wurde. Der zurückgegebene Wert sollte eine Zahl sein.

Zum Beispiel sollte `getIndexToIns([1,2,3,4], 1.5)` den Wert `1` zurückgeben, weil es größer als `1` (Index 0) ist, aber kleiner als `2` (Index 1).

Ebenso sollte `getIndexToIns([20,3,5], 19)` den Wert `2` zurückgeben, denn wenn der Array geordnet ist, sieht er wie `[3,5,20]` aus und `19` ist weniger als `20` (Index 2) und größer als `5` (Index 1).

# --hints--

`getIndexToIns([10, 20, 30, 40, 50], 35)` sollte `3` zurückgeben.

```js
assert(getIndexToIns([10, 20, 30, 40, 50], 35) === 3);
```

`getIndexToIns([10, 20, 30, 40, 50], 35)` sollte eine Zahl zurückgeben.

```js
assert(typeof getIndexToIns([10, 20, 30, 40, 50], 35) === 'number');
```

`getIndexToIns([10, 20, 30, 40, 50], 30)` sollte `2` zurückgeben.

```js
assert(getIndexToIns([10, 20, 30, 40, 50], 30) === 2);
```

`getIndexToIns([10, 20, 30, 40, 50], 30)` soll eine Zahl zurückgeben.

```js
assert(typeof getIndexToIns([10, 20, 30, 40, 50], 30) === 'number');
```

`getIndexToIns([40, 60], 50)` sollte `1` zurückgeben.

```js
assert(getIndexToIns([40, 60], 50) === 1);
```

`getIndexToIns([40, 60], 50)` sollte eine Zahl zurückgeben.

```js
assert(typeof getIndexToIns([40, 60], 50) === 'number');
```

`getIndexToIns([3, 10, 5], 3)` sollte `0` zurückgeben.

```js
assert(getIndexToIns([3, 10, 5], 3) === 0);
```

`getIndexToIns([3, 10, 5], 3)` sollte eine Zahl zurückgeben.

```js
assert(typeof getIndexToIns([3, 10, 5], 3) === 'number');
```

`getIndexToIns([5, 3, 20, 3], 5)` soll `2` zurückgeben.

```js
assert(getIndexToIns([5, 3, 20, 3], 5) === 2);
```

`getIndexToIns([5, 3, 20, 3], 5)` soll eine Zahl zurückgeben.

```js
assert(typeof getIndexToIns([5, 3, 20, 3], 5) === 'number');
```

`getIndexToIns([2, 20, 10], 19)` soll `2` zurückgeben.

```js
assert(getIndexToIns([2, 20, 10], 19) === 2);
```

`getIndexToIns([2, 20, 10], 19)` soll eine Zahl zurückgeben.

```js
assert(typeof getIndexToIns([2, 20, 10], 19) === 'number');
```

`getIndexToIns([2, 5, 10], 15)` soll `3` zurückgeben.

```js
assert(getIndexToIns([2, 5, 10], 15) === 3);
```

`getIndexToIns([2, 5, 10], 15)` soll eine Zahl zurückgeben.

```js
assert(typeof getIndexToIns([2, 5, 10], 15) === 'number');
```

`getIndexToIns([], 1)` soll `0` zurückgeben.

```js
assert(getIndexToIns([], 1) === 0);
```

`getIndexToIns([], 1)` soll eine Zahl zurückgeben.

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
