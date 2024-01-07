---
id: 598e8944f009e646fc236146
title: 函数也可以返回 undefined
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2p7cL'
forumTopicId: 301177
dashedName: understanding-undefined-value-returned-from-a-function
---

# --description--

函数一般用 `return` 语句来返回值，但这不是必须的。 在函数没有 `return` 语句的情况下，当你调用它时，该函数会执行内部代码，返回的值是 `undefined`。

**示例**

```js
let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
```

`addSum` 是一个没有 `return` 语句的函数。 该函数将更改全局变量 `sum`，函数的返回值为 `undefined`。

# --instructions--

创建一个没有任何参数的函数 `addFive`。 此函数使 `sum` 变量加 5，但其返回值是 `undefined`。

# --hints--

`addFive` 应该是一个函数。

```js
assert(typeof addFive === 'function');
```

两个函数运行后，`sum` 应该等于 `8`。

```js
assert(sum === 8);
```

`addFive` 的返回值应该是 `undefined`。

```js
assert(addFive() === undefined);
```

在 `addFive` 函数中，应该给 `sum` 变量增加 `5`。

```js
assert(
  __helpers.removeWhiteSpace(addFive.toString()).match(/sum=sum\+5|sum\+=5/)
);
```

# --seed--

## --seed-contents--

```js
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line


// Only change code above this line

addThree();
addFive();
```

# --solutions--

```js
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree();
addFive();
```
