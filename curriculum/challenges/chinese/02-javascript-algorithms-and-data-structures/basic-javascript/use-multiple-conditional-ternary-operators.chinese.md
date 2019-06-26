---
id: 587d7b7e367417b2b2512b21
title: Use Multiple Conditional (Ternary) Operators
challengeType: 1
videoUrl: ''
localeTitle: 使用多个条件（三元）运算符
---

## Description
<section id="description">在之前的挑战中，您使用了单个<code>conditional operator</code> 。您也可以将它们链接在一起以检查多种条件。以下函数使用if，else if和else语句来检查多个条件： <blockquote> function findGreaterOrEqual（a，b）{ <br> if（a === b）{ <br>返回“a和b相等”; <br> } <br>否则如果（a&gt; b）{ <br>返回“a更大”; <br> } <br>其他{ <br>返回“b更大”; <br> } <br> } </blockquote>可以使用多个<code>conditional operators</code>重写上述函数： <blockquote> function findGreaterOrEqual（a，b）{ <br>返回（a === b）？ “a和b相等”：（a&gt; b）？ “a更大”：“b更大”; <br> } </blockquote></section>

## Instructions
<section id="instructions">在<code>checkSign</code>函数中使用多个<code>conditional operators</code>来检查数字是正数，负数还是零。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkSign(num) {

}

checkSign(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
