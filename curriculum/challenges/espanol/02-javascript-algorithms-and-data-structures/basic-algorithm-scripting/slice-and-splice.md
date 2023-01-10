---
id: 579e2a2c335b9d72dd32e05c
title: Cortar y rebanar
challengeType: 1
forumTopicId: 301148
dashedName: slice-and-splice
---

# --description--

Tienes dos arreglos y un índice.

Copia cada elemento del primer arreglo en el segundo arreglo, en orden.

Comienza insertando elementos en el índice `n` del segundo arreglo.

Devuelve el arreglo resultante. Los arreglos de entrada deben permanecer iguales luego de que se ejecute la función.

# --hints--

`frankenSplice([1, 2, 3], [4, 5], 1)` debe devolver `[4, 1, 2, 3, 5]`.

```js
assert.deepEqual(frankenSplice([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5]);
```

`frankenSplice([1, 2], ["a", "b"], 1)` debe devolver `["a", 1, 2, "b"]`.

```js
assert.deepEqual(frankenSplice(testArr1, testArr2, 1), ['a', 1, 2, 'b']);
```

`frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)` debe devolver `["head", "shoulders", "claw", "tentacle", "knees", "toes"]`.

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

Todos los elementos del primer arreglo deben ser añadidos al segundo arreglo en su orden original. `frankenSplice([1, 2, 3, 4], [], 0)` debe devolver `[1, 2, 3, 4]`.

```js
assert.deepEqual(frankenSplice([1, 2, 3, 4], [], 0), [1, 2, 3, 4]);
```

El primer arreglo debe permanecer igual después de ejecutar la función.

```js
frankenSplice(testArr1, testArr2, 1);
assert.deepEqual(testArr1, [1, 2]);
```

El segundo arreglo debe permanecer igual después de ejecutar la función.

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
