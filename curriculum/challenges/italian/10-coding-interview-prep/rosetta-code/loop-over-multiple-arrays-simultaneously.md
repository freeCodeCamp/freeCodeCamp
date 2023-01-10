---
id: 5e6dd15004c88cf00d2a78b3
title: Iterare su più matrici simultaneamente
challengeType: 1
forumTopicId: 385279
dashedName: loop-over-multiple-arrays-simultaneously
---

# --description--

Itera su più array e crea un nuovo array il cui elemento $i^{mo}$ è la concatenazione dell'$i^{mo}$ elemento di ciascuno dei dati forniti.

Per questo esempio, se le viene dato questo array di array:

```js
[ ["a", "b", "c"], ["A", "B", "C"], [1, 2, 3] ]
```

l'output dovrebbe essere:

```js
["aA1","bB2","cC3"]
```

# --instructions--

Scrivi una funzione che prende un array di array come parametro e restituisce un array di stringhe che soddisfano la descrizione data.

# --hints--

`loopSimult` dovrebbe essere una funzione.

```js
assert(typeof loopSimult == 'function');
```

`loopSimult([["a", "b", "c"], ["A", "B", "C"], [1, 2, 3]])` dovrebbe restituire un array.

```js
assert(
  Array.isArray(
    loopSimult([
      ['a', 'b', 'c'],
      ['A', 'B', 'C'],
      [1, 2, 3]
    ])
  )
);
```

`loopSimult([["a", "b", "c"], ["A", "B", "C"], [1, 2, 3]])` dovrebbe restituire `["aA1", "bB2", "cC3"]`.

```js
assert.deepEqual(
  loopSimult([
    ['a', 'b', 'c'],
    ['A', 'B', 'C'],
    [1, 2, 3]
  ]),
  ['aA1', 'bB2', 'cC3']
);
```

`loopSimult([["c", "b", "c"], ["4", "5", "C"], [7, 7, 3]])` dovrebbe restituire `["c47", "b57", "cC3"]`.

```js
assert.deepEqual(
  loopSimult([
    ['c', 'b', 'c'],
    ['4', '5', 'C'],
    [7, 7, 3]
  ]),
  ['c47', 'b57', 'cC3']
);
```

`loopSimult([["a", "b", "c", "d"], ["A", "B", "C", "d"], [1, 2, 3, 4]])` dovrebbe restituire `["aA1", "bB2", "cC3", "dd4"]`.

```js
assert.deepEqual(
  loopSimult([
    ['a', 'b', 'c', 'd'],
    ['A', 'B', 'C', 'd'],
    [1, 2, 3, 4]
  ]),
  ['aA1', 'bB2', 'cC3', 'dd4']
);
```

`loopSimult([["a", "b"], ["A", "B"], [1, 2]])` dovrebbe restituire `["aA1", "bB2"]`.

```js
assert.deepEqual(
  loopSimult([
    ['a', 'b'],
    ['A', 'B'],
    [1, 2]
  ]),
  ['aA1', 'bB2']
);
```

`loopSimult([["b", "c"], ["B", "C"], [2, 3]])` dovrebbe restituire `["bB2", "cC3"]`.

```js
assert.deepEqual(
  loopSimult([
    ['b', 'c'],
    ['B', 'C'],
    [2, 3]
  ]),
  ['bB2', 'cC3']
);
```

# --seed--

## --seed-contents--

```js
function loopSimult(A) {

}
```

# --solutions--

```js
function loopSimult(A) {
    var res = [], output;
    for (var i = 0; i < A[0].length; i += 1) {
        output = "";
        for (var j = 0; j < A.length; j++)
            output += A[j][i];
        res.push(output);
    }
    return res;
}
```
