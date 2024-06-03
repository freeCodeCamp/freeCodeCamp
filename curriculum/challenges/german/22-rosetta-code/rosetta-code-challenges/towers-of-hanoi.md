---
id: 5951ed8945deab770972ae56
title: Die Türme von Hanoi
challengeType: 1
forumTopicId: 302341
dashedName: towers-of-hanoi
---

# --description--

Solve the Towers of Hanoi problem. The number of objects will be given as the first parameter, followed by the strings used to identify each stack of objects. Create a nested array containing the list of moves, `["source", "destination"]`.

Zum Beispiel ergeben die Parameter `(4, 'A', 'B', 'C')` ein verschachteltes Array von Zügen `[['A', 'C'], ['B', 'A']]`, das anzeigt, dass der 1ste Zug darin bestand, ein Objekt vom Stapel `A` nach `C` zu verschieben und der 2te Zug darin bestand, ein Objekt vom Stapel `B` nach `A` zu verschieben.

# --instructions--

Schreibe eine Funktion, die die Züge zum Stapeln der Objekte in einer verschachtelten Anordnung zurückgibt.

# --hints--

`towerOfHanoi` sollte eine Funktion sein.

```js
assert(typeof towerOfHanoi === 'function');
```

`towerOfHanoi(3, ...)` sollte 7 Züge zurückgeben.

```js
assert(res3.length === 7);
```

`towerOfHanoi(3, 'A', 'B', 'C')` sollte `[['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B']]` zurückgeben.

```js
assert.deepEqual(towerOfHanoi(3, 'A', 'B', 'C'), res3Moves);
```

`towerOfHanoi(5, "X", "Y", "Z")` 10. Zug sollte Y -> X sein.

```js
assert.deepEqual(res5[9], ['Y', 'X']);
```

`towerOfHanoi(7, 'A', 'B', 'C')` ersten zehn Züge sollten `[['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B'], ['A','C'], ['B','C'], ['B','A']]` sein

```js
assert.deepEqual(towerOfHanoi(7, 'A', 'B', 'C').slice(0, 10), res7First10Moves);
```

# --seed--

## --after-user-code--

```js
const res3 = towerOfHanoi(3, 'A', 'B', 'C');
const res3Moves = [['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B']];
const res5 = towerOfHanoi(5, 'X', 'Y', 'Z');
const res7First10Moves = [['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B'], ['A', 'C'], ['B', 'C'], ['B', 'A']];
```

## --seed-contents--

```js
function towerOfHanoi(n, a, b, c) {

  return [[]];
}
```

# --solutions--

```js
function towerOfHanoi(n, a, b, c) {
  const res = [];
  towerOfHanoiHelper(n, a, c, b, res);
  return res;
}

function towerOfHanoiHelper(n, a, b, c, res) {
  if (n > 0) {
    towerOfHanoiHelper(n - 1, a, c, b, res);
    res.push([a, c]);
    towerOfHanoiHelper(n - 1, b, a, c, res);
  }
}
```
