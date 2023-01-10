---
id: 56533eb9ac21ba0edf2244c3
title: 使用返回值赋值
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2pEtB'
forumTopicId: 16658
dashedName: assignment-with-a-returned-value
---

# --description--

如果你还记得我们在这一节<a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank" rel="noopener noreferrer nofollow">使用赋值运算符存储值</a>中的讨论，赋值之前，先完成等号右边的操作。 这意味着我们可以获取函数的返回值，并将其赋值给一个变量。

假设我们有一个预先定义的函数 `sum` ，它将两个数相加，然后：

```js
ourSum = sum(5, 12);
```

将调用 `sum` 函数，该函数返回 `17` 的值并将其分配给 `ourSum` 变量。

# --instructions--

调用 `processArg` 函数，参数为 `7`，然后把返回的值赋值给变量 `processed`。

# --hints--

`processed` 的值应为 `2`。

```js
assert(processed === 2);
```

应该将 `processArg` 赋值给 `processed`。

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
let processed = 0;

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
