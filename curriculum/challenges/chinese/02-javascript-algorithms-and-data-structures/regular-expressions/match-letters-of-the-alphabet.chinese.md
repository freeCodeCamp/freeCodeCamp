---
id: 587d7db5367417b2b2512b96
title: Match Letters of the Alphabet
challengeType: 1

videoUrl: ''
localeTitle: Match Letters of the Alphabet
---

## Description
<section id='description'>
你了解了如何使用<code>字符集</code>来指定要匹配的一组字符串，但是当你需要匹配大量字符（例如，字母表中的每个字母）时，有一种写法可以让实现这个功能变得简短。
在<code>字符集</code>中，你可以使用<code>连字符</code>（<code>-</code>）来定义要匹配的字符范围。
例如，要匹配小写字母<code>a</code>到<code>e</code>，你可以使用<code>[a-e]</code>。
<blockquote>let catStr = "cat";<br>let batStr = "bat";<br>let matStr = "mat";<br>let bgRegex = /[a-e]at/;<br>catStr.match(bgRegex); // Returns ["cat"]<br>batStr.match(bgRegex); // Returns ["bat"]<br>matStr.match(bgRegex); // Returns null</blockquote>
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
    testString: assert(result.length == 35, '你的正则表达式<code>alphabetRegex</code>应该匹配 35 项。');
  - text: 你的正则表达式<code>alphabetRegex</code>应该使用全局标志。
    testString: assert(alphabetRegex.flags.match(/g/).length == 1, '你的正则表达式<code>alphabetRegex</code>应该使用全局标志。');
  - text: 你的正则表达式<code>alphabetRegex</code>应该使用忽略大小写标志。
    testString: assert(alphabetRegex.flags.match(/i/).length == 1, '你的正则表达式<code>alphabetRegex</code>应该使用忽略大小写标志。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              