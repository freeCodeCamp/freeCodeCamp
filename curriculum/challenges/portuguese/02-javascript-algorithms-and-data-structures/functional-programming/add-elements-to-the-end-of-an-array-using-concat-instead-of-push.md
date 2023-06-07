---
id: 587d7da9367417b2b2512b67
title: Adicionar elementos ao final de um array usando concat em vez de push
challengeType: 1
forumTopicId: 301226
dashedName: add-elements-to-the-end-of-an-array-using-concat-instead-of-push
---

# --description--

Programação funcional é basicamente criar e utilizar funções que não modificam os seus argumentos.

O último desafio mostrou como usar o método `concat` para criar um novo array a partir da mescla de outros sem modificar os originais. Compare os métodos `concat` e `push`. O `push` adiciona itens ao final do mesmo array a partir do qual ele é chamado. Ele modifica o array. Exemplo:

```js
const arr = [1, 2, 3];
arr.push(4, 5, 6);
```

`arr` teria o valor modificado de: `[1, 2, 3, 4, 5, 6]`, mas não é assim que se faz em programação funcional.

O `concat` nos oferece uma forma de mesclar novos itens ao final de um array sem alterá-lo.

# --instructions--

Modifique a função `nonMutatingPush` de modo que ela use `concat` para mesclar `newItem` ao final de `original` sem modificar os arrays `original` ou `newItem`. A função deve retornar um array.

# --hints--

O código deve usar o método `concat`.

```js
assert(code.match(/\.concat/g));
```

O código não deve usar o método `push`.

```js
assert(!code.match(/\.?[\s\S]*?push/g));
```

O primeiro array, `first`, não deve ser modificado.

```js
assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
```

O segundo array, `second`, não deve ser modificado.

```js
assert(JSON.stringify(second) === JSON.stringify([4, 5]));
```

`nonMutatingPush([1, 2, 3], [4, 5])` deve retornar `[1, 2, 3, 4, 5]`.

```js
assert(
  JSON.stringify(nonMutatingPush([1, 2, 3], [4, 5])) ===
    JSON.stringify([1, 2, 3, 4, 5])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.push(newItem);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);
```

# --solutions--

```js
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
const first = [1, 2, 3];
const second = [4, 5];
```
