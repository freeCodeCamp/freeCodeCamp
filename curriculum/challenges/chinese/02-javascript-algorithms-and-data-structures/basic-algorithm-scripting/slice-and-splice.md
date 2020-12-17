---
id: 579e2a2c335b9d72dd32e05c
title: 切片和拼接
challengeType: 5
forumTopicId: 301148
---

# --description--

您将获得两个数组和一个索引。使用数组方法`slice`和`splice`按顺序将第一个数组的每个元素复制到第二个数组中。开始在第二个数组的索引`n`处插入元素。返回结果数组。函数运行后，输入数组应保持不变。如果卡住，请记得使用[Read-Search-Ask](https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514) 。编写自己的代码。

# --hints--

`frankenSplice([1, 2, 3], [4, 5], 1)`应该返回`[4, 1, 2, 3, 5]`。

```js
assert.deepEqual(frankenSplice([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5]);
```

`frankenSplice([1, 2], ["a", "b"], 1)` 应返回 `["a", 1, 2, "b"]`

```js
assert.deepEqual(frankenSplice(testArr1, testArr2, 1), ['a', 1, 2, 'b']);
```

`frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)` 应该返回 `["head", "shoulders", "claw", "tentacle", "knees", "toes"]`

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

第一个数组中的所有元素都应按原始顺序添加到第二个数组中。

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

# --solutions--
