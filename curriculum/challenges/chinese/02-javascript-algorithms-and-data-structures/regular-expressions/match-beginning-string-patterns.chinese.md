---
id: 587d7db7367417b2b2512b9d
title: Match Beginning String Patterns
challengeType: 1

videoUrl: ''
localeTitle: Match Beginning String Patterns
---

## Description
<section id='description'>
先前的挑战表明，正则表达式可以用于查找许多匹配项。它们还用于搜寻字符串中特定位置的匹配模式。
在之前的挑战中，你使用<code>字符集</code>中的<code>插入</code>符号（<code>^</code>）来创建一个<code>否定字符集</code>，形如<code>[^thingsThatWillNotBeMatched]</code>。在<code>字符集</code>之外，<code>插入</code>符号用于字符串的开头搜寻匹配模式。
<blockquote>let firstString = "Ricky is first and can be found.";<br>let firstRegex = /^Ricky/;<br>firstRegex.test(firstString);<br>// Returns true<br>let notFirst = "You can't find Ricky now.";<br>firstRegex.test(notFirst);<br>// Returns false</blockquote>
</section>

## Instructions
<section id='instructions'>
在正则表达式中使用<code>^</code>符号，以匹配仅在字符串<code>rickyAndCal</code>的开头出现的<code>"Cal"</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "你的正则表达式应该搜寻有一个大写字母的<code>'Cal'</code>。"
    testString: assert(calRegex.source == "^Cal", '你的正则表达式应该搜寻有一个大写字母的<code>"Cal"</code>。');
  - text: 你的正则表达式不应该使用任何标志。
    testString: assert(calRegex.flags == "", '你的正则表达式不应该使用任何标志。');
  - text: "你的正则表达式应该匹配字符串开头的<code>'Cal'</code>。"
    testString: assert(calRegex.test("Cal and Ricky both like racing."), '你的正则表达式应该匹配字符串开头的<code>"Cal"</code>。');
  - text: "你的正则表达式不应该匹配字符串中间的<code>'Cal'</code>。"
    testString: assert(!calRegex.test("Ricky and Cal both like racing."), '你的正则表达式不应该匹配字符串中间的<code>"Cal"</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              