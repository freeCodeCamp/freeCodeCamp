---
id: 587d7db8367417b2b2512ba3
title: Match Whitespace
challengeType: 1

videoUrl: ''
localeTitle: Match Whitespace
---

## Description
<section id='description'>
迄今为止的挑战包括匹配的字母和数字。你还可以匹配字母之间的空格。
你可以使用<code>\s</code>搜寻空格，其中<code>s</code>是小写。此匹配模式不仅匹配空格，还匹配回车符、制表符、换页符和换行符，你可以将其视为与<code>[\r\t\f\n\v]</code>类似。
<blockquote>let whiteSpace = "Whitespace. Whitespace everywhere!"<br>let spaceRegex = /\s/g;<br>whiteSpace.match(spaceRegex);<br>// Returns [" ", " "]<br></blockquote>
</section>

## Instructions
<section id='instructions'>
修改正则表达式<code>countWhiteSpace</code>查找字符串中的多个空白字符。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该使用全局状态修正符。
    testString: assert(countWhiteSpace.global, '你的正则表达式应该使用全局状态修正符。');
  - text: "你的正则表达式应该在<code>'Men are from Mars and women are from Venus.'</code>中匹配到 8 个空白字符。"
    testString: assert("Men are from Mars and women are from Venus.".match(countWhiteSpace).length == 8, '你的正则表达式应该在<code>"Men are from Mars and women are from Venus."</code>中匹配到 8 个空白字符。');
  - text: '你的正则表达式应该在<code>"Space: the final frontier."</code>中匹配到 3 个空白字符。'
    testString: 'assert("Space: the final frontier.".match(countWhiteSpace).length == 3, "你的正则表达式应该在<code>"Space: the final frontier."</code>中匹配到 3 个空白字符。");'
  - text: "你的正则表达式在<code>'MindYourPersonalSpace'</code>中应该匹配不到空白字符。"
    testString: assert("MindYourPersonalSpace".match(countWhiteSpace) == null, '你的正则表达式在<code>"MindYourPersonalSpace"</code>中应该匹配不到空白字符。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              