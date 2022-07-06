---
id: 56533eb9ac21ba0edf2244aa
title: 理解未初始化的变量
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBa2JAL'
forumTopicId: 18335
dashedName: understanding-uninitialized-variables
---

# --description--

当 JavaScript 中的变量被声明的时候，程序内部会给它一个初始值 `undefined`。 当你对一个值为 `undefined` 的变量进行运算操作的时候，算出来的结果将会是 `NaN`，它的意思是 <dfn>"Not a Number"</dfn>。 如果你用 `undefined` 变量连接一个字符串，你将得到一个 `undefined` 的 <dfn>字符串</dfn>。

# --instructions--

定义 3 个变量 `a`、`b`、`c`，并且分别给他们赋值：`5`、`10`、`"I am a"`，这样它们值就不会是 `undefined` 了。

# --hints--

应该定义变量 `a`，且它的值为 `6`。

```js
assert(typeof a === 'number' && a === 6);
```

应该定义变量 `b`，且它最终的值为 `15`。

```js
assert(typeof b === 'number' && b === 15);
```

变量 `c` 的值不能包含 `undefined`，应该为字符串 `I am a String!`。

```js
assert(!/undefined/.test(c) && c === 'I am a String!');
```

不要修改第二条注释下的代码。

```js
assert(
  /a = a \+ 1;/.test(code) &&
    /b = b \+ 5;/.test(code) &&
    /c = c \+ " String!";/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = '" + c + "'"; })(a,b,c);
```

## --seed-contents--

```js
// Only change code below this line
var a;
var b;
var c;
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
```

# --solutions--

```js
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
```
