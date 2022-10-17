---
id: 579e2a2c335b9d72dd32e05c
title: Метод Slice та Splice. Метод Slice () копіює задану частину масиву і повертає цю скопійовану частина у вигляді нового масиву. Вихідний масив при цьому не змінюється. Метод Splice () додає і видаляє елементи з масиву, змінюючи його
challengeType: 1
forumTopicId: 301148
dashedName: slice-and-splice
---

# --description--

Вам дано два масиви та індекс.

Скопіюйте кожний елемент по порядку з першого масиву у другий.

Вставляйте елементи індексу `n` до другого масиву.

Поверніться до отриманого масиву. Вхідні масиви повинні залишатись незмінними після запуску функції.

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

Додавайте усі елементи з першого масиву до другого в початковій послідовності. `frankenSplice([1, 2, 3, 4], [], 0)` має повертати `[1, 2, 3, 4]`.

```js
assert.deepEqual(frankenSplice([1, 2, 3, 4], [], 0), [1, 2, 3, 4]);
```

Перший масив залишається незмінним після запуску функції.

```js
frankenSplice(testArr1, testArr2, 1);
assert.deepEqual(testArr1, [1, 2]);
```

Другий масив залишається незмінним після запуску функції.

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
