---
id: 5ee127a03c3b35dd45426493
title: 将变量的值赋给另一个变量
challengeType: 1
videoUrl: ''
forumTopicId: 418265
dashedName: assigning-the-value-of-one-variable-to-another
---

# --description--

使用<dfn>赋值</dfn>运算符将值赋给变量后，我们可以继续使用<dfn>赋值</dfn>运算符将这个变量的值赋给其它变量。

```js
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
```

在上面的代码中，我们声明了没有初始值的 `myVar` 变量，然后给它赋值 `5`。接下来，我们又声明了没有初始值的变量 `myNum`。之后，`myVar` 的值 `5` 被赋给了变量 `myNum`。现在，`myNum` 的值也是 `5`。

# --instructions--

请把 `a` 的值赋给 `b`。

# --hints--

不应修改注释上方的代码。

```js
assert(/var a;/.test(code) && /a = 7;/.test(code) && /var b;/.test(code));
```

`b` 的值应为 7。

```js
assert(typeof b === 'number' && b === 7);
```

`a` 的值应通过 `=` 运算符赋给 `b`。

```js
assert(/b\s*=\s*a\s*/g.test(code));
```

# --seed--

## --before-user-code--

```js
if (typeof a != 'undefined') {
  a = undefined;
}
if (typeof b != 'undefined') {
  b = undefined;
}
```

## --after-user-code--

```js
(function(a, b) {
  return 'a = ' + a + ', b = ' + b;
})(a, b);
```

## --seed-contents--

```js
// Setup
var a;
a = 7;
var b;

// Only change code below this line
```

# --solutions--

```js
var a;
a = 7;
var b;
b = a;
```
