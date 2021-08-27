---
id: 587d7b7e367417b2b2512b24
title: 使用三元运算符
challengeType: 1
forumTopicId: 301181
dashedName: use-the-conditional-ternary-operator
---

# --description--

条件运算符（ <dfn>conditional operator</dfn>,）（也称为三元运算符（ <dfn>ternary operator</dfn>））的就像写成一行的 if-else 表达式

语法是：`a ? b : c`, where `a` 是条件，当条件返回 `true` 的时候运行代码 `b`，当条件返回 `false` 的时候运行代码 `c`。

以下函数使用 `if/else` 语句来检查条件：

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

这可以使用三元运算符重写：

```js
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
```

# --instructions--

在 `checkEqual` 函数中使用三元运算符检查两个数字是否相等。 函数应该返回 `Equal` 或字符串 `Not Equal`。

# --hints--

`checkEqual` 应该使用条件运算符。

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?/.test(code));
```

`checkEqual(1, 2)` 应该返回字符串 `Not Equal`

```js
assert(checkEqual(1, 2) === 'Not Equal');
```

`checkEqual(1, 1)` 应该返回字符串 `Equal`

```js
assert(checkEqual(1, 1) === 'Equal');
```

`checkEqual(1, -1)` 应该返回字符串 `Not Equal`

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
