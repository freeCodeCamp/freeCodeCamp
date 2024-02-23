---
id: 56533eb9ac21ba0edf2244ab
title: 瞭解變量名區分大小寫
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd6GDcD'
forumTopicId: 18334
dashedName: understanding-case-sensitivity-in-variables
---

# --description--

在 JavaScript 中所有的變量和函數名都是大小寫敏感的。 要區別對待大寫字母和小寫字母。

`MYVAR` 與 `MyVar` 和 `myvar` 是不同的變量。 這有可能導致出現多個相似名字的變量。 所以強烈地建議你，爲了保持代碼清晰*不要*使用這一特性。

**最佳實踐**

使用駝峯命名法（<dfn>camelCase</dfn>）來書寫一個 Javascript 變量。 在駝峯命名法（<dfn>camelCase</dfn>）中，變量名的第一個單詞的首寫字母小寫，後面的單詞的第一個字母大寫

**示例：**

```js
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
```

# --instructions--

修改已聲明的變量，讓它們的命名符合駝峯命名法（<dfn>camelCase</dfn>）的規範。

不要創建任何新變量。

# --hints--

`studlyCapVar` 應該被定義並且值爲 `10`。

```js
assert(typeof studlyCapVar !== 'undefined' && studlyCapVar === 10);
```

`properCamelCase` 應該被定義並且值爲字符串 `A String`。

```js
assert(
  typeof properCamelCase !== 'undefined' && properCamelCase === 'A String'
);
```

`titleCaseOver` 應該被定義並且值爲 `9000`。

```js
assert(typeof titleCaseOver !== 'undefined' && titleCaseOver === 9000);
```

`studlyCapVar` 在聲明和賦值時都應該使用駝峯命名法。

```js
assert(code.match(/studlyCapVar/g).length === 2);
```

`properCamelCase` 在聲明和賦值時都應該使用駝峯命名法。

```js
assert(code.match(/properCamelCase/g).length === 2);
```

`titleCaseOver` 在聲明和賦值時都應該使用駝峯命名法。

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
