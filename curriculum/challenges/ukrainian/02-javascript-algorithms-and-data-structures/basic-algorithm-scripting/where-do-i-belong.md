---
id: a24c1a4622e3c05097f71d67
title: Куди я належу (Де моє місце)
challengeType: 5
forumTopicId: 16094
dashedName: where-do-i-belong
---

# --description--

Поверніть найнижчий індекс, при якому значення (другий аргумент) слід вставити в масив (перший аргумент), після того, як він був відсортований. Отримане значення має бути числом.

Наприклад, `getIndexToIns([1,2,3,4], 1.5)`має дати відповідь `1`, тому що вона більша ніж `1` (індекс 0), але менша ніж `2` (індекс 1).

Аналогічно, `getIndexToIns([20,3,5], 19)` має дати відповідь `2` тому що, як тільки масив буде відсортований, він виглядатиме як `[3,5,20]`, а `19` менше за `20` (індекс 2) та більше, ніж `5` (індекс 1).

# --hints--

`getIndexToIns([10, 20, 30, 40, 50], 35)` має повернути `3`.

```js
assert(getIndexToIns([10, 20, 30, 40, 50], 35) === 3);
```

`getIndexToIns([10, 20, 30, 40, 50], 35)` має дати відповідь числом.

```js
assert(typeof getIndexToIns([10, 20, 30, 40, 50], 35) === 'number');
```

`getIndexToIns([10, 20, 30, 40, 50], 30)` має дати відповідь `2`.

```js
assert(getIndexToIns([10, 20, 30, 40, 50], 30) === 2);
```

`getIndexToIns([10, 20, 30, 40, 50], 30)` має дати відповідь числом.

```js
assert(typeof getIndexToIns([10, 20, 30, 40, 50], 30) === 'number');
```

`getIndexToIns([40, 60], 50)` має дати відповідь `1`.

```js
assert(getIndexToIns([40, 60], 50) === 1);
```

`getIndexToIns([40, 60], 50)` має дати відповідь числом.

```js
assert(typeof getIndexToIns([40, 60], 50) === 'number');
```

`getIndexToIns([3, 10, 5], 3)` має дати відповідь `0`.

```js
assert(getIndexToIns([3, 10, 5], 3) === 0);
```

`getIndexToIns([3, 10, 5], 3)` має дати відповідь числом.

```js
assert(typeof getIndexToIns([3, 10, 5], 3) === 'number');
```

`getIndexToIns([5, 3, 20, 3], 5)` має дати відповідь `2`.

```js
assert(getIndexToIns([5, 3, 20, 3], 5) === 2);
```

`getIndexToIns([5, 3, 20, 3], 5)` має дати відповідь числом.

```js
assert(typeof getIndexToIns([5, 3, 20, 3], 5) === 'number');
```

`getIndexToIns([2, 20, 10], 19)` має дати відповідь `2`.

```js
assert(getIndexToIns([2, 20, 10], 19) === 2);
```

`getIndexToIns([2, 20, 10], 19)` має дати відповідь числом.

```js
assert(typeof getIndexToIns([2, 20, 10], 19) === 'number');
```

`getIndexToIns([2, 5, 10], 15)` має дати відповідь `3`.

```js
assert(getIndexToIns([2, 5, 10], 15) === 3);
```

`getIndexToIns([2, 5, 10], 15)` має дати відповідь числом.

```js
assert(typeof getIndexToIns([2, 5, 10], 15) === 'number');
```

`getIndexToIns([], 1)` має дати відповідь `0`.

```js
assert(getIndexToIns([], 1) === 0);
```

`getIndexToIns([], 1)` має дати відповідь числом.

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
