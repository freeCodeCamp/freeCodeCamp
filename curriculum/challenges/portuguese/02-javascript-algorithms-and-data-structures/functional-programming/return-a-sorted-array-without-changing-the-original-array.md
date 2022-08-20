---
id: 587d7da9367417b2b2512b6a
title: Retornar um array ordenado sem modificar o array original
challengeType: 1
forumTopicId: 301237
dashedName: return-a-sorted-array-without-changing-the-original-array
---

# --description--

Um efeito colateral do método `sort` é que ele altera a ordem dos elementos no array original. Em outras palavras, o array sofre uma mutação. Uma forma de evitar isto é primeiro concatenar um array vazio ao array a ordenar (não esqueça que `slice` e `concat` retornam um novo array) e, então, executar o método `sort` no novo array.

# --instructions--

Use o método `sort`na função `nonMutatingSort` para ordenar os elementos de um array em ordem crescente. A função deve retornar um novo array sem alterar a variável `globalArray`.

# --hints--

Você deve usar o método `sort`.

```js
assert(nonMutatingSort.toString().match(/\.sort/g));
```

A variável `globalArray` não deve ser alterada.

```js
assert(JSON.stringify(globalArray) === JSON.stringify([5, 6, 3, 2, 9]));
```

`nonMutatingSort(globalArray)` deve retornar `[2, 3, 5, 6, 9]`.

```js
assert(
  JSON.stringify(nonMutatingSort(globalArray)) ===
    JSON.stringify([2, 3, 5, 6, 9])
);
```

O conteúdo de `nonMutatingSort(globalArray)` não deve ser inserido de antemão.

```js
assert(!nonMutatingSort.toString().match(/\[.*?[23569].*?\]/gs));
```

A função deve retornar um novo array, não o array passado a ela.

```js
assert(nonMutatingSort(globalArray) !== globalArray);
```

`nonMutatingSort([1, 30, 4, 21, 100000])` deve retornar `[1, 4, 21, 30, 100000]`.

```js
assert(JSON.stringify(nonMutatingSort([1, 30, 4, 21, 100000])) ===
    JSON.stringify([1, 4, 21, 30, 100000]))
```

`nonMutatingSort([140000, 104, 99])` deve retornar `[99, 104, 140000]`.

```js
assert(JSON.stringify(nonMutatingSort([140000, 104, 99])) ===
    JSON.stringify([99, 104, 140000]))
```

# --seed--

## --seed-contents--

```js
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line


  // Only change code above this line
}

nonMutatingSort(globalArray);
```

# --solutions--

```js
const globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return [].concat(arr).sort((a,b) => a-b);
}
```
