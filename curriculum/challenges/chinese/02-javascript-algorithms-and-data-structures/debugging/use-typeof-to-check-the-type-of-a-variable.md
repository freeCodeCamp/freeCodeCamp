---
id: 587d7b84367417b2b2512b34
challengeType: 1
forumTopicId: 18374
title: 使用 type of 检查变量的类型
---

## Description
<section id='description'>
可以使用<code>typeof</code>检查变量的数据结构或类型。在处理多种数据类型时，<code>typeof</code>会对调试很有帮助。如果想计算两数之和，但实际传入了一个字符串参数，则结果可能是错误的。类型错误可能隐藏在计算或函数调用中。当你以 JavaScript 对象（JSON）的形式访问和使用外部数据时尤其要小心。
下面是使用<code>typeof</code>的一些示例：

```js
console.log(typeof ""); // 输出 "string"
console.log(typeof 0); // 输出 "number"
console.log(typeof []); // 输出 "object"
console.log(typeof {}); // 输出 "object"
```
JavaScript 有六种原始（不可变）数据类型：<code>Boolean</code>,<code>Null</code>,<code>Undefined</code>,<code>Number</code>,<code>String</code>, 和<code>Symbol</code>（ES6 新增）和一种可变的数据类型：<code>Object</code>。注意，在 JavaScript 中，数组在本质上是一种对象
</section>

## Instructions
<section id='instructions'>
添加两个<code>console.log()</code>语句来检查代码中的两个变量<code>seven</code>和<code>three</code>的 <code>typeof</code>值。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应在两个<code>console.log()</code>语句中使用<code>typeof</code>来检查变量的类型。
    testString: assert(code.match(/console\.log\(typeof[\( ].*\)?\)/g).length == 2);
  - text: 你应使用<code>typeof</code>来检查变量<code>seven</code>的类型。
    testString: assert(code.match(/typeof[\( ]seven\)?/g));
  - text: 你应使用<code>typeof</code>来检查变量<code>three</code>的类型。
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
let seven = 7;let three = "3";console.log(typeof seven);
console.log(typeof three);
```

</section>
