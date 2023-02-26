---
id: bd7123c9c441eddfaeb5bdef
title: 理解布爾值
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9Me8t4'
forumTopicId: 301176
dashedName: understanding-boolean-values
---

# --description--

另一種數據類型是布爾（<dfn>Boolean</dfn>）。 布爾值只能是兩個值中的一個：`true` 或者 `false`。 它非常像電路開關，`true` 是 “開”，`false` 是 “關”。 這兩種狀態是互斥的。

**注意：** 布爾值是不帶引號的。 字符串 `"true"` 和 `"false"` 不是布爾值，在 JavaScript 中也沒有特殊含義。

# --instructions--

修改 `welcomeToBooleans` 函數，讓它返回 `true` 而不是 `false`。

# --hints--

`welcomeToBooleans()` 函數應該返回一個布爾值 （`true` 或者 `false`)。

```js
assert(typeof welcomeToBooleans() === 'boolean');
```

`welcomeToBooleans()` 應該返回 `true`。

```js
assert(welcomeToBooleans() === true);
```

# --seed--

## --after-user-code--

```js
welcomeToBooleans();
```

## --seed-contents--

```js
function welcomeToBooleans() {
  // Only change code below this line

  return false; // Change this line

  // Only change code above this line
}
```

# --solutions--

```js
function welcomeToBooleans() {
  return true; // Change this line
}
```
