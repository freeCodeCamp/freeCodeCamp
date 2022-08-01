---
id: 579e2a2c335b9d72dd32e05c
title: Slice and Splice
challengeType: 1
forumTopicId: 301148
dashedName: slice-and-splice
---

# --description--

You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index `n` of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

# --hints--

`frankenSplice([1, 2, 3], [4, 5], 1)` should return `[4, 1, 2, 3, 5]`.

```js
assert.deepEqual(frankenSplice([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5]);
```

`frankenSplice([1, 2], ["a", "b"], 1)` should return `["a", 1, 2, "b"]`.

```js
assert.deepEqual(frankenSplice(testArr1, testArr2, 1), ['a', 1, 2, 'b']);
```

`frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)` should return `["head", "shoulders", "claw", "tentacle", "knees", "toes"]`.

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

All elements from the first array should be added to the second array in their original order. `frankenSplice([1, 2, 3, 4], [], 0)` should return `[1, 2, 3, 4]`.

```js
assert.deepEqual(frankenSplice([1, 2, 3, 4], [], 0), [1, 2, 3, 4]);
```

The first array should remain the same after the function runs.

```js
frankenSplice(testArr1, testArr2, 1);
assert.deepEqual(testArr1, [1, 2]);
```

The second array should remain the same after the function runs.

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
