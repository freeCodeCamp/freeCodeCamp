---
id: 587d7b7e367417b2b2512b24
title: Use the Conditional (Ternary) Operator
challengeType: 1
videoUrl: ''
localeTitle: 使用条件（三元）运算符
---

## Description
<section id="description"> <dfn>条件运算符</dfn> （也称为<dfn>三元运算符</dfn> ）可以用作一行if-else表达式。语法是： <code>condition ? statement-if-true : statement-if-false;</code>以下函数使用if-else语句来检查条件： <blockquote> function findGreater（a，b）{ <br> if（a&gt; b）{ <br>返回“a更大”; <br> } <br>其他{ <br>返回“b更大”; <br> } <br> } </blockquote>这可以使用<code>conditional operator</code>重写： <blockquote> function findGreater（a，b）{ <br>返回a&gt; b？ “a更大”：“b更大”; <br> } </blockquote></section>

## Instructions
<section id="instructions">在<code>checkEqual</code>函数中使用<code>conditional operator</code>来检查两个数字是否相等。该函数应返回true或false。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkEqual</code>应该使用<code>conditional operator</code>
    testString: assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?/.test(code));
  - text: '<code>checkEqual(1, 2)</code>应该返回false'
    testString: assert(checkEqual(1, 2) === "Not Equal");
  - text: '<code>checkEqual(1, 1)</code>应该返回true'
    testString: assert(checkEqual(1, 1) === "Equal");
  - text: '<code>checkEqual(1, -1)</code>应该返回false'
    testString: assert(checkEqual(1, -1) === "Not Equal");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkEqual(a, b) {

}

checkEqual(1, 2);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
