---
id: 587d7da9367417b2b2512b69
title: Ordenar um array alfabeticamente usando o método sort
challengeType: 1
forumTopicId: 18303
dashedName: sort-an-array-alphabetically-using-the-sort-method
---

# --description--

O método `sort` consegue ordenar os elementos de um array de acordo com uma função de callback.

Por exemplo:

```js
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);
```

O código acima retorna `[1, 2, 3, 4, 5]`.

```js
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);
```

Este retorna o valor `['z', 's', 'l', 'h', 'b']`.

O método de ordenação padrão do JavaScript é por valores de ponto Unicode, o que pode nos dar resultados inesperados. Por isso você é encorajado a providenciar uma função de callback para especificar como a ordenação deve ocorrer. Quando tal função callback (comumente chamada de `compareFunction`, ou função de comparação) é providenciada, os elementos do array são ordenados de acordo com o valor de retorno dela: se `compareFunction(a,b)` retornar um valor menor que 0 para dois elementos `a` e `b`, então `a` virá antes de `b`. Se `compareFunction(a,b)` retornar um valor maior que 0 para dois elementos `a` e `b`, então `b` virá antes de `a`. Finalmente, se `compareFunction(a,b)` retornar 0, então `a` e `b` não trocarão de lugar entre si.

# --instructions--

Use o método `sort` na função `alphabeticalOrder` para ordenar os elementos de `arr` em ordem alfabética. A função deve retornar o array ordenado.

# --hints--

Você deve usar o método `sort`.

```js
assert(code.match(/\.sort/g));
```

`alphabeticalOrder(["a", "d", "c", "a", "z", "g"])` deve retornar `["a", "a", "c", "d", "g", "z"]`.

```js
assert(
  JSON.stringify(alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g'])) ===
    JSON.stringify(['a', 'a', 'c', 'd', 'g', 'z'])
);
```

`alphabeticalOrder(["x", "h", "a", "m", "n", "m"])` deve retornar `["a", "h", "m", "m", "n", "x"]`.

```js
assert(
  JSON.stringify(alphabeticalOrder(['x', 'h', 'a', 'm', 'n', 'm'])) ===
    JSON.stringify(['a', 'h', 'm', 'm', 'n', 'x'])
);
```

`alphabeticalOrder(["a", "a", "a", "a", "x", "t"])` deve retornar `["a", "a", "a", "a", "t", "x"]`.

```js
assert(
  JSON.stringify(alphabeticalOrder(['a', 'a', 'a', 'a', 'x', 't'])) ===
    JSON.stringify(['a', 'a', 'a', 'a', 't', 'x'])
);
```

# --seed--

## --seed-contents--

```js
function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr
  // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```

# --solutions--

```js
function alphabeticalOrder(arr) {
  return arr.sort();
}
```
