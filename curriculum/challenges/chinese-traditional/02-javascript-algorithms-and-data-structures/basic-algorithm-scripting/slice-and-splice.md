---
id: 579e2a2c335b9d72dd32e05c
title: Slice 與 Splice
challengeType: 1
forumTopicId: 301148
dashedName: slice-and-splice
---

# --description--

本挑戰的輸入參數爲兩個數組和一個索引值。

將第一個數組中的所有元素依次複製到第二個數組中。

請注意，你需要從第二個數組索引值爲 `n` 的地方開始插入。

最後，請返回插入元素後的數組。 作爲輸入參數的兩個數組在函數執行前後應保持不變。

# --hints--

`frankenSplice([1, 2, 3], [4, 5], 1)` 應返回 `[4, 1, 2, 3, 5]`。

```js
assert.deepEqual(frankenSplice([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5]);
```

`frankenSplice([1, 2], ["a", "b"], 1)` 應返回 `["a", 1, 2, "b"]`。

```js
assert.deepEqual(frankenSplice(testArr1, testArr2, 1), ['a', 1, 2, 'b']);
```

`frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)` 應返回 `["head", "shoulders", "claw", "tentacle", "knees", "toes"]`。

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

第一個數組中的所有元素都應按原始順序添加到第二個數組中。 `frankenSplice([1, 2, 3, 4], [], 0)` 應返回 `[1, 2, 3, 4]`。

```js
assert.deepEqual(frankenSplice([1, 2, 3, 4], [], 0), [1, 2, 3, 4]);
```

函數運行後，第一個數組應保持不變。

```js
frankenSplice(testArr1, testArr2, 1);
assert.deepEqual(testArr1, [1, 2]);
```

函數運行後，第二個數組應保持不變。

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
