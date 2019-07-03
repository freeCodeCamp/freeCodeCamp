---
id: 587d7db3367417b2b2512b8f
title: Match Literal Strings
challengeType: 1

videoUrl: ''
localeTitle: Match Literal Strings
---

## Description
<section id='description'>
在上一个挑战中，你使用正则表达式<code>/Hello/</code>搜索到了字符串<code>"Hello"</code>。那个正则表达式在字符串中搜寻<code>"Hello"</code>的文字匹配。下面是另一个在字符串中搜寻<code>"Kevin"</code>的示例：
<blockquote>let testStr = "Hello, my name is Kevin.";<br>let testRegex = /Kevin/;<br>testRegex.test(testStr);<br>// Returns true</blockquote>
任何其他形式的<code>"Kevin"</code>都不会被匹配。例如，正则表达式<code>/Kevin/</code>不会匹配<code>"kevin"</code>或者<code>"KEVIN"</code>。
<blockquote>let wrongRegex = /kevin/;<br>wrongRegex.test(testStr);<br>// Returns false</blockquote>
后续的挑战将为你展示如何匹配其他形式的字符串。
</section>

## Instructions
<section id='instructions'>
完成正则表达式<code>waldoRegex</code>，在字符串<code>waldoIsHiding</code>中匹配到文本<code>"Waldo"</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "你的正则表达式<code>waldoRegex</code>应该匹配到<code>'Waldo'</code>。"
    testString: assert(waldoRegex.test(waldoIsHiding), '你的正则表达式<code>waldoRegex</code>应该匹配到<code>"Waldo"</code>。');
  - text: 你的正则表达式<code>waldoRegex</code>不应该搜寻其他的任何内容。
    testString: assert(!waldoRegex.test('Somewhere is hiding in this text.'), '你的正则表达式<code>waldoRegex</code>不应该搜寻其他的任何内容。');
  - text: 你应该使用你的正则表达式对字符串执行文字匹配。
    testString: assert(!/\/.*\/i/.test(code), '你应该使用你的正则表达式对字符串执行文字匹配。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              