---
id: 579e2a2c335b9d72dd32e05c
title: Slice 与 Splice
challengeType: 1
forumTopicId: 301148
dashedName: slice-and-splice
---

# --description--

本挑战的输入参数为两个数组和一个索引值。

将第一个数组中的所有元素依次复制到第二个数组中。

请注意，你需要从第二个数组索引值为 `n` 的地方开始插入。

最后，请返回插入元素后的数组。 作为输入参数的两个数组在函数执行前后应保持不变。

# --hints--

`frankenSplice([1, 2, 3], [4, 5], 1)` 应返回 `[4, 1, 2, 3, 5]`。

```js
assert.deepEqual(frankenSplice([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5]);
```

`frankenSplice([1, 2], ["a", "b"], 1)` 应返回 `["a", 1, 2, "b"]`。

```js
assert.deepEqual(frankenSplice(testArr1, testArr2, 1), ['a', 1, 2, 'b']);
```

`frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)` 应返回 `["head", "shoulders", "claw", "tentacle", "knees", "toes"]`。

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

第一个数组中的所有元素都应按原始顺序添加到第二个数组中。 `frankenSplice([1, 2, 3, 4], [], 0)` 应返回 `[1, 2, 3, 4]`。

```js
assert.deepEqual(frankenSplice([1, 2, 3, 4], [], 0), [1, 2, 3, 4]);
```

函数运行后，第一个数组应保持不变。

```js
frankenSplice(testArr1, testArr2, 1);
assert.deepEqual(testArr1, [1, 2]);
```

函数运行后，第二个数组应保持不变。

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
