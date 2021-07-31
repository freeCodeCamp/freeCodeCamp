---
id: 56533eb9ac21ba0edf2244ab
title: 了解变量名区分大小写
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd6GDcD'
forumTopicId: 18334
dashedName: understanding-case-sensitivity-in-variables
---

# --description--

在 JavaScript 中所有的变量和函数名都是大小写敏感的。 要区别对待大写字母和小写字母。

`MYVAR` 与 `MyVar` 和 `myvar` 是不同的变量。 这有可能导致出现多个相似名字的变量。 所以强烈地建议你，为了保持代码清晰*不要*使用这一特性。

**最佳实践**

使用驼峰命名法（<dfn>camelCase</dfn>）来书写一个 Javascript 变量。 在驼峰命名法（<dfn>camelCase</dfn>）中，变量名的第一个单词的首写字母小写，后面的单词的第一个字母大写

**示例：**

```js
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
```

# --instructions--

修改已声明的变量，让它们的命名符合驼峰命名法（<dfn>camelCase</dfn>）的规范。

不要创建任何新变量。

# --hints--

`studlyCapVar` 应该被定义并且值为 `10`。

```js
assert(typeof studlyCapVar !== 'undefined' && studlyCapVar === 10);
```

`properCamelCase` 应该被定义并且值为字符串 `A String`。

```js
assert(
  typeof properCamelCase !== 'undefined' && properCamelCase === 'A String'
);
```

`titleCaseOver` 应该被定义并且值为 `9000`。

```js
assert(typeof titleCaseOver !== 'undefined' && titleCaseOver === 9000);
```

`studlyCapVar` 在声明和赋值时都应该使用驼峰命名法。

```js
assert(code.match(/studlyCapVar/g).length === 2);
```

`properCamelCase` 在声明和赋值时都应该使用驼峰命名法。

```js
assert(code.match(/properCamelCase/g).length === 2);
```

`titleCaseOver` 在声明和赋值时都应该使用驼峰命名法。

```js
assert(code.match(/titleCaseOver/g).length === 2);
```

# --seed--

## --seed-contents--

```js
// Variable declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// Variable assignments
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;
```

# --solutions--

```js
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
```
