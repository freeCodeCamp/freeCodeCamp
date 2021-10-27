---
id: 56533eb9ac21ba0edf2244b0
title: 复合赋值之 -=
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2Qv7AV'
forumTopicId: 16660
dashedName: compound-assignment-with-augmented-subtraction
---

# --description--

与 `+=` 操作符类似，`-=` 操作符用来对一个变量进行减法赋值操作。

```js
myVar = myVar - 5;
```

将从 `myVar` 中减去 `5`。 等价于：

```js
myVar -= 5;
```

# --instructions--

使用 `-=` 操作符对 `a`、`b` 和 `c` 实现相减赋值操作。

# --hints--

`a` 应该等于 `5`。

```js
assert(a === 5);
```

`b` 应该等于 `-6`。

```js
assert(b === -6);
```

`c` 应该等于 `2`。

```js
assert(c === 2);
```

应该对每个变量使用 `-=` 操作符。

```js
assert(code.match(/-=/g).length === 3);
```

不要修改注释上面的代码。

```js
assert(
  /let a = 11;/.test(code) && /let b = 9;/.test(code) && /let c = 3;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a = a - 6;
b = b - 15;
c = c - 1;
```

# --solutions--

```js
let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;
```
