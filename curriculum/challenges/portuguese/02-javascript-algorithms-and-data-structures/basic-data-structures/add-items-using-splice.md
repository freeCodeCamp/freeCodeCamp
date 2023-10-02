---
id: 587d78b3367417b2b2512b11
title: Adicionar itens usando splice()
challengeType: 1
forumTopicId: 301152
dashedName: add-items-using-splice
---

# --description--

Você se lembra de quando mencionamos no último desafio que `splice()` pode receber até três parâmetros? Bem, você pode usar o terceiro parâmetro, composto por um ou mais elementos, para adicionar algo ao array. Isso pode ser incrivelmente útil para mudar rapidamente de um elemento, ou um conjunto de elementos, para outro.

```js
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
```

A segunda ocorrência de `12` é removida, e adicionamos `13` e `14` no mesmo índice. O array `numbers` agora seria `[ 10, 11, 12, 13, 14, 15 ]`.

Aqui, começamos com um array de números. Em seguida, passamos o seguinte para `splice()`: o índice no qual começar a deletar os elementos (3), o número de elementos a serem deletados (1) e os argumentos restantes (13, 14) serão inseridos com início no mesmo índice. Note que pode haver um número qualquer de elementos (separado por vírgulas) seguindo `amountToDelete`, cada um dos quais é inserido.

# --instructions--

Definimos uma função, `htmlColorNames`, a qual recebe um array de cores HTML como argumento. Modifique a função usando `splice()` para remover os dois primeiros elementos do array e adicionar `'DarkSalmon'` e `'BlanchedAlmond'` em seus respectivos lugares.

# --hints--

`htmlColorNames` deve retornar `["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurquoise", "FireBrick"]`

```js
assert.deepEqual(
  htmlColorNames([
    'DarkGoldenRod',
    'WhiteSmoke',
    'LavenderBlush',
    'PaleTurquoise',
    'FireBrick'
  ]),
  [
    'DarkSalmon',
    'BlanchedAlmond',
    'LavenderBlush',
    'PaleTurquoise',
    'FireBrick'
  ]
);
```

A função `htmlColorNames` deve utilizar o método `splice()`

```js
assert(/.splice/.test(code));
```

Você não deve usar `shift()` ou `unshift()`.

```js
assert(!/shift|unshift/.test(code));
```

Você não deve usar a notação de colchetes de array.

```js
assert(!/\[\d\]\s*=/.test(code));
```

# --seed--

## --seed-contents--

```js
function htmlColorNames(arr) {
  // Only change code below this line

  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
```

# --solutions--

```js
function htmlColorNames(arr) {
  arr.splice(0,2,'DarkSalmon', 'BlanchedAlmond');
  return arr;
}
```
