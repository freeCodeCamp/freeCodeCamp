---
id: 587d7db9367417b2b2512ba7
title: Specify Exact Number of Matches
challengeType: 1

videoUrl: ''
localeTitle: Specify Exact Number of Matches
---

## Description
<section id='description'>
你可以使用带有花括号的<code>数量说明符</code>来指定匹配模式的上下限。但有时你只需要特定数量的匹配。
要指定一定数量的匹配模式，只需在大括号之间放置一个数字。
例如，要只匹配字母<code>a</code>出现<code>3</code>次的单词<code>"hah"</code>，你的正则表达式应为<code>/ha{3}h/</code>。
<blockquote>let A4 = "haaaah";<br>let A3 = "haaah";<br>let A100 = "h" + "a".repeat(100) + "h";<br>let multipleHA = /a{3}h/;<br>multipleHA.test(A4); // Returns false<br>multipleHA.test(A3); // Returns true<br>multipleHA.test(A100); // Returns false</blockquote>
</section>

## Instructions
<section id='instructions'>
修改正则表达式<code>timRegex</code>，以匹配仅有四个字母单词<code>m</code>的单词<code>"Timber"</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该使用花括号。
    testString: assert(timRegex.source.match(/{.*?}/).length > 0, '你的正则表达式应该使用花括号。');
  - text: "你的正则表达式不应该匹配<code>'Timber'</code>。"
    testString: assert(!timRegex.test("Timber"), '你的正则表达式不应该匹配<code>"Timber"</code>。');
  - text: "你的正则表达式不应该匹配<code>'Timmber'</code>。"
    testString: assert(!timRegex.test("Timmber"), '你的正则表达式不应该匹配<code>"Timmber"</code>。');
  - text: "你的正则表达式不应该匹配<code>'Timmmber'</code>。"
    testString: assert(!timRegex.test("Timmmber"), '你的正则表达式不应该匹配<code>"Timmmber"</code>。');
  - text: "你的正则表达式应该匹配<code>'Timmmmber'</code>。"
    testString: assert(timRegex.test("Timmmmber"), '你的正则表达式应该匹配<code>"Timmmmber"</code>。');
  - text: "你的正则表达式不应该匹配包含 30 个字母<code>m</code>的<code>'Timber'</code>。"
    testString: assert(!timRegex.test("Ti" + "m".repeat(30) + "ber"), '你的正则表达式不应该匹配包含 30 个字母<code>m</code>的<code>"Timber"</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              