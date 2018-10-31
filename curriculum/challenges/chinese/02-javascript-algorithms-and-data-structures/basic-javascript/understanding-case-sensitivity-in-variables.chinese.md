---
id: 56533eb9ac21ba0edf2244ab
title: Understanding Case Sensitivity in Variables
challengeType: 1
videoUrl: ''
localeTitle: 了解变量中的大小写敏感度
---

## Description
<section id="description">在JavaScript中，所有变量和函数名称都区分大小写。这意味着资本化很重要。 <code>MYVAR</code>与<code>MyVar</code>和<code>myvar</code> 。可以有多个具有相同名称但不同外壳的不同变量。强烈建议您为清晰起见， <em>不要</em>使用此语言功能。 <h4>最佳实践</h4>在<dfn>camelCase中用</dfn> JavaScript编写变量名。在<dfn>camelCase中</dfn> ，多字变量名称的第一个单词为小写，每个后续单词的首字母大写。 <strong>例子：</strong> <blockquote> var someVariable; <br> var anotherVariableName; <br> var thisVariableNameIsSoLong; </blockquote></section>

## Instructions
<section id="instructions">修改现有的声明和赋值，使其名称使用<dfn>camelCase</dfn> 。 <br>不要创建任何新变量。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>studlyCapVar</code>已定义且值为<code>10</code>
    testString: 'assert(typeof studlyCapVar !== "undefined" && studlyCapVar === 10, "<code>studlyCapVar</code> is defined and has a value of <code>10</code>");'
  - text: <code>properCamelCase</code>已定义且值为<code>&quot;A String&quot;</code>
    testString: 'assert(typeof properCamelCase !== "undefined" && properCamelCase === "A String", "<code>properCamelCase</code> is defined and has a value of <code>"A String"</code>");'
  - text: <code>titleCaseOver</code>已定义，其值为<code>9000</code>
    testString: 'assert(typeof titleCaseOver !== "undefined" && titleCaseOver === 9000, "<code>titleCaseOver</code> is defined and has a value of <code>9000</code>");'
  - text: <code>studlyCapVar</code>应该在声明和赋值部分使用camelCase。
    testString: 'assert(code.match(/studlyCapVar/g).length === 2, "<code>studlyCapVar</code> should use camelCase in both declaration and assignment sections.");'
  - text: <code>properCamelCase</code>应该在声明和赋值部分使用camelCase。
    testString: 'assert(code.match(/properCamelCase/g).length === 2, "<code>properCamelCase</code> should use camelCase in both declaration and assignment sections.");'
  - text: <code>titleCaseOver</code>应该在声明和赋值部分使用camelCase。
    testString: 'assert(code.match(/titleCaseOver/g).length === 2, "<code>titleCaseOver</code> should use camelCase in both declaration and assignment sections.");'

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
// solution required
```
</section>
