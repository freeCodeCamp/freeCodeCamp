---
id: 56533eb9ac21ba0edf2244a8
title: 使用赋值运算符存储值
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEanysE'
forumTopicId: 18310
dashedName: storing-values-with-the-assignment-operator
---

# --description--

在 JavaScript 中，你可以使用赋值（<dfn>assignment</dfn>）运算符 （`=`）将值存储在变量中。

```js
myVariable = 5;
```

这条语句把 `Number` 类型的值 `5` 赋给变量 `myVariable`。

在将值赋给运算符左侧的变量之前，将先执行 `=` 运算符右侧的所有运算。

```js
var myVar;
myVar = 5;
```

首先，此代码创建一个名为 `myVar` 的变量。 然后，数值 `5` 被赋给变量 `myVar`。 现在，如果 `myVar` 再次出现在代码中，程序将会将它视为 `5`。

# --instructions--

把数值 `7` 赋给变量 `a`。

# --hints--

不应该修改注释上面的代码。

```js
assert(/var a;/.test(code));
```

`a` 的值应该为 7。

```js
assert(typeof a === 'number' && a === 7);
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
