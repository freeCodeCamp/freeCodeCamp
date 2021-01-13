---
id: 56533eb9ac21ba0edf2244c3
title: 用返回值来赋值
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2pEtB'
forumTopicId: 16658
dashedName: assignment-with-a-returned-value
---

# --description--

如果你还记得我们在这一节[使用赋值运算符存储值](/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator)的讨论，赋值之前，先完成等号右边的操作。这意味着我们可把一个函数的返回值，赋值给一个变量。

假设我们预先定义的函数`sum`其功能就是将两个数字相加，那么：

`ourSum = sum(5, 12);`

将调用`sum`函数，返回`return`了一个数值`17`，然后把它赋值给了`ourSum`变量。

# --instructions--

调用`processArg`函数并给参数一个值`7`，然后把返回的值赋值给变量`processed`。

# --hints--

`processed`的值应该是`2`。

```js
assert(processed === 2);
```

你应该把`processArg`的返回值赋给`processed`。

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
