---
id: 5951ed8945deab770972ae56
title: Torres de Hanói
challengeType: 1
forumTopicId: 302341
dashedName: towers-of-hanoi
---

# --description--

Resolva o problema das Torres de Hanói. O número de objetos será dado como o primeiro parâmetro, seguido pelas strings usadas para identificar cada pilha de objetos. Crie um array aninhado contendo a lista de movimentos, `["source", "destination"]`.

Por exemplo, os parâmetros `(4, 'A', 'B', 'C')` resultarão em um array aninhado de movimentos `[['A', 'C'], ['B', 'A']]`, indicando que o primeiro movimento foi mover um objeto da pilha `A` para a `C` e o segundo movimento foi mover um objeto da pilha `B` para a `A`.

# --instructions--

Escreva uma função que retorne os movimentos para empilhar os objetos em um array aninhado.

# --hints--

`towerOfHanoi` deve ser uma função.

```js
assert(typeof towerOfHanoi === 'function');
```

`towerOfHanoi(3, ...)` deve retornar 7 movimentos.

```js
assert(res3.length === 7);
```

`towerOfHanoi(3, 'A', 'B', 'C')` deve retornar `[['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B']]`.

```js
assert.deepEqual(towerOfHanoi(3, 'A', 'B', 'C'), res3Moves);
```

O décimo movimento da `towerOfHanoi(5, "X", "Y", "Z")` deve ser Y -> X.

```js
assert.deepEqual(res5[9], ['Y', 'X']);
```

Os dez primeiros movimentos da `towerOfHanoi(7, 'A', 'B', 'C')` devem ser `[['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B'], ['A','C'], ['B','C'], ['B','A']]`

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
