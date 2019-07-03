---
id: 587d7b84367417b2b2512b35
title: Catch Misspelled Variable and Function Names
challengeType: 1

videoUrl: ''
localeTitle: Catch Misspelled Variable and Function Names
---

## Description
<section id='description'>
<code>console.log()</code>和<code>typeof</code>方法是检查中间值和程序输出类型的两种主要方法。 现在是时候了解一下 bug 出现的常见的情形。一个语法级别的问题是打字太快带来的低级拼写错误。
变量或函数名的错写、漏写或大小写弄混都会让浏览器尝试查找并不存在的东西，并报出“引用错误”。JavaScript 变量和函数名称区分大小写。
</section>

## Instructions
<section id='instructions'>
修复代码中的两个拼写错误，以便<code>netWorkingCapital</code>计算有效。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '检查计算 netWorkingCapital 值时使用的两个变量的拼写是否正确，控制台应该输出 "Net working capital is: 2"。'
    testString: 'assert(netWorkingCapital === 2, "检查计算 netWorkingCapital 值时使用的两个变量的拼写是否正确，控制台应该输出 "Net working capital is: 2"。");'
  - text: 代码中不应存在拼写错误的变量。
    testString: assert(!code.match(/recievables/g), '代码中不应存在拼写错误的变量。');
  - text: 应在代码中声明并正确使用<code>receivables</code>变量。
    testString: assert(code.match(/receivables/g).length == 2, '应在代码中声明并正确使用<code>receivables</code>变量。');
  - text: 代码中不应存在拼写错误的变量。
    testString: assert(!code.match(/payable;/g), '代码中不应存在拼写错误的变量。');
  - text: 应在代码中声明并正确使用<code>payables</code>变量。
    testString: assert(code.match(/payables/g).length == 2, '应在代码中声明并正确使用<code>payables</code>变量。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              