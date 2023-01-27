---
id: a5deed1811a43193f9f1c841
title: Fallo cadere
challengeType: 1
forumTopicId: 16010
dashedName: drop-it
---

# --description--

Dato l'array `arr`, itera su di esso e rimuovi ogni elemento partendo dal primo elemento (l'indice 0) fino a quando la funzione `func` restituisce `true` quando le viene passato l'elemento iterato.

Poi restituisci il resto dell'array se la condizione è soddisfatta, altrimenti restituisci come `arr` un array vuoto.

# --hints--

`dropElements([1, 2, 3, 4], function(n) {return n >= 3;})` dovrebbe restituire `[3, 4]`.

```js
assert.deepEqual(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  }),
  [3, 4]
);
```

`dropElements([0, 1, 0, 1], function(n) {return n === 1;})` dovrebbe restituire `[1, 0, 1]`.

```js
assert.deepEqual(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  }),
  [1, 0, 1]
);
```

`dropElements([1, 2, 3], function(n) {return n > 0;})` dovrebbe restituire `[1, 2, 3]`.

```js
assert.deepEqual(
  dropElements([1, 2, 3], function (n) {
    return n > 0;
  }),
  [1, 2, 3]
);
```

`dropElements([1, 2, 3, 4], function(n) {return n > 5;})` dovrebbe restituire `[]`.

```js
assert.deepEqual(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  }),
  []
);
```

`dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})` dovrebbe restituire `[7, 4]`.

```js
assert.deepEqual(
  dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
  }),
  [7, 4]
);
```

`dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})` dovrebbe restituire `[3, 9, 2]`.

```js
assert.deepEqual(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  }),
  [3, 9, 2]
);
```

# --seed--

## --seed-contents--

```js
function dropElements(arr, func) {
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
```

# --solutions--

```js
function dropElements(arr, func) {
  while (arr.length && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
```
