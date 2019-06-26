---
id: 587d7db8367417b2b2512ba3
title: Match Whitespace
challengeType: 1
videoUrl: ''
localeTitle: 匹配空白
---

## Description
<section id="description">迄今为止的挑战包括匹配的字母和数字字母。您还可以匹配字母之间的空格或空格。您可以使用<code>\s</code>搜索空格，这是一个小写的<code>s</code> 。此模式不仅匹配空格，还匹配回车符，制表符，换页符和换行符。你可以认为它类似于字符类<code>[ \r\t\f\n\v]</code> 。 <blockquote>让whiteSpace =“空白。到处都是空白！” <br>让spaceRegex = / \ s / g; <br> whiteSpace.match（spaceRegex）; <br> //返回[“”，“”] <br></blockquote></section>

## Instructions
<section id="instructions">更改正则表达式<code>countWhiteSpace</code>以查找字符串中的多个空格字符。 </section>

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
let countWhiteSpace = /change/; // Change this line
let result = sample.match(countWhiteSpace);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
