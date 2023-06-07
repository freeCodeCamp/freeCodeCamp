---
id: a105e963526e7de52b219be9
title: Sortierte Union
challengeType: 1
forumTopicId: 16077
dashedName: sorted-union
---

# --description--

Schreibe eine Funktion, die zwei oder mehr Arrays annimmt und ein neues Array mit eindeutigen Werten in der Reihenfolge der ursprünglich angegebenen Arrays zurückgibt.

Mit anderen Worten: Alle Werte aus allen Arrays sollten in ihrer ursprünglichen Reihenfolge, aber ohne Duplikate in das endgültige Array aufgenommen werden.

Die eindeutigen Zahlen sollten nach ihrer ursprünglichen Reihenfolge sortiert werden, aber das endgültige Array sollte nicht in numerischer Reihenfolge sortiert sein.

Beispiele findest du in den Tests der Behauptungen (nachfolgend).

# --hints--

`uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])` sollte `[1, 3, 2, 5, 4]` zurückgeben.

```js
assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
```

`uniteUnique([1, 2, 3], [5, 2, 1])` sollte `[1, 2, 3, 5]` zurückgeben.

```js
assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5]);
```

`uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])` sollte `[1, 2, 3, 5, 4, 6, 7, 8]` zurückgeben.

```js
assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [
  1,
  2,
  3,
  5,
  4,
  6,
  7,
  8
]);
```

`uniteUnique([1, 3, 2], [5, 4], [5, 6])` sollte `[1, 3, 2, 5, 4, 6]` zurückgeben.

```js
assert.deepEqual(uniteUnique([1, 3, 2], [5, 4], [5, 6]), [1, 3, 2, 5, 4, 6]);
```

`uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])` sollte `[1, 3, 2, 5, 4]` zurückgeben.

```js
assert.deepEqual(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
```

# --seed--

## --seed-contents--

```js
function uniteUnique(arr) {
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```

# --solutions--

```js
function uniteUnique(arr) {
  return [].slice.call(arguments).reduce(function(a, b) {
    return [].concat(
      a, 
      b.filter(function(e, currentIndex) {
        return b.indexOf(e) === currentIndex && a.indexOf(e) === -1;
      }));
  }, []);
}
```
