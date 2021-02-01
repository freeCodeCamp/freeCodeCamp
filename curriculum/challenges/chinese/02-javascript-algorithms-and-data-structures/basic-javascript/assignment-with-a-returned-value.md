---
id: 56533eb9ac21ba0edf2244c3
title: 用返回值来赋值
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2pEtB'
forumTopicId: 16658
dashedName: assignment-with-a-returned-value
---

# --description--

在[使用赋值运算符存储值](/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator)这一挑战中我们曾提到，赋值发生之前会先完成等号右边的操作。这意味着我们可把一个函数的返回值赋给一个变量。

假设我们已经定义了函数 `sum`，它的作用就是将两个数字相加，那么：

`ourSum = sum(5, 12);`

会调用 `sum` 函数，函数返回数值 `17`，然后把它赋值给 `ourSum` 变量。

# --instructions--

请调用 `processArg` 函数并传入 `7` 作为参数，然后把返回值赋值给变量 `processed`。

# --hints--

`processed` 的值应为 `2`。

```js
assert(processed === 2);
```

应将 `processArg` 的返回值赋给 `processed`。

```js
assert(/processed\s*=\s*processArg\(\s*7\s*\)\s*;/.test(code));
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
