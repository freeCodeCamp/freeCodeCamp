---
id: 587d7b7e367417b2b2512b24
title: 使用三元运算符
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JRmSg'
forumTopicId: 301181
---

# --description--

条件运算符（也称为三元运算符）的用处就像写成一行的 if-else 表达式

语法如下所示：

`condition ? statement-if-true : statement-if-false;`

以下函数使用 if-else 语句来检查条件：

```js
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

上面的函数使用条件运算符写法如下：

```js
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}
```

# --instructions--

在`checkEqual`函数中使用条件运算符检查两个数字是否相等，函数应该返回 "Equal" 或 "Not Equal"

# --hints--

`checkEqual`应该使用条件运算符。

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?/.test(code));
```

`checkEqual(1, 2)`应该返回 "Not Equal"。

```js
assert(checkEqual(1, 2) === 'Not Equal');
```

`checkEqual(1, 1)`应该返回 "Equal"。

```js
assert(checkEqual(1, 1) === 'Equal');
```

`checkEqual(1, -1)`应该返回 "Not Equal"。

```js
assert(checkEqual(1, -1) === 'Not Equal');
```

# --solutions--

