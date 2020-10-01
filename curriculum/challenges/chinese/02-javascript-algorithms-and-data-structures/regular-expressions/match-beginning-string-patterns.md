---
id: 587d7db7367417b2b2512b9d
challengeType: 1
forumTopicId: 301349
title: 匹配字符串的开头
---

## Description
<section id='description'>
回顾一下之前的挑战，正则表达式可以用于查找多项匹配。还可以查询字符串中符合指定匹配模式的字符。
在之前的挑战中，使用<code>字符集</code>中的<code>插入</code>符号（<code>^</code>）来创建一个<code>否定字符集</code>，形如<code>[^thingsThatWillNotBeMatched]</code>。在<code>字符集</code>之外，<code>插入</code>符号用于字符串的开头搜寻匹配模式。

```js
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
// Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// Returns false
```

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
    testString: assert(calRegex.source == "^Cal");
  - text: 你的正则表达式不应该使用任何标志。
    testString: assert(calRegex.flags == "");
  - text: "你的正则表达式应该匹配字符串开头的<code>'Cal'</code>。"
    testString: assert(calRegex.test("Cal and Ricky both like racing."));
  - text: "你的正则表达式不应该匹配字符串中间的<code>'Cal'</code>。"
    testString: assert(!calRegex.test("Ricky and Cal both like racing."));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Change this line
let result = calRegex.test(rickyAndCal);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
```

</section>
