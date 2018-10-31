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
  - text: 你的正则表达式应该使用全局标志。
    testString: 'assert(countNonWhiteSpace.global, "Your regex should use the global flag.");'
  - text: 你的正则表达式应该使用速记字符
    testString: 'assert(/\\S/.test(countNonWhiteSpace.source), "Your regex should use the shorthand character <code>\S/code> to match all non-whitespace characters.");'
  - text: 你的正则表达式应该在<code>&quot;Men are from Mars and women are from Venus.&quot;</code>找到35个非空格<code>&quot;Men are from Mars and women are from Venus.&quot;</code>
    testString: 'assert("Men are from Mars and women are from Venus.".match(countNonWhiteSpace).length == 35, "Your regex should find 35 non-spaces in <code>"Men are from Mars and women are from Venus."</code>");'
  - text: '你的正则表达式应该在<code>&quot;Space: the final frontier.&quot;</code>找到23个非空格<code>&quot;Space: the final frontier.&quot;</code>'
    testString: 'assert("Space: the final frontier.".match(countNonWhiteSpace).length == 23, "Your regex should find 23 non-spaces in <code>"Space: the final frontier."</code>");'
  - text: 你的正则表达式应该在<code>&quot;MindYourPersonalSpace&quot;</code>找到21个非空格
    testString: 'assert("MindYourPersonalSpace".match(countNonWhiteSpace).length == 21, "Your regex should find 21 non-spaces in <code>"MindYourPersonalSpace"</code>");'

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
