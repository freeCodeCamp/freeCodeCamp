---
id: 587d7b84367417b2b2512b35
title: 捕获拼错的变量名和函数名
challengeType: 1
forumTopicId: 301186
dashedName: catch-misspelled-variable-and-function-names
---

# --description--

`console.log()` 和 `typeof` 方法是检查中间值和程序输出类型的两种主要方法。 现在是时候了解一下 bug 出现的常见的情形。 一个语法级别的问题是打字太快带来的低级拼写错误。

变量或函数名的错写、漏写或大小写弄混都会让浏览器尝试查找并不存在的东西，并报出“引用错误”。 JavaScript 变量和函数名称区分大小写。

# --instructions--

修复代码中的两个拼写错误，以便 `netWorkingCapital` 计算有效。

# --hints--

检查计算 netWorkingCapital 值时使用的两个变量的拼写是否正确，控制台应该输出 "Net working capital is: 2"。

```js
assert(netWorkingCapital === 2);
```

代码中不应该有拼写错误的变量实例。

```js
assert(!code.match(/recievables/g));
```

应在代码中声明并正确使用 `receivables` 变量。

```js
assert(code.match(/receivables/g).length == 2);
```

代码中不应该有拼写错误的变量实例。

```js
assert(!code.match(/payable;/g));
```

应在代码中声明并正确使用 `payables` 变量。

```js
assert(code.match(/payables/g).length == 2);
```

# --seed--

## --seed-contents--

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;
console.log(`Net working capital is: ${netWorkingCapital}`);
```

# --solutions--

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);
```
