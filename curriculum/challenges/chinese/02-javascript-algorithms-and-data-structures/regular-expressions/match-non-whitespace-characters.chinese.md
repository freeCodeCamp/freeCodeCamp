---
id: 587d7db9367417b2b2512ba4
title: Match Non-Whitespace Characters
challengeType: 1

videoUrl: ''
localeTitle: Match Non-Whitespace Characters
---

## Description
<section id='description'>
你已经学会了如何使用带有小写<code>s</code>的缩写<code>\s</code>来搜寻空白字符。你也可以搜寻除了空格之外的所有内容。
使用<code>\S</code>搜寻非空白字符，其中<code>S</code>是大写。此匹配模式将不匹配空格、回车符、制表符、换页符和换行符。你可以认为这类似于字符类<code>[^\r\t\f\n\v]</code>。
<blockquote>let whiteSpace = "Whitespace. Whitespace everywhere!"<br>let nonSpaceRegex = /\S/g;<br>whiteSpace.match(nonSpaceRegex).length; // Returns 32</blockquote>
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
    testString: assert(countNonWhiteSpace.global, '你的正则表达式应该使用全局状态修正符。');
  - text: "你的正则表达式应该在<code>'Men are from Mars and women are from Venus.'</code>中匹配到 35 个非空白字符。"
    testString: assert("Men are from Mars and women are from Venus.".match(countNonWhiteSpace).length == 35, '你的正则表达式应该在<code>"Men are from Mars and women are from Venus."</code>中匹配到 35 个非空白字符。');
  - text: '你的正则表达式应该在<code>"Space: the final frontier."</code>中匹配到 23 个非空白字符。'
    testString: 'assert("Space: the final frontier.".match(countNonWhiteSpace).length == 23, "你的正则表达式应该在<code>"Space: the final frontier."</code>中匹配到 23 个非空白字符。");'
  - text: "你的正则表达式应该在<code>'MindYourPersonalSpace'</code>中匹配到 21 个非空白字符。"
    testString: assert("MindYourPersonalSpace".match(countNonWhiteSpace).length == 21, '你的正则表达式应该在<code>"MindYourPersonalSpace"</code>中匹配到 21 个非空白字符。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              