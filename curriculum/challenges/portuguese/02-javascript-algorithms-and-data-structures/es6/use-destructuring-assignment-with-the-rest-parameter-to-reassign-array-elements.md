---
id: 587d7b8a367417b2b2512b4c
title: >-
  Usar atribuição de desestruturação com o parâmetro rest para reatribuir elementos de array
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

As variáveis `a` e `b` pegam o primeiro e o segundo valores do array. Após isso, por causa da presença do parâmetro rest, `arr` pega o resto dos valores na forma de um array. O elemento rest só funciona corretamente como a última variável na lista. Como em, você não pode usar o parâmetro rest para capturar um subarray que deixa de fora o último elemento do array original.

# --instructions--

Use atribuição de desestruturação com o parâmetro rest para executar `Array.prototype.slice()` de forma eficaz para que `arr` seja um sub array do array original `source` com os dois primeiros elementos omitidos.

# --hints--

`arr` deve ser `[3,4,5,6,7,8,9,10]`

```js
assert(arr.every((v, i) => v === i + 3) && arr.length === 8);
```

`source` deve ser `[1,2,3,4,5,6,7,8,9,10]`

```js
assert(source.every((v, i) => v === i + 1) && source.length === 10);
```

`Array.slice()` não deve ser usado.

```js
(getUserInput) => assert(!getUserInput('index').match(/slice/g));
```

Desestruturação na `list` deve ser usada.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/\[(([_$a-z]\w*)?,){1,}\.\.\.arr\]=list/i)
);
```

# --seed--

## --seed-contents--

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const arr = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
```

# --solutions--

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
```
