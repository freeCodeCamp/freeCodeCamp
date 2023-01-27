---
id: adf08ec01beb4f99fc7a68f2
title: 過濾數組中的假值
challengeType: 1
forumTopicId: 16014
dashedName: falsy-bouncer
---

# --description--

從數組中移除所有假值（falsy values）。 返回一個新數組；不要改變原始數組。

JavaScript 中的假值有 `false`、`null`、`0`、`""`、`undefined`、`NaN`。

提示：可以考慮將每個值都轉換爲布爾值（boolean）。

# --hints--

`bouncer([7, "ate", "", false, 9])` 應返回 `[7, "ate", 9]`。

```js
assert.deepEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9]);
```

`bouncer(["a", "b", "c"])` 應返回 `["a", "b", "c"]`。

```js
assert.deepEqual(bouncer(['a', 'b', 'c']), ['a', 'b', 'c']);
```

`bouncer([false, null, 0, NaN, undefined, ""])` 應返回 `[]`。

```js
assert.deepEqual(bouncer([false, null, 0, NaN, undefined, '']), []);
```

`bouncer([null, NaN, 1, 2, undefined])` 應返回 `[1, 2]`。

```js
assert.deepEqual(bouncer([null, NaN, 1, 2, undefined]), [1, 2]);
```

你不應該改變 `arr`。

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
