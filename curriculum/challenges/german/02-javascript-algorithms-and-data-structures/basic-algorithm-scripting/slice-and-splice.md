---
id: 579e2a2c335b9d72dd32e05c
title: Slice und Splice
challengeType: 1
forumTopicId: 301148
dashedName: slice-and-splice
---

# --description--

Du erhältst zwei Arrays und einen Index.

Kopiere jedes Element des ersten Arrays in derselben Reihenfolge in das zweite Array.

Füge die Elemente beginnend mit dem Index `n` des zweiten Arrays ein.

Gib das resultierende Array zurück. Beide Input-Arrays sollten nach dem Ausführen der Funktion unverändert sein.

# --hints--

`frankenSplice([1, 2, 3], [4, 5], 1)` sollte `[4, 1, 2, 3, 5]` zurückgeben.

```js
assert.deepEqual(frankenSplice([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5]);
```

`frankenSplice([1, 2], ["a", "b"], 1)` sollte `["a", 1, 2, "b"]` zurückgeben.

```js
assert.deepEqual(frankenSplice(testArr1, testArr2, 1), ['a', 1, 2, 'b']);
```

`frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)` sollte `["head", "shoulders", "claw", "tentacle", "knees", "toes"]` zurückgeben.

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

Alle Elemente des ersten Arrays sollten in ihrer ursprünglichen Reihenfolgen zum zweiten Array hinzugefügt werden. `frankenSplice([1, 2, 3, 4], [], 0)` sollte `[1, 2, 3, 4]` zurückgeben.

```js
assert.deepEqual(frankenSplice([1, 2, 3, 4], [], 0), [1, 2, 3, 4]);
```

Das erste Array sollte nach dem Ausführen der Funktion unverändert bleiben.

```js
frankenSplice(testArr1, testArr2, 1);
assert.deepEqual(testArr1, [1, 2]);
```

Das zweite Array sollte nach dem Ausführen der Funktion unverändert bleiben.

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
