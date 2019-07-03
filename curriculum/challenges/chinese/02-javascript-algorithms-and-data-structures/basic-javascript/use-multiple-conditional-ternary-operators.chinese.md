---
id: 587d7b7e367417b2b2512b21
title: Use Multiple Conditional (Ternary) Operators
challengeType: 1

videoUrl: ''
localeTitle: Use Multiple Conditional (Ternary) Operators
---

## Description
<section id='description'>
在之前的挑战中，你使用了一个条件运算符。你也可以将多个运算符串联在一起以检查多种条件。
下面的函数使用 if，else if 和 else 语句来检查多个条件：
<blockquote>function findGreaterOrEqual(a, b) {<br>&nbsp;&nbsp;if(a === b) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "a and b are equal";<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;else if(a > b) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "a is greater";<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;else {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "b is greater";<br>&nbsp;&nbsp;}<br>}</blockquote>
上面的函数使用条件运算符写法如下：
<blockquote>function findGreaterOrEqual(a, b) {<br>&nbsp;&nbsp;return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
在 checkSign 函数中使用多个条件运算符来检查数字是正数 ("positive")、负数 ("negative") 或零 ("zero")。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkSign</code>应该使用多个条件运算符
    testString: 'assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?\s*?\?\s*?.+?\s*?:\s*?.+?/gi.test(code), "<code>checkSign</code>应该使用多个条件运算符");'
  - text: "<code>checkSign(10)</code>应该返回 'positive' 注意，结果对大小写敏感"
    testString: assert(checkSign(10) === 'positive', '<code>checkSign(10)</code>应该返回 "positive" 注意，结果对大小写敏感');
  - text: "<code>checkSign(-12)</code>应该返回 'negative' 注意，结果对大小写敏感"
    testString: assert(checkSign(-12) === 'negative', '<code>checkSign(-12)</code>应该返回 "negative" 注意，结果对大小写敏感');
  - text: "<code>checkSign(0)</code>应该返回 'zero' 注意，结果对大小写敏感"
    testString: assert(checkSign(0) === 'zero', '<code>checkSign(0)</code>应该返回 "zero" 注意，结果对大小写敏感');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              