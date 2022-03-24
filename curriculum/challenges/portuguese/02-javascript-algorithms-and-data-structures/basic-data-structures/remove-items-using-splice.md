---
id: 587d78b2367417b2b2512b10
title: Remover itens usando splice()
challengeType: 1
forumTopicId: 301166
dashedName: remove-items-using-splice
---

# --description--

Pois bem. Aprendemos como remover elementos do início e do fim de arrays usando `shift()` e `pop()`, mas e se quisermos remover um elemento de algum lugar do meio? Ou remover mais de um elemento de uma vez? Bem, é aí que `splice()` pode ser útil. `splice()` nos permite fazer isso: **remover qualquer número de elementos consecutivos** de qualquer lugar no array.

`splice` pode receber 3 parâmetros, mas por agora, nós focaremos apenas nos 2 primeiros. Os dois primeiros parâmetros de `splice()` são inteiros que representam índices, ou posições, dos itens no array para o qual o método `splice()` está sendo chamado. Lembre-se: arrays são *indexados a zero*. Então, para indicar o primeiro elemento do array, usaríamos `0`. O primeiro parâmetro de `splice()` representa o índice no array do qual começar a remover elementos, enquanto o segundo parâmetro indica o número de elementos a serem removidos. Por exemplo:

```js
let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
```

Aqui, nós removemos 2 elementos, começando com o terceiro elemento (no índice 2). `array` teria o valor `['today', 'was', 'great']`.

`splice()` não apenas modifica o array do qual está sendo chamado, mas também retorna um novo array contendo os valores dos elementos removidos:

```js
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
```

`newArray` tem o valor `['really', 'happy']`.

# --instructions--

Iniciamos um array `arr`. Use `splice()` para remover elementos do `arr`, para que apenas contenha elementos que somam ao valor de `10`.

# --hints--

Você não deve alterar a linha original: `const arr = [2, 4, 5, 1, 7, 5, 2, 1];`.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/constarr=\[2,4,5,1,7,5,2,1\];?/)
);
```

`arr` deve conter apenas elementos que somam a `10`.

```js
assert.strictEqual(
  arr.reduce((a, b) => a + b),
  10
);
```

Seu código deve utilizar o método `splice()` em `arr`.

```js
assert(__helpers.removeWhiteSpace(code).match(/arr\.splice\(/));
```

O splice deve remover apenas os elementos de `arr` e não adicionar qualquer elemento a mais para `arr`.

```js
assert(
  !__helpers.removeWhiteSpace(code).match(/arr\.splice\(\d+,\d+,\d+.*\)/g)
);
```

# --seed--

## --seed-contents--

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line

// Only change code above this line
console.log(arr);
```

# --solutions--

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
```
