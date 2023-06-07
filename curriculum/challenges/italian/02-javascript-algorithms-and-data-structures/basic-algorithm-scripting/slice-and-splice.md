---
id: 579e2a2c335b9d72dd32e05c
title: Taglia e incolla
challengeType: 1
forumTopicId: 301148
dashedName: slice-and-splice
---

# --description--

Ti vengono dati due array e un indice.

Copia ogni elemento del primo array nel secondo array, in ordine.

Inizia inserendo gli elementi all'indice `n` del secondo array.

Restituisci l'array risultante. Gli array di input dovrebbero rimanere gli stessi dopo l'esecuzione della funzione.

# --hints--

`frankenSplice([1, 2, 3], [4, 5], 1)` dovrebbe restituire `[4, 1, 2, 3, 5]`.

```js
assert.deepEqual(frankenSplice([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5]);
```

`frankenSplice([1, 2], ["a", "b"], 1)` dovrebbe restituire `["a", 1, 2, "b"]`.

```js
assert.deepEqual(frankenSplice(testArr1, testArr2, 1), ['a', 1, 2, 'b']);
```

`frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)` dovrebbe restituire `["head", "shoulders", "claw", "tentacle", "knees", "toes"]`.

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

Tutti gli elementi del primo array dovrebbero essere aggiunti al secondo array nel loro ordine originale. `frankenSplice([1, 2, 3, 4], [], 0)` dovrebbe restituire `[1, 2, 3, 4]`.

```js
assert.deepEqual(frankenSplice([1, 2, 3, 4], [], 0), [1, 2, 3, 4]);
```

Il primo array dovrebbe rimanere lo stesso dopo l'esecuzione della funzione.

```js
frankenSplice(testArr1, testArr2, 1);
assert.deepEqual(testArr1, [1, 2]);
```

Il secondo array dovrebbe rimanere lo stesso dopo l'esecuzione della funzione.

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
