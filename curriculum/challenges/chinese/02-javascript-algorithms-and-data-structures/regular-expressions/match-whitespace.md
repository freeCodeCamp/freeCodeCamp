---
id: 587d7db8367417b2b2512ba3
challengeType: 1
forumTopicId: 301359
title: 匹配空白字符
---

## Description
<section id='description'>
迄今为止的挑战包括匹配的字母和数字。还可以匹配字母之间的空格。
可以使用<code>\s</code>搜寻空格，其中<code>s</code>是小写。此匹配模式不仅匹配空格，还匹配回车符、制表符、换页符和换行符，可以将其视为与<code>[\r\t\f\n\v]</code>类似。

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
// Returns [" ", " "]
```

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
    testString: assert(countWhiteSpace.global);
  - text: 正则表达式应该使用元字符 <code>\s</code> 匹配所有的空白。
    testString: assert(/\\s/.test(countWhiteSpace.source));
  - text: "你的正则表达式应该在<code>'Men are from Mars and women are from Venus.'</code>中匹配到 8 个空白字符。"
    testString: assert("Men are from Mars and women are from Venus.".match(countWhiteSpace).length == 8);
  - text: '你的正则表达式应该在<code>"Space: the final frontier."</code>中匹配到 3 个空白字符。'
    testString: 'assert("Space: the final frontier.".match(countWhiteSpace).length == 3);'
  - text: "你的正则表达式在<code>'MindYourPersonalSpace'</code>中应该匹配不到空白字符。"
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
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
```

</section>
