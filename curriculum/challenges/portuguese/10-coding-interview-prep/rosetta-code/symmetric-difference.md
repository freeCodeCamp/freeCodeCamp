---
id: 5a23c84252665b21eecc8046
title: Diferença simétrica
challengeType: 1
forumTopicId: 16086
dashedName: symmetric-difference
---

# --description--

Dados dois conjuntos *A* e *B*, calcule $(A \\setminus B) \\cup (B \\setminus A). Ou seja, enumere os itens que estão em *A* ou *B* mas não em ambos. Esse conjunto é chamado de diferença simétrica de *A* e *B*. Em outras palavras: $(A \\cup B) \\setminus (A \\cap B)$ (o conjunto de itens que estão em pelo menos um dos conjuntos, *A* ou *B*, menos o conjunto de itens que estão em ambos, *A* e *B*).

Exemplo:

Para os conjuntos `A = [1, 2, 3]` e `B = [1, 3, 4]`, a diferença simétrica de *A* e *B* é `[2, 4]`.

# --instructions--

Escreva uma função que receba dois arrays como parâmetros e retorne a diferença simétrica. Ordene o array resultante antes de retorná-lo.

# --hints--

`symmetricDifference` deve ser uma função.

```js
assert(typeof symmetricDifference == 'function');
```

`symmetricDifference(["John", "Bob", "Mary", "Serena"], ["Jim", "Mary", "John", "Bob"])` deve retornar um array.

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

`symmetricDifference(["John", "Bob", "Mary", "Serena"], ["Jim", "Mary", "John", "Bob"])` deve retornar `["Jim", "Serena"]`.

```js
assert.deepEqual(
  symmetricDifference(
    ['John', 'Bob', 'Mary', 'Serena'],
    ['Jim', 'Mary', 'John', 'Bob']
  ),
  ['Jim', 'Serena']
);
```

`symmetricDifference([1, 2, 3], [3, 4])` deve retornar `[1, 2, 4]`.

```js
assert.deepEqual(symmetricDifference([1, 2, 3], [3, 4]), [1, 2, 4]);
```

`symmetricDifference([1, 2, 3, 4, 5], [3, 4, 8, 7])` deve retornar `[1, 2, 5, 7, 8]`.

```js
assert.deepEqual(symmetricDifference([1, 2, 3, 4, 5], [3, 4, 8, 7]), [
  1,
  2,
  5,
  7,
  8
]);
```

`symmetricDifference([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 5, 6, 7, 8, 9])` deve retornar `[2, 4, 9]`.

```js
assert.deepEqual(
  symmetricDifference([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 5, 6, 7, 8, 9]),
  [2, 4, 9]
);
```

`symmetricDifference([1, 2, 4, 7, 9], [2, 3, 7, 8, 9])` deve retornar `[1, 3, 4, 8]`.

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
