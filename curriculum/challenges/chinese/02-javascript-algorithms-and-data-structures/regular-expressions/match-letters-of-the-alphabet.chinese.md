---
id: 587d7db5367417b2b2512b96
title: Match Letters of the Alphabet
challengeType: 1
forumTopicId: 301354
localeTitle: 匹配字母表中的字母
---

## Description
<section id='description'>
了解了如何使用<code>字符集</code>来指定要匹配的一组字符串，但是当需要匹配大量字符（例如，字母表中的每个字母）时，有一种写法可以让实现这个功能变得简短。
在<code>字符集</code>中，可以使用<code>连字符</code>（<code>-</code>）来定义要匹配的字符范围。
例如，要匹配小写字母<code>a</code>到<code>e</code>，你可以使用<code>[a-e]</code>。

```js
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null
```

</section>

## Instructions
<section id='instructions'>
匹配字符串<code>quoteSample</code>中的所有字母。
<strong>注意：</strong><br>一定要同时匹配大小写<strong>字母<strong>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式<code>alphabetRegex</code>应该匹配 35 项。
    testString: assert(result.length == 35);
  - text: 你的正则表达式<code>alphabetRegex</code>应该使用全局标志。
    testString: assert(alphabetRegex.flags.match(/g/).length == 1);
  - text: 你的正则表达式<code>alphabetRegex</code>应该使用忽略大小写标志。
    testString: assert(alphabetRegex.flags.match(/i/).length == 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Change this line
let result = alphabetRegex; // Change this line
```

</div>



</section>

## Solution
<section id='solution'>

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
```

</section>
