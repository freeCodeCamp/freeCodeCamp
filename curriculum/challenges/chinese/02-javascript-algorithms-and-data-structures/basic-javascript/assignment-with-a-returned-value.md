---
id: 56533eb9ac21ba0edf2244c3
title: 使用返回值赋值
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2pEtB'
forumTopicId: 16658
dashedName: assignment-with-a-returned-value
---

# --description--

如果你还记得我们在[使用赋值运算符存储值](/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator)中的讨论的话，等号右侧的所有操作都会在赋值之前完成。 这意味着我们可以获取函数的返回值，并将其赋值给一个变量。

假设我们有一个预先定义的函数 `sum` ，它将两个数相加，然后：

`ourSum = sum(5, 12);`

将会调用函数 `sum`，函数返回值 `17`，然后将该值赋给变量 `ourSum`。

# --instructions--

调用函数 `processArg`，传入参数 `7`，并将它的返回值赋给变量 `processed`。

# --hints--

`processed` 的值应为 `2`。

```js
assert(processed === 2);
```

你应该将 `processArg` 赋值给 `processed`。

```js
assert(/processed\s*=\s*processArg\(\s*7\s*\)/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(){return "processed = " + processed})();
```

## --seed-contents--

```js
// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
```

# --solutions--

```js
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
```
