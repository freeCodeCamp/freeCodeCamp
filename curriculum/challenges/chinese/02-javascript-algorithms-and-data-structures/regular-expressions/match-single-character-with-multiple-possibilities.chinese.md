---
id: 587d7db5367417b2b2512b95
title: Match Single Character with Multiple Possibilities
challengeType: 1

videoUrl: ''
localeTitle: Match Single Character with Multiple Possibilities
---

## Description
<section id='description'>
你已经了解了如何匹配文字匹配模式（<code>/literal/</code>）和通配符（<code>/./</code>）。这是正则表达式的两种极端情况，一种是精确匹配，而另一种则是匹配所有。在这两种极端情况之间有一个平衡选项。
你可以使用<code>字符集</code>搜寻具有一定灵活性的文字匹配模式。字符集允许你通过把它们放在方括号（<code>[</code>和<code>]</code>）之间的方式来定义一组你需要匹配的字符串。
例如，你想要匹配<code>"bag"</code>、<code>"big"</code>和<code>"bug"</code>，但是不想匹配<code>"bog"</code>。你可以创建正则表达式<code>/b[aiu]g/</code>来执行此操作。<code>[aiu]</code>是只匹配字符<code>"a"</code>、<code>"i"</code>或者<code>"u"</code>的字符集。
<blockquote>let bigStr = "big";<br>let bagStr = "bag";<br>let bugStr = "bug";<br>let bogStr = "bog";<br>let bgRegex = /b[aiu]g/;<br>bigStr.match(bgRegex); // Returns ["big"]<br>bagStr.match(bgRegex); // Returns ["bag"]<br>bugStr.match(bgRegex); // Returns ["bug"]<br>bogStr.match(bgRegex); // Returns null</blockquote>
</section>

## Instructions
<section id='instructions'>
使用元音字符集（<code>a</code>、<code>e</code>、<code>i</code>、<code>o</code>、<code>u</code>）在你的正则表达式<code>vowelRegex</code>中匹配到字符串<code>quoteSample</code>中的所有元音。
<strong>注意</strong><br>一定要同时匹配大小写元音。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该匹配到所有25个元音。
    testString: assert(result.length == 25, '你应该匹配到所有25个元音。');
  - text: 你的正则表达式<code>vowelRegex</code>应该使用字符集。
    testString: assert(/\[.*\]/.test(vowelRegex.source), '你的正则表达式<code>vowelRegex</code>应该使用字符集。');
  - text: 你的正则表达式<code>vowelRegex</code>应该使用全局标志。
    testString: assert(vowelRegex.flags.match(/g/).length == 1, '你的正则表达式<code>vowelRegex</code>应该使用全局标志。');
  - text: 你的正则表达式<code>vowelRegex</code>应该使用忽略大小写标志。
    testString: assert(vowelRegex.flags.match(/i/).length == 1, '你的正则表达式<code>vowelRegex</code>应该使用忽略大小写标志。');
  - text: 你的正则表达式不应该匹配任何辅音。
    testString: assert(!/[b-df-hj-np-tv-z]/gi.test(result.join()), '你的正则表达式不应该匹配任何辅音。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              