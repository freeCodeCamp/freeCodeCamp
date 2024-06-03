---
id: 587d7b8a367417b2b2512b4c
title: >-
  Desestruturação por meio de elementos com rest
challengeType: 1
forumTopicId: 301218
dashedName: >-
  use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements
---

# --description--

Em algumas situações envolvendo um array desestruturado, podemos querer coletar o resto dos elementos em um array separado.

O resultado é similar a `Array.prototype.slice()`, como mostrado abaixo:

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
```

O console exibiria os valores `1, 2` e `[3, 4, 5, 7]`.

As variáveis `a` e `b` pegam o primeiro e o segundo valores do array. Depois disso, por causa da presença da sintaxe do rest, `arr` pega o resto dos valores na forma de um array. O elemento rest só funciona corretamente como a última variável na lista. De momento, você não pode usar a sintaxe do rest para capturar um sub-array que deixa de fora o último elemento do array original.

# --instructions--

Use uma atribuição de desestruturação com a sintaxe do rest para simular o comportamento de `Array.prototype.slice()`. `removeFirstTwo()` deve retornar um sub-array do array original `list` com os dois primeiros elementos omitidos.

# --hints--

`removeFirstTwo([1, 2, 3, 4, 5])` deve retornar `[3, 4, 5]`

```js
assert.deepEqual(removeFirstTwo([1, 2, 3, 4, 5]), [3, 4, 5]);
```

`removeFirstTwo()` não deve modificar `list`

```js
const _testArr = [1, 2, 3, 4, 5];
removeFirstTwo(_testArr);
assert.deepEqual(_testArr, [1, 2, 3, 4, 5])
```

`Array.slice()` não deve ser usado.

```js
assert(!__helpers.removeJSComments(code).match(/\.\s*slice\s*\(/));
```

Você deve usar a sintaxe de rest.

```js
assert.match(code, /\.\.\./);
```

# --seed--

## --seed-contents--

```js
function removeFirstTwo(list) {
  return list;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```

# --solutions--

```js
function removeFirstTwo(list) {
  // comment with 'slice' to check comments are removed in tests
  const [, , ...shorterList] = list;
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```
