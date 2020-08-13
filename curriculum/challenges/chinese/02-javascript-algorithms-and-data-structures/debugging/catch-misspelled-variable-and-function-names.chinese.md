---
id: 587d7b84367417b2b2512b35
title: Catch Misspelled Variable and Function Names
challengeType: 1
videoUrl: ''
localeTitle: 捕获拼错的变量和函数名称
---

## Description
<section id="description"> <code>console.log()</code>和<code>typeof</code>方法是检查中间值和程序输出类型的两种主要方法。现在是时候进入错误所采用的常见形式了。快速打字机可以同意的一个语法级问题是简单的拼写错误。变量或函数名称中的转置，丢失或错误大写字符将使浏览器查找不存在的对象 - 并以引用错误的形式进行抱怨。 JavaScript变量和函数名称区分大小写。 </section>

## Instructions
<section id="instructions">修复代码中的两个拼写错误，以便<code>netWorkingCapital</code>计算有效。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 检查netWorkingCapital计算中使用的两个变量的拼写，控制台输出应显示“净营运资金为：2”。
    testString: 'assert(netWorkingCapital === 2);'
  - text: 代码中不应存在拼写错误的变量。
    testString: assert(!code.match(/recievables/g));
  - text: <code>receivables</code>在代码中声明并正确使用应<code>receivables</code>变量。
    testString: assert(code.match(/receivables/g).length == 2);
  - text: 代码中不应存在拼写错误的变量。
    testString: assert(!code.match(/payable;/g));
  - text: 应在组织中声明并正确使用<code>payables</code>变量。
    testString: assert(code.match(/payables/g).length == 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;
console.log(`Net working capital is: ${netWorkingCapital}`);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
