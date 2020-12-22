---
id: 595671d4d2cdc305f0d5b36f
title: 来自两个数组的哈希
challengeType: 5
videoUrl: ''
---

# --description--

任务：

使用两个相等长度的数组，创建一个Hash对象，其中一个数组中的元素（键）链接到另一个数组（值）

相关任务： [关联数组/创建](<http://rosettacode.org/wiki/Associative arrays/Creation> "关联数组/创建")

# --hints--

`arrToObj`是一个功能。

```js
assert(typeof arrToObj === 'function');
```

`arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d", "e"])`应返回`{ 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" }`

```js
assert.deepEqual(arrToObj(...testCases[0]), res[0]);
```

`arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d"])`应返回`{ 1: "a", 2: "b", 3: "c", 4: "d", 5: undefined }`

```js
assert.deepEqual(arrToObj(...testCases[1]), res[1]);
```

`arrToObj([1, 2, 3], ["a", "b", "c", "d", "e"])`应返回`{ 1: "a", 2: "b", 3: "c" }`

```js
assert.deepEqual(arrToObj(...testCases[2]), res[2]);
```

`arrToObj(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5])`应返回`{ "a": 1, "b": 2, "c": 3 , "d": 4, "e": 5 }`

```js
assert.deepEqual(arrToObj(...testCases[3]), res[3]);
```

`arrToObj(["a", "b", "c", "d", "e"], [1, 2, 3, 4])`应返回`{ "a": 1, "b": 2, "c": 3 , "d": 4, "e": undefined }`

```js
assert.deepEqual(arrToObj(...testCases[4]), res[4]);
```

`arrToObj(["a", "b", "c"], [1, 2, 3, 4, 5])`应返回`{ "a": 1, "b": 2, "c": 3 }`

```js
assert.deepEqual(arrToObj(...testCases[5]), res[5]);
```

# --solutions--

