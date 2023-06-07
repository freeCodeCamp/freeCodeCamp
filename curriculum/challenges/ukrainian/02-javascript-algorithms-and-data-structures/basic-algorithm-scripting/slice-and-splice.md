---
id: 579e2a2c335b9d72dd32e05c
title: Slice та Splice
challengeType: 1
forumTopicId: 301148
dashedName: slice-and-splice
---

# --description--

Вам надано два масиви та індекс.

Скопіюйте кожний елемент з першого масиву у другий за порядком.

Розпочніть вставляти елементи з індексу `n` другого масиву.

Поверніть отриманий масив. Вхідні масиви повинні залишатись незмінними після запуску функції.

# --hints--

`frankenSplice([1, 2, 3], [4, 5], 1)` має повертати `[4, 1, 2, 3, 5]`.

```js
assert.deepEqual(frankenSplice([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5]);
```

`frankenSplice([1, 2], ["a", "b"], 1)` має повертати `["a", 1, 2, "b"]`.

```js
assert.deepEqual(frankenSplice(testArr1, testArr2, 1), ['a', 1, 2, 'b']);
```

`frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)` має повертати `["head", "shoulders", "claw", "tentacle", "knees", "toes"]`.

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

Всі елементи з першого масиву повинні бути доданими до другого масиву за початковим порядком. `frankenSplice([1, 2, 3, 4], [], 0)` має повертати `[1, 2, 3, 4]`.

```js
assert.deepEqual(frankenSplice([1, 2, 3, 4], [], 0), [1, 2, 3, 4]);
```

Перший масив повинен залишатись незмінним після запуску функції.

```js
frankenSplice(testArr1, testArr2, 1);
assert.deepEqual(testArr1, [1, 2]);
```

Другий масив повинен залишатись незмінним після запуску функції.

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
