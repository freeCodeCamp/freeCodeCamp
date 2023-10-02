---
id: 587d7b7b367417b2b2512b14
title: Verificar a presença de um elemento com indexOf()
challengeType: 1
forumTopicId: 301154
dashedName: check-for-the-presence-of-an-element-with-indexof
---

# --description--

Já que arrays podem ser alterados, ou *mutados*, a qualquer momento, não há garantia de onde um dado estará em um determinado array, ou se esse elemento sequer existe. Felizmente, o JavaScript nos fornece outro método integrado, `indexOf()`, que nos permite rapidamente e facilmente checar pela presença de um elemento em um array. `indexOf()` recebe um elemento como parâmetro, e quando chamado, retorna a posição, ou índice, daquele elemento, ou `-1` se o elemento não existe no array.

Por exemplo:

```js
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');
```

`indexOf('dates')` retorna `-1`, `indexOf('oranges')` retorna `2` e `indexOf('pears')` retorna `1` (o primeiro índice no qual cada elemento existe).

# --instructions--

`indexOf()` pode ser incrivelmente útil para verificar rapidamente a presença de um elemento em um array. Definimos uma função, `quickCheck`, que recebe um array e um elemento como argumentos. Modifique a função usando `indexOf()` para que retorne `true` se o elemento passado existe no array, e `false` caso não exista.

# --hints--

A função `quickCheck` deve retornar um booleano (`true` ou `false`), e não uma string (`"true"` ou `"false"`)

```js
assert.isBoolean(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

`quickCheck(["squash", "onions", "shallots"], "mushrooms")` deve retornar `false`

```js
assert.strictEqual(
  quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'),
  false
);
```

`quickCheck(["onions", "squash", "shallots"], "onions")` deve retornar `true`

```js
assert.strictEqual(
  quickCheck(['onions', 'squash', 'shallots'], 'onions'),
  true
);
```

`quickCheck([3, 5, 9, 125, 45, 2], 125)` deve retornar `true`

```js
assert.strictEqual(quickCheck([3, 5, 9, 125, 45, 2], 125), true);
```

`quickCheck([true, false, false], undefined)` deve retornar `false`

```js
assert.strictEqual(quickCheck([true, false, false], undefined), false);
```

A função `quickCheck` deve utilizar o método `indexOf()`

```js
assert.notStrictEqual(quickCheck.toString().search(/\.indexOf\(/), -1);
```

# --seed--

## --seed-contents--

```js
function quickCheck(arr, elem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

# --solutions--

```js
function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0; 
}
```
