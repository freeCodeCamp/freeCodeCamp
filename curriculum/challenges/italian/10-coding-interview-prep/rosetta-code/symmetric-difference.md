---
id: 5a23c84252665b21eecc8046
title: Differenza simmetrica
challengeType: 1
forumTopicId: 16086
dashedName: symmetric-difference
---

# --description--

Dati due *insiemi* A e *B*, calcola $(A \\setminus B) \\cup (B \\setminus A).$ Vale a dire elenca gli elementi che sono in *A* o *B*, ma non in entrambi. Questo set è chiamato la differenza simmetrica di *A* e *B*. In altre parole: $(A \\cup B) \\setminus (A \\cap B)$ (l'insieme di elementi che sono in almeno uno di *A* o *B* meno l'insieme di elementi che sono sia in *A* che in *B*).

Esempio:

Per i set `A = [1, 2, 3]`, e `B = [1, 3, 4]`, la differenza simmetrica di *A* e *B* è `[2, 4]`.

# --instructions--

Scrivi una funzione che prende due array come parametri e restituisce la differenza simmetrica. Ordina l'array risultante prima di restituirlo.

# --hints--

`symmetricDifference` dovrebbe essere una funzione.

```js
assert(typeof symmetricDifference == 'function');
```

`symmetricDifference(["John", "Bob", "Mary", "Serena"], ["Jim", "Mary", "John", "Bob"])` dovrebbe restituire un array.

```js
assert(
  Array.isArray(
    symmetricDifference(
      ['John', 'Bob', 'Mary', 'Serena'],
      ['Jim', 'Mary', 'John', 'Bob']
    )
  )
);
```

`symmetricDifference(["John", "Bob", "Mary", "Serena"], ["Jim", "Mary", "John", "Bob"])` dovrebbe restituire `["Jim", "Serena"]`.

```js
assert.deepEqual(
  symmetricDifference(
    ['John', 'Bob', 'Mary', 'Serena'],
    ['Jim', 'Mary', 'John', 'Bob']
  ),
  ['Jim', 'Serena']
);
```

`symmetricDifference([1, 2, 3], [3, 4])` dovrebbe restituire `[1, 2, 4]`.

```js
assert.deepEqual(symmetricDifference([1, 2, 3], [3, 4]), [1, 2, 4]);
```

`symmetricDifference([1, 2, 3, 4, 5], [3, 4, 8, 7])` dovrebbe restituire `[1, 2, 5, 7, 8]`.

```js
assert.deepEqual(symmetricDifference([1, 2, 3, 4, 5], [3, 4, 8, 7]), [
  1,
  2,
  5,
  7,
  8
]);
```

`symmetricDifference([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 5, 6, 7, 8, 9])` dovrebbe restituire `[2, 4, 9]`.

```js
assert.deepEqual(
  symmetricDifference([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 5, 6, 7, 8, 9]),
  [2, 4, 9]
);
```

`symmetricDifference([1, 2, 4, 7, 9], [2, 3, 7, 8, 9])` dovrebbe restituire `[1, 3, 4, 8]`.

```js
assert.deepEqual(symmetricDifference([1, 2, 4, 7, 9], [2, 3, 7, 8, 9]), [
  1,
  3,
  4,
  8
]);
```

# --seed--

## --seed-contents--

```js
function symmetricDifference(A, B) {

}
```

# --solutions--

```js
function symmetricDifference(A, B) {
  function relative_complement(A, B) {
    return A.filter(function(elem) {
      return B.indexOf(elem) == -1;
    });
  }

  function unique(ary) {
    var u = ary.concat().sort();
    for (var i = 1; i < u.length; ) {
      if (u[i - 1] === u[i]) u.splice(i, 1);
      else i++;
    }
    return u;
  }

  return unique(
    relative_complement(A, B).concat(relative_complement(B, A))
  ).sort();
}
```
