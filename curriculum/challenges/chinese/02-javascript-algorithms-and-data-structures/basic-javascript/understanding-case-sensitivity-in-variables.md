---
id: 56533eb9ac21ba0edf2244ab
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd6GDcD'
forumTopicId: 18334
title: 了解变量名区分大小写
---

## Description
<section id='description'>
在 JavaScript 中所有的变量和函数名都是大小写敏感的。要区别对待大写字母和小写字母。
<code>MYVAR</code>与<code>MyVar</code>和<code>myvar</code>是截然不同的变量。这有可能导致出现多个相似名字的的变量。所以强烈地建议你，为了保持代码清晰不要使用这一特性。
<h4>最佳实践</h4>
使用<dfn>驼峰命名法</dfn>来书写一个 Javascript 变量，在<dfn>驼峰命名法</dfn>中，变量名的第一个单词的首写字母小写，后面的单词的第一个字母大写。
<strong>示例：</strong>

```js
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
```

</section>

## Instructions
<section id='instructions'>
修改已声明的变量，让它们的命名符合<dfn>驼峰命名法</dfn>的规范。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>studlyCapVar</code>应该被定义并且值为<code>10</code>。
    testString: assert(typeof studlyCapVar !== 'undefined' && studlyCapVar === 10);
  - text: <code>properCamelCase</code>应该被定义并且值为<code>"A String"</code>。
    testString: assert(typeof properCamelCase !== 'undefined' && properCamelCase === "A String");
  - text: <code>titleCaseOver</code>应该被定义并且值为<code>9000</code>。
    testString: assert(typeof titleCaseOver !== 'undefined' && titleCaseOver === 9000);
  - text: <code>studlyCapVar</code>在声明和赋值时都应该使用驼峰命名法。
    testString: assert(code.match(/studlyCapVar/g).length === 2);
  - text: <code>properCamelCase</code> 在声明和赋值时都应该使用驼峰命名法。
    testString: assert(code.match(/properCamelCase/g).length === 2);
  - text: <code>titleCaseOver</code> 在声明和赋值时都应该使用驼峰命名法。
    testString: assert(code.match(/titleCaseOver/g).length === 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// Assignments
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;
```

</div>



</section>

## Solution
<section id='solution'>


```js
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
```

</section>
