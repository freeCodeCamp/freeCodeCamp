---
id: 594810f028c0303b75339acb
title: 100 portas
challengeType: 1
forumTopicId: 302217
dashedName: 100-doors
---

# --description--

There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.

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
