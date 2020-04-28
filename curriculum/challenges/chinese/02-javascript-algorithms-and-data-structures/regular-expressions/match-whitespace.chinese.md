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
  - text: 你的正则表达式应该使用全局标志。
    testString: assert(countWhiteSpace.global);
  - text: 你的正则表达式应该使用速记字符
    testString: assert(/\\s/.test(countWhiteSpace.source));
  - text: 你的正则表达式应该在<code>&quot;Men are from Mars and women are from Venus.&quot;</code>找到八个空格<code>&quot;Men are from Mars and women are from Venus.&quot;</code>
    testString: assert("Men are from Mars and women are from Venus.".match(countWhiteSpace).length == 8);
  - text: '你的正则表达式应该在<code>&quot;Space: the final frontier.&quot;</code>找到三个空格<code>&quot;Space: the final frontier.&quot;</code>'
    testString: 'assert("Space: the final frontier.".match(countWhiteSpace).length == 3);'
  - text: 您的正则表达式应该在<code>"MindYourPersonalSpace"</code>中找不到空格
    testString: assert("MindYourPersonalSpace".match(countWhiteSpace) == null);

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
