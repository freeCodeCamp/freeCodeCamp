---
id: 579e2a2c335b9d72dd32e05c
title: Fatiar e emendar
challengeType: 1
forumTopicId: 301148
dashedName: slice-and-splice
---

# --description--

Você está recebendo dois arrays e um índice.

Copie cada elemento da primeira matriz para a segunda matriz, em ordem.

Comece inserindo elementos no índice `n` do segundo array.

Retorne o array resultante. Os arrays recebidos devem permanecer os mesmos após a função ser executada.

# --hints--

`frankenSplice([1, 2, 3], [4, 5], 1)` deve retornar `[4, 1, 2, 3, 5]`.

```js
assert.deepEqual(frankenSplice([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5]);
```

`frankenSplice([1, 2], ["a", "b"], 1)` deve retornar `["a", 1, 2, "b"]`.

```js
assert.deepEqual(frankenSplice(testArr1, testArr2, 1), ['a', 1, 2, 'b']);
```

`frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)` deve retornar `["head", "shoulders", "claw", "tentacle", "knees", "toes"]`.

```js
assert.deepEqual(
  frankenSplice(
    ['claw', 'tentacle'],
    ['head', 'shoulders', 'knees', 'toes'],
    2
  ),
  ['head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes']
);
```

Todos os elementos do primeiro array devem ser adicionados no segundo array em suas ordens originais. `frankenSplice([1, 2, 3, 4], [], 0)` deve retornar `[1, 2, 3, 4]`.

```js
assert.deepEqual(frankenSplice([1, 2, 3, 4], [], 0), [1, 2, 3, 4]);
```

O primeiro array deve permanecer o mesmo após a função ser executada.

```js
frankenSplice(testArr1, testArr2, 1);
assert.deepEqual(testArr1, [1, 2]);
```

O segundo array deve permanecer o mesmo após a função ser executada.

```js
frankenSplice(testArr1, testArr2, 1);
assert.deepEqual(testArr2, ['a', 'b']);
```

# --seed--

## --after-user-code--

```js
let testArr1 = [1, 2];
let testArr2 = ["a", "b"];
```

## --seed-contents--

```js
function frankenSplice(arr1, arr2, n) {
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
```

# --solutions--

```js
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let result = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    result.splice(n+i, 0, arr1[i]);
  }
  return result;
}

frankenSplice([1, 2, 3], [4, 5], 1);
```
