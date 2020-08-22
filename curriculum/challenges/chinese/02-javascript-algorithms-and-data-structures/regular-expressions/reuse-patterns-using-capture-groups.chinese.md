---
id: 587d7dbb367417b2b2512baa
title: Reuse Patterns Using Capture Groups
challengeType: 1
forumTopicId: 301364
localeTitle: 使用捕获组重用模式
---

## Description
<section id='description'>
一些你所搜寻的匹配模式会在字符串中出现多次，手动重复该正则表达式太浪费了。有一种更好的方法可以指定何时在字符串中会有多个重复的子字符串。
可以使用<code>捕获组</code>搜寻重复的子字符串。括号<code>(</code>和<code>)</code>可以用来匹配重复的子字符串。只需要把重复匹配模式的正则表达式放在括号中即可。
要指定重复字符串将出现的位置，可以使用反斜杠（<code>\</code>）后接一个数字。这个数字从 1 开始，随着你使用的每个捕获组的增加而增加。这里有一个示例，<code>\1</code>可以匹配第一个组。
下面的示例匹配任意两个被空格分割的单词：

```js
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
```

在字符串上使用<code>.match()</code>方法将返回一个数组，其中包含它匹配的字符串及其捕获组。
</section>

## Instructions
<section id='instructions'>
在正则表达式<code>reRegex</code>中使用<code>捕获组</code>，以匹配在字符串中仅重复三次的数字，每一个都由空格分隔。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该使用数字的速记元字符。
    testString: assert(reRegex.source.match(/\\d/));
  - text: 你的正则表达式应该重用两次捕获组。
    testString: assert(reRegex.source.match(/\\1|\\2/g).length >= 2);
  - text: 你的正则表达式应该有两个空格分隔这三个数字。
    testString: assert(reRegex.source.match(/ |\\s/g).length === 2 || reRegex.source.match(/\(\\s\)(?=.*\\(1|2))/g));
  - text: "你的正则表达式应该匹配<code>'42 42 42'</code>。"
    testString: assert(reRegex.test("42 42 42"));
  - text: "你的正则表达式应该匹配<code>'100 100 100'</code>。"
    testString: assert(reRegex.test("100 100 100"));
  - text: "你的正则表达式不应该匹配<code>'42 42 42 42'</code>。"
    testString: assert.equal(("42 42 42 42").match(reRegex.source), null);
  - text: "你的正则表达式不应该匹配<code>'42 42'</code>。"
    testString: assert.equal(("42 42").match(reRegex.source), null);
  - text: "你的正则表达式不应该匹配<code>'101 102 103'</code>。"
    testString: assert(!reRegex.test("101 102 103"));
  - text: "你的正则表达式不应该匹配<code>'1 2 3'</code>。"
    testString: assert(!reRegex.test("1 2 3"));
  - text: "你的正则表达式应该匹配<code>'10 10 10'</code>。"
    testString: assert(reRegex.test("10 10 10"));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
```

</section>
