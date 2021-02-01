---
id: bd7123c9c443eddfaeb5bdef
title: 声明变量
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNanrHq'
forumTopicId: 17556
dashedName: declare-javascript-variables
---

# --description--

在计算机科学中，<dfn>数据</dfn>就是一切，它对于计算机意义重大。JavaScript 提供七种不同的<dfn>数据类型</dfn>，它们是`undefined`（未定义）， `null`（空），`boolean`（布尔型），`string`（字符串），`symbol`(符号)，`number`（数字），和`object`（对象）。

例如，计算机区分数字和字符集合的字符串，例如数字`12`和字符串`"12"`，`"dog"`或`"123 cats"`。计算机可以对数字执行数学运算，但不能对字符串执行数学运算。

<dfn>变量</dfn>允许计算机以一种动态的形式来存储和操作数据，通过操作指向数据的指针而不是数据本身来避免了内存泄露，以上的七种数据类型都可以存储到一个变量中。

`变量`非常类似于你在数学中使用的 x，y 变量，都是以一个简单命名的名称来代替我们赋值给它的数据。计算机中的`变量`与数学中的变量不同的是，计算机可以在不同的时间存储不同类型的变量。

通过在变量的前面使用关键字`var`，声明一个变量，例如：

```js
var ourName;
```

上面代码的意思是创建一个名为`ourName`的`变量`，在 JavaScript 中我们以分号结束语句。 `变量`名称可以由数字、字母、美元符号`$` 或者 下划线`_`组成，但是不能包含空格或者以数字为开头。

# --instructions--

使用`var` 关键字来创建一个名为`myName`的变量。

**提示**  
如果遇到困难了，请看下`ourName`的例子是怎么写的。

# --hints--

你需要使用`var`关键字定义一个变量`myName`，并使用分号结尾。

```js
assert(
  /var\s+myName\s*;/.test(code),
  '你需要使用<code>var</code>关键字定义一个变量<code>myName</code>。并使用分号结尾。'
);
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
