---
id: adf08ec01beb4f99fc7a68f2
title: 过滤数组中的假值
challengeType: 1
forumTopicId: 16014
dashedName: falsy-bouncer
---

# --description--

从数组中移除所有假值（falsy values）。 返回一个新数组；不要改变原始数组。

JavaScript 中的假值有 `false`、`null`、`0`、`""`、`undefined`、`NaN`。

提示：可以考虑将每个值都转换为布尔值（boolean）。

# --hints--

`bouncer([7, "ate", "", false, 9])` 应返回 `[7, "ate", 9]`。

```js
assert.deepEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9]);
```

`bouncer(["a", "b", "c"])` 应返回 `["a", "b", "c"]`。

```js
assert.deepEqual(bouncer(['a', 'b', 'c']), ['a', 'b', 'c']);
```

`bouncer([false, null, 0, NaN, undefined, ""])` 应返回 `[]`。

```js
assert.deepEqual(bouncer([false, null, 0, NaN, undefined, '']), []);
```

`bouncer([null, NaN, 1, 2, undefined])` 应返回 `[1, 2]`。

```js
assert.deepEqual(bouncer([null, NaN, 1, 2, undefined]), [1, 2]);
```

你不应该改变 `arr`。

```js
const arr = ['a', false, 0, 'Naomi'];
bouncer(arr);
assert.deepEqual(arr, ['a', false, 0, 'Naomi'])
```

# --seed--

## --seed-contents--

```js
function bouncer(arr) {
  return arr;
}

bouncer([7, "ate", "", false, 9]);
```

# --solutions--

```js
function bouncer(arr) {
  return arr.filter(e => e);
}

bouncer([7, "ate", "", false, 9]);
```
