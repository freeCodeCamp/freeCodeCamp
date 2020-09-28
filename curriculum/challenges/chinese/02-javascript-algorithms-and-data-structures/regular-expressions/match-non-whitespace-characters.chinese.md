---
id: 587d7db9367417b2b2512ba4
title: Match Non-Whitespace Characters
challengeType: 1
forumTopicId: 18210
localeTitle: 匹配非空白字符
---

## Description
<section id='description'>
已经学会了如何使用带有小写<code>s</code>的缩写<code>\s</code>来搜寻空白字符。还可以搜寻除了空格之外的所有内容。
使用<code>\S</code>搜寻非空白字符，其中<code>S</code>是大写。此匹配模式将不匹配空格、回车符、制表符、换页符和换行符。可以认为这类似于元字符<code>[^\r\t\f\n\v]</code>。

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // Returns 32
```

</section>

## Instructions
<section id='instructions'>
修改正则表达式<code>countNonWhiteSpace</code>以查找字符串中的多个非空字符。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该使用全局状态修正符。
    testString: assert(countNonWhiteSpace.global);
  - text: 正则表达式应该使用元字符 <code>\S/code> 来匹配所有的非空格字符。
    testString: assert(/\\S/.test(countNonWhiteSpace.source));
  - text: "你的正则表达式应该在<code>'Men are from Mars and women are from Venus.'</code>中匹配到 35 个非空白字符。"
    testString: assert("Men are from Mars and women are from Venus.".match(countNonWhiteSpace).length == 35);
  - text: '你的正则表达式应该在<code>"Space: the final frontier."</code>中匹配到 23 个非空白字符。'
    testString: 'assert("Space: the final frontier.".match(countNonWhiteSpace).length == 23);'
  - text: "你的正则表达式应该在<code>'MindYourPersonalSpace'</code>中匹配到 21 个非空白字符。"
    testString: assert("MindYourPersonalSpace".match(countNonWhiteSpace).length == 21);

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
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
```

</section>
