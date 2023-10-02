---
id: bd7123c9c443eddfaeb5bdef
title: 声明变量
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNanrHq'
forumTopicId: 17556
dashedName: declare-javascript-variables
---

# --description--

在计算机科学中，<dfn>数据</dfn>就是一切，它对于计算机意义重大。 JavaScript 提供八种不同的<dfn>数据类型</dfn>，它们是 `undefined`（未定义）、`null`（空）、`boolean`（布尔型）、`string`（字符串）、`symbol`、`number`（数字）、`bigint`（可以表示任意大的整数）和 `object`（对象）。

例如，计算机区分数字，例如 `12`，和由字符组成的字符串 `strings`，例如 `"12"`、`"dog"` 或 `"123 cats"`。 计算机可以对数字执行数学运算，但不能对字符串执行数学运算。

<dfn>变量</dfn>允许计算机以一种动态的形式来存储和操作数据， 即通过操作指向数据的指针而不是数据本身来实现。 以上八种数据类型中的任何一种都可以存储到一个变量中。

变量非常类似于你在数学中使用的 x、y 变量，都是以一个简单命名的名称来代替我们赋值给它的数据。 计算机中的变量与数学中的变量不同的是，计算机可以在不同的时间存储不同类型的变量。

通过在变量前面使用关键字 `var`，<dfn>声明</dfn>一个变量，例如：

```js
var ourName;
```

上面代码的意思是创建一个名为 `ourName` 的变量。 在 JavaScript 中我们以分号结束语句。 变量名称可以由数字、字母、美元符号 `$` 或者下划线 `_` 组成，但是不能包含空格或者以数字为开头。

# --instructions--

使用 `var` 关键字来创建一个名为 `myName` 的变量。

**提示：**  
如果遇到困难了，请看下 `ourName` 的例子是怎么写的。

# --hints--

使用 `var` 关键字定义一个变量 `myName`，并使用分号结尾。

```js
assert(/var\s+myName\s*;/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof myName !== "undefined"){(function(v){return v;})(myName);}
```

## --seed-contents--

```js

```

# --solutions--

```js
var myName;
```
