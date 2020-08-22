---
id: 587d7b84367417b2b2512b34
title: Use typeof to Check the Type of a Variable
challengeType: 1
videoUrl: ''
localeTitle: 使用typeof检查变量的类型
---

## Description
<section id="description">您可以使用<code>typeof</code>检查变量的数据结构或类型。在处理多种数据类型时，这在调试时很有用。如果您认为您正在添加两个数字，但其中一个实际上是一个字符串，则结果可能是意外的。类型错误可能潜伏在计算或函数调用中。特别是当您以JavaScript Object Notation（JSON）对象的形式访问和使用外部数据时要特别小心。以下是使用<code>typeof</code>一些示例： <blockquote> console.log（typeof“”）; //输出“string” <br> console.log（typeof 0）; //输出“数字” <br> console.log（typeof []）; //输出“对象” <br> console.log（typeof {}）; //输出“对象” </blockquote> JavaScript识别六种原始（不可变）数据类型： <code>Boolean</code> ， <code>Null</code> ， <code>Undefined</code> ， <code>Number</code> ， <code>String</code>和<code>Symbol</code> （ES6新增）和可变项的一种类型： <code>Object</code> 。请注意，在JavaScript中，数组在技术上是一种对象。 </section>

## Instructions
<section id="instructions">添加两个<code>console.log()</code>语句来检查<code>typeof</code>每两个变量的<code>seven</code>和<code>three</code>中的代码。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应在两个<code>console.log()</code>语句中使用<code>typeof</code>来检查变量的类型。
    testString: assert(code.match(/console\.log\(typeof[\( ].*\)?\)/g).length == 2);
  - text: 您的代码应使用<code>typeof</code>来检查变量类型<code>seven</code> 。
    testString: assert(code.match(/typeof[\( ]seven\)?/g));
  - text: 您的代码应使用<code>typeof</code>来检查变量的类型<code>three</code> 。
    testString: assert(code.match(/typeof[\( ]three\)?/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let seven = 7;
let three = "3";
console.log(seven + three);
// Add your code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
