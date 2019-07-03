---
id: 587d7b7e367417b2b2512b24
title: Use the Conditional (Ternary) Operator
challengeType: 1

videoUrl: ''
localeTitle: Use the Conditional (Ternary) Operator
---

## Description
<section id='description'>
条件运算符（也称为三元运算符）的用处就像写成一行的 if-else 表达式
语法如下所示：
<code>condition ? statement-if-true : statement-if-false;</code>
以下函数使用 if-else 语句来检查条件：
<blockquote>function findGreater(a, b) {<br>&nbsp;&nbsp;if(a > b) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "a is greater";<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;else {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "b is greater";<br>&nbsp;&nbsp;}<br>}</blockquote>
上面的函数使用条件运算符写法如下：
<blockquote>function findGreater(a, b) {<br>&nbsp;&nbsp;return a > b ? "a is greater" : "b is greater";<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
在<code>checkEqual</code>函数中使用条件运算符检查两个数字是否相等，函数应该返回 true 或 false
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkEqual</code>应该使用条件运算符
    testString: 'assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?/gi.test(code), "<code>checkEqual</code>应该使用条件运算符");'
  - text: <code>checkEqual(1, 2)</code>应该返回 false
    testString: assert(checkEqual(1, 2) === false, '<code>checkEqual(1, 2)</code>应该返回 false');
  - text: <code>checkEqual(1, 1)</code>应该返回 true
    testString: assert(checkEqual(1, 1) === true, '<code>checkEqual(1, 1)</code>应该返回 true');
  - text: <code>checkEqual(1, -1)</code>应该返回 false
    testString: assert(checkEqual(1, -1) === false, '<code>checkEqual(1, -1)</code>应该返回 false');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              