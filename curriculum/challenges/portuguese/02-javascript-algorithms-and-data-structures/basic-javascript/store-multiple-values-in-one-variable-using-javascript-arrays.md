---
id: bd7993c9c69feddfaeb8bdef
title: Armazenar múltiplos valores em uma variável usando arrays JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQWAm'
forumTopicId: 18309
dashedName: store-multiple-values-in-one-variable-using-javascript-arrays
---

# --description--

Com as variáveis de `array` em JavaScript, podemos armazenar diversos dados em um único lugar.

Você começa uma declaração de um array com a abertura de um colchetes, terminando com o fechamento do colchetes e colocando vírgulas entre cada entrada, dessa forma:

```js
const sandwich = ["peanut butter", "jelly", "bread"];
```

# --instructions--

Modifique o novo array `myArray` para que contenha uma string e um número (nessa ordem).

# --hints--

`myArray` deve ser um array.

```js
assert(typeof myArray == 'object');
```

O primeiro item de `myArray` deve ser uma string.

```js
assert(typeof myArray[0] !== 'undefined' && typeof myArray[0] == 'string');
```

O segundo item de `myArray` deve ser um número.

```js
assert(typeof myArray[1] !== 'undefined' && typeof myArray[1] == 'number');
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myArray);
```

## --seed-contents--

```js
// Only change code below this line
const myArray = [];
```

# --solutions--

```js
const myArray = ["The Answer", 42];
```
