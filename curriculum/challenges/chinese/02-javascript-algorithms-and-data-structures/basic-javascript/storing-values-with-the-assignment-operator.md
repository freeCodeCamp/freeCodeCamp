---
id: 56533eb9ac21ba0edf2244a8
title: 使用赋值运算符存储值
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEanysE'
forumTopicId: 18310
dashedName: storing-values-with-the-assignment-operator
---

# --description--

在 JavaScript 中，你可以使用赋值运算符将值存储在变量中。

`myVariable = 5;`

这条语句把`Number`类型的值`5`赋给变量`myVariable`。

赋值过程是从右到左进行的。在将值分配给运算符左侧的变量之前，将解析`=`运算符右侧的所有内容。

```js
myVar = 5;
myNum = myVar;
```

数值`5`被赋给变量`myVar`中，然后再次将变量`myVar`解析为`5`并将其赋给`myNum`变量。

# --instructions--

把数值`7`赋给变量 `a`。

把变量`a`中的内容赋给变量`b`。

# --hints--

不要修改注释上方的代码。

```js
assert(/var a;/.test(code) && /var b = 2;/.test(code));
```

`a`的值应该是 7。

```js
assert(typeof a === 'number' && a === 7);
```

`b`的值应该是 7。

```js
assert(typeof b === 'number' && b === 7);
```

你需要用`=`把`a`的值赋给`b`。

```js
assert(/b\s*=\s*a\s*;/g.test(code));
```

# --seed--

## --before-user-code--

```js
if (typeof a != 'undefined') {
  a = undefined;
}
```

## --after-user-code--

```js
(function(a){return "a = " + a;})(a);
```

## --seed-contents--

```js
// Setup
var a;

// Only change code below this line
```

# --solutions--

```js
var a;
a = 7;
```
