---
id: 587d7b7e367417b2b2512b24
title: 使用三元運算符
challengeType: 1
forumTopicId: 301181
dashedName: use-the-conditional-ternary-operator
---

# --description--

條件運算符（ <dfn>conditional operator</dfn>,）（也稱爲三元運算符（ <dfn>ternary operator</dfn>））的就像寫成一行的 if-else 表達式

語法是：`a ? b : c`, where `a` 是條件，當條件返回 `true` 的時候運行代碼 `b`，當條件返回 `false` 的時候運行代碼 `c`。

以下函數使用 `if/else` 語句來檢查條件：

```js
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
```

這可以使用三元運算符重寫：

```js
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
```

# --instructions--

在 `checkEqual` 函數中使用三元運算符檢查兩個數字是否相等。 函數應該返回 `Equal` 或字符串 `Not Equal`。

# --hints--

`checkEqual` 應該使用條件運算符。

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?/.test(code));
```

`checkEqual(1, 2)` 應該返回字符串 `Not Equal`

```js
assert(checkEqual(1, 2) === 'Not Equal');
```

`checkEqual(1, 1)` 應該返回字符串 `Equal`

```js
assert(checkEqual(1, 1) === 'Equal');
```

`checkEqual(1, -1)` 應該返回字符串 `Not Equal`

```js
assert(checkEqual(1, -1) === 'Not Equal');
```

# --seed--

## --seed-contents--

```js
function checkEqual(a, b) {

}

checkEqual(1, 2);
```

# --solutions--

```js
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
```
