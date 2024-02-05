---
id: 5e6dd15004c88cf00d2a78b3
title: Wiedehole über mehrere Arrays gleichzeitig
challengeType: 1
forumTopicId: 385279
dashedName: loop-over-multiple-arrays-simultaneously
---

# --description--

Loop over multiple arrays and create a new array whose $i^{th}$ element is the concatenation of $i^{th}$ element of each of the given.

Wenn dir in diesem Beispiel dieses Array von Arrays gegeben wird:

```js
[ ["a", "b", "c"], ["A", "B", "C"], [1, 2, 3] ]
```

die Ausgabe sollte sein:

```js
["aA1","bB2","cC3"]
```

# --instructions--

Schreibe eine Funktion, die ein Array von Arrays als Parameter nimmt und ein Array von Zeichenfolgen zurückgibt, während es es die angegebene Beschreibung erfüllt.

# --hints--

`loopSimult` sollte eine Funktion sein.

```js
assert(typeof loopSimult == 'function');
```

`loopSimult([["a", "b", "c"], ["A", "B", "C"], [1, 2, 3]])` sollte ein Array zurückgeben.

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

`loopSimult([["a", "b", "c"], ["A", "B", "C"], [1, 2, 3]])` sollte `["aA1", "bB2", "cC3"]` zurückgeben.

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

`loopSimult([["c", "b", "c"], ["4", "5", "C"], [7, 7, 3]])` sollte `["c47", "b57", "cC3"]` zurückgeben.

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

`loopSimult([["a", "b", "c", "d"], ["A", "B", "C", "d"], [1, 2, 3, 4]])` sollte `["aA1", "bB2", "cC3", "dd4"]` zurückgeben.

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

`loopSimult([["a", "b"], ["A", "B"], [1, 2]])` sollte `["aA1", "bB2"]` zurückgeben.

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

`loopSimult([["b", "c"], ["B", "C"], [2, 3]])` sollte `["bB2", "cC3"]` zurückgeben.

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
