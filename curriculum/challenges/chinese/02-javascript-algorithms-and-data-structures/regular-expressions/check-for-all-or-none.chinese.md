---
id: 587d7dba367417b2b2512ba8
title: Check for All or None
challengeType: 1

videoUrl: ''
localeTitle: Check for All or None
---

## Description
<section id='description'>
有时，你想要搜寻的匹配模式可能有不确定是否存在的部分。尽管如此，你还是想检查它们。
为此，你可以使用问号<code>?</code>指定可能存在的元素。这将检查前面的零个或一个元素。你可以将此符号视为前面的元素是可选的。
例如，美式英语和英式英语略有不同，你可以使用问号来匹配两种拼写。
<blockquote>let american = "color";<br>let british = "colour";<br>let rainbowRegex= /colou?r/;<br>rainbowRegex.test(american); // Returns true<br>rainbowRegex.test(british); // Returns true</blockquote>
</section>

## Instructions
<section id='instructions'>
修改正则表达式<code>favRegex</code>以匹配美式英语（favorite）和英式英语（favourite）的单词版本。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该使用可选符号<code>?</code>。
    testString: assert(favRegex.source.match(/\?/).length > 0, '你的正则表达式应该使用可选符号<code>?</code>。');
  - text: "你的正则表达式应该匹配<code>'favorite'</code>。"
    testString: assert(favRegex.test("favorite"), '你的正则表达式应该匹配<code>"favorite"</code>。');
  - text: "你的正则表达式应该匹配<code>'favourite'</code>。"
    testString: assert(favRegex.test("favourite"), '你的正则表达式应该匹配<code>"favourite"</code>。');
  - text: "你的正则表达式不应该匹配<code>'fav'</code>。"
    testString: assert(!favRegex.test("fav"), '你的正则表达式不应该匹配<code>"fav"</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              