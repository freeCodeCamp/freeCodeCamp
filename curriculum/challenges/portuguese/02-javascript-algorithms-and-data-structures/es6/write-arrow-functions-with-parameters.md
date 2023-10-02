---
id: 587d7b88367417b2b2512b44
title: Escrever arrow functions com parâmetros
challengeType: 1
forumTopicId: 301223
dashedName: write-arrow-functions-with-parameters
---

# --description--

Assim como uma função normal, você pode passar argumentos para uma arrow function.

```js
const doubler = (item) => item * 2;
doubler(4);
```

`doubler(4)` retornaria o valor `8`.

Se uma arrow function tiver um único parâmetro, os parênteses envolvendo o parâmetro podem ser omitidos.

```js
const doubler = item => item * 2;
```

É possível passar mais de um argumento para uma arrow function.

```js
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```

`multiplier(4, 2)` retornaria o valor `8`.

# --instructions--

Reescreva a função `myConcat` que anexa conteúdo de `arr2` para `arr1` para que a função use sintaxe de arrow function.

# --hints--

Você deve substituir a palavra-chave `var`.

```js
assert.notMatch(code, /var/g);
```

`myConcat` deve ser uma variável constante (usando `const`).

```js
assert.match(code, /const\s+myConcat/g);
```

`myConcat` deve ser uma arrow function com dois parâmetros

```js
assert(
  /myConcat=\(\w+,\w+\)=>/.test(code.replace(/\s/g, '')) &&
    typeof myConcat === 'function'
);
```

`meuConcat()` deve retornar `[1, 2, 3, 4, 5]`.

```js
assert.deepEqual(myConcat([1, 2], [3, 4, 5]), [1, 2, 3, 4, 5]);
```

A palavra-chave `function` não deve ser usada.

```js
assert.notMatch(code, /function/g);
```

# --seed--

## --seed-contents--

```js
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
```

# --solutions--

```js
const myConcat = (arr1, arr2) =>  {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
```
