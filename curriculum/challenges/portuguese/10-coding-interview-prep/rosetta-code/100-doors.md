---
id: 594810f028c0303b75339acb
title: 100 portas
challengeType: 1
forumTopicId: 302217
dashedName: 100-doors
---

# --description--

Há 100 portas seguidas que estão todas fechadas inicialmente. Você faz 100 passagens pelas portas. A primeira vez que passar, visite todas as portas e 'alterne' a porta (se a porta estiver fechada, abra-a; se estiver aberta, feche-a). Na segunda vez, só visite as portas pares (ou seja, as porta 2, 4, 6, ...) e alterne-as. Na terceira vez, visite as portas de 3 em 3 (por exemplo, as portas 3, 6, 9, ...), até que você só visite a porta 100.

# --instructions--

Implemente uma função para determinar o estado das portas após a último passagem. Retorne o resultado final em um array, com o número da porta incluído no array apenas se ela estiver aberta.

# --hints--

`getFinalOpenedDoors` deve ser uma função.

```js
assert(typeof getFinalOpenedDoors === 'function');
```

`getFinalOpenedDoors` deve retornar um array.

```js
assert(Array.isArray(getFinalOpenedDoors(100)));
```

`getFinalOpenedDoors` deve produzir o resultado correto.

```js
assert.deepEqual(getFinalOpenedDoors(100), solution);
```

# --seed--

## --after-user-code--

```js
const solution = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
```

## --seed-contents--

```js
function getFinalOpenedDoors(numDoors) {

}
```

# --solutions--

```js
function getFinalOpenedDoors(numDoors) {
  // this is the final pattern (always squares).
  // thus, the most efficient solution simply returns an array of squares up to numDoors).
  const finalState = [];
  let i = 1;
  while (Math.pow(i, 2) <= numDoors) {
    finalState.push(Math.pow(i, 2));
    i++;
  }
  return finalState;
}
```
