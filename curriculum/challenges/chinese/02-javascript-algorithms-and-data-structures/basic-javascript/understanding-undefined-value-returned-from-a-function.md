---
id: 598e8944f009e646fc236146
title: 函数也可以返回 undefined
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2p7cL'
forumTopicId: 301177
---

# --description--

函数一般用`return`语句来返回值，但这不是必须的。在函数没有`return`语句的情况下，当你调用它时，该函数会执行内部代码，返回的值是`undefined`。

**示例**

```js
var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3); // sum will be modified but returned value is undefined
```

`addSum`是一个没有`return`语句的函数。该函数将更改全局变量`sum`，函数的返回值为`undefined`。

# --instructions--

创建一个没有任何参数的函数`addFive`。此函数使`sum`变量加 5，但其返回值是`undefined`。

# --hints--

`addFive`应该是一个函数。

```js
assert(typeof addFive === 'function');
```

`sum`应该等于 8。

```js
assert(sum === 8);
```

`addFive`的返回值应该是`undefined`。

```js
assert(addFive() === undefined);
```

函数给变量 `sum` 加 5。

```js
assert(
  addFive
    .toString()
    .replace(/\s/g, '')
    .match(/sum=sum\+5|sum\+=5/)
);
```

# --solutions--

