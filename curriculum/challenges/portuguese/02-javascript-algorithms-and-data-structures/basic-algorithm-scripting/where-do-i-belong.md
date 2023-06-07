---
id: a24c1a4622e3c05097f71d67
title: Encontrar o local em um array
challengeType: 1
forumTopicId: 16094
dashedName: where-do-i-belong
---

# --description--

Retorne o menor índice em que um valor (segundo argumento) deve ser inserido no array (primeiro argumento) assim que tenha sido ordenado. O valor retornado deve ser um número.

Por exemplo, `getIndexToIns([1,2,3,4], 1.5)` deve retornar `1` porque é maior que `1` (índice 0), mas menor que `2` (índice 1).

Da mesma forma, `getIndexToIns([20,3,5], 19)` deve retornar `2` pois uma vez que o array foi sorteado se parecerá com `[3,5,20]` e `19` é menor que `20` (índice 2) e maior que `5` (índice 1).

# --hints--

`getIndexToIns([10, 20, 30, 40, 50], 35)` deve retornar `3`.

```js
assert(getIndexToIns([10, 20, 30, 40, 50], 35) === 3);
```

`getIndexToIns([10, 20, 30, 40, 50], 35)` deve retornar um número.

```js
assert(typeof getIndexToIns([10, 20, 30, 40, 50], 35) === 'number');
```

`getIndexToIns([10, 20, 30, 40, 50], 30)` deve retornar `2`.

```js
assert(getIndexToIns([10, 20, 30, 40, 50], 30) === 2);
```

`getIndexToIns([10, 20, 30, 40, 50], 30)` deve retornar um número.

```js
assert(typeof getIndexToIns([10, 20, 30, 40, 50], 30) === 'number');
```

`getIndexToIns([40, 60], 50)` deve retornar `1`.

```js
assert(getIndexToIns([40, 60], 50) === 1);
```

`getIndexToIns([40, 60], 50)` deve retornar um número.

```js
assert(typeof getIndexToIns([40, 60], 50) === 'number');
```

`getIndexToIns([3, 10, 5], 3)` deve retornar `0`.

```js
assert(getIndexToIns([3, 10, 5], 3) === 0);
```

`getIndexToIns([3, 10, 5], 3)` deve retornar um número.

```js
assert(typeof getIndexToIns([3, 10, 5], 3) === 'number');
```

`getIndexToIns([5, 3, 20, 3], 5)` deve retornar `2`.

```js
assert(getIndexToIns([5, 3, 20, 3], 5) === 2);
```

`getIndexToIns([5, 3, 20, 3], 5)` deve retornar um número.

```js
assert(typeof getIndexToIns([5, 3, 20, 3], 5) === 'number');
```

`getIndexToIns([2, 20, 10], 19)` deve retornar `2`.

```js
assert(getIndexToIns([2, 20, 10], 19) === 2);
```

`getIndexToIns([2, 20, 10], 19)` deve retornar um número.

```js
assert(typeof getIndexToIns([2, 20, 10], 19) === 'number');
```

`getIndexToIns([2, 5, 10], 15)` deve retornar `3`.

```js
assert(getIndexToIns([2, 5, 10], 15) === 3);
```

`getIndexToIns([2, 5, 10], 15)` deve retornar um número.

```js
assert(typeof getIndexToIns([2, 5, 10], 15) === 'number');
```

`getIndexToIns([], 1)` deve retornar `0`.

```js
assert(getIndexToIns([], 1) === 0);
```

`getIndexToIns([], 1)` deve retornar um número.

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
