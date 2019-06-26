---
id: 587d7db9367417b2b2512ba4
title: Match Non-Whitespace Characters
challengeType: 1
videoUrl: ''
localeTitle: 匹配非空白字符
---

## Description
<section id="description">您学会了使用<code>\s</code>搜索空格，并使用小写<code>s</code> 。您还可以搜索除空格之外的所有内容。使用<code>\S</code>搜索非空格， <code>\S</code>是一个大写的<code>s</code> 。此模式将不匹配空格，回车符，制表符，换页符和换行符。你可以认为它类似于字符类<code>[^ \r\t\f\n\v]</code> 。 <blockquote>让whiteSpace =“空白。到处都是空白！” <br>让nonSpaceRegex = / \ S / g; <br> whiteSpace.match（nonSpaceRegex）。长度; //返回32 </blockquote></section>

## Instructions
<section id="instructions">更改正则表达式<code>countNonWhiteSpace</code>以在字符串中查找多个非空白字符。 </section>

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
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Change this line
let result = sample.match(countNonWhiteSpace);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
