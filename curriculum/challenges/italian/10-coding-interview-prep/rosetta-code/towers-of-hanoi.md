---
id: 5951ed8945deab770972ae56
title: Torri di Hanoi
challengeType: 1
forumTopicId: 302341
dashedName: towers-of-hanoi
---

# --description--

Risolvi il problema della Torre di Hanoi. Il numeri di oggetti sarà dato che terzo parametro, seguito dalle stringhe usate per identificare ogni pila di oggetti. Crea un array annidato che contiene la lista delle mosse, `["source", "destination"]`.

Per esempio, i parametri `(4, 'A', 'B', 'C')`, risulteranno nell'array annidato di mosse `[['A', 'C'], ['B', 'A']]`, indicando che la prima mossa sia muovere un oggetto dalla pila `A` alla pila `C` e la seconda mossa sia muovere un oggetto dalla pila `B` alla pila `A`.

# --instructions--

Scrivi una funzione che restituisce le mosse per impilare gli oggetti in un array annidato.

# --hints--

`towerOfHanoi` dovrebbe essere una funzione.

```js
assert(typeof towerOfHanoi === 'function');
```

`towerOfHanoi(3, ...)` dovrebbe restituire 7 mosse.

```js
assert(res3.length === 7);
```

`towerOfHanoi(3, 'A', 'B', 'C')` dovrebbe restituire `[['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B']]`.

```js
assert.deepEqual(towerOfHanoi(3, 'A', 'B', 'C'), res3Moves);
```

La decima mossa di `towerOfHanoi(5, "X", "Y", "Z")` dovrebbe essere Y -> X.

```js
assert.deepEqual(res5[9], ['Y', 'X']);
```

Le prime dieci mosse di `towerOfHanoi(7, 'A', 'B', 'C')` dovrebbero essere `['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B'], ['A','C'], ['B','A']]`

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
