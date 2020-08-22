---
id: 587d7b84367417b2b2512b37
title: Catch Mixed Usage of Single and Double Quotes
challengeType: 1
videoUrl: ''
localeTitle: 抓住单引号和双引号的混合使用
---

## Description
<section id="description"> JavaScript允许使用单个（“）和双（”“）引号来声明一个字符串。决定使用哪一个通常归结为个人偏好，但有一些例外。当字符串有收缩或另一个时，有两个选择很好引号中的文本片段。请注意，不要过早关闭字符串，这会导致语法错误。以下是混合引号的一些示例： <blockquote> //这些是正确的： <br> const grouchoContraction =“我度过了一个美好的夜晚，但事实并非如此。”; <br> const quoteInString =“Groucho Marx曾经说过&#39;引用我的话说我被误引了&#39;。”; <br> //这是不正确的： <br> const uhOhGroucho =&#39;我度过了一个美妙的夜晚，但这不是它。&#39;; </blockquote>当然，只使用一种报价样式是可以的。您可以使用反斜杠（\）转义字符来转义字符串中的引号： <blockquote> //正确使用相同的引号： <br> const allSameQuotes =&#39;我度过了一个非常精彩的夜晚，但这不是它。&#39;; </blockquote></section>

## Instructions
<section id="instructions">修复字符串，使其对<code>href</code>值使用不同的引号，或者转义现有的引号。在整个字符串周围保留双引号。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '您的代码应该通过更改或转义它们来修复<code>href</code>值“#Home”周围的引号。'
    testString: assert(code.match(/<a href=\s*?('|\\")#Home\1\s*?>/g));
  - text: 您的代码应该在整个字符串周围保留双引号。
    testString: assert(code.match(/"<p>.*?<\/p>";/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
