---
id: 587d7dba367417b2b2512ba9
title: Positive and Negative Lookahead
challengeType: 1

videoUrl: ''
localeTitle: Positive and Negative Lookahead
---

## Description
<section id='description'>
<code>先行断言</code>是告诉 JavaScript 在字符串中向前查找的匹配模式。当你想要在同一个字符串上搜寻多个匹配模式时，这可能非常有用。
有两种<code>先行断言</code>：<code>正向先行断言</code>和<code>负向先行断言</code>。
<code>正向先行断言</code>会查看并确保搜索匹配模式中的元素存在，但实际上并不匹配。正向先行断言的用法是<code>(?=...)</code>，其中<code>...</code>就是需要存在但不会被匹配的部分。
另一方面，<code>负向先行断言</code>会查看并确保搜索匹配模式中的元素不存在。负向先行断言的用法是<code>(?!...)</code>，其中<code>...</code>是你希望不存在的匹配模式。如果负向先行断言部分不存在，将返回匹配模式的其余部分。
尽管先行断言有点儿令人困惑，但是这些示例会有所帮助。
<blockquote>let quit = "qu";<br>let noquit = "qt";<br>let quRegex= /q(?=u)/;<br>let qRegex = /q(?!u)/;<br>quit.match(quRegex); // Returns ["q"]<br>noquit.match(qRegex); // Returns ["q"]</blockquote>
<code>先行断言</code>的更实际用途是检查一个字符串中的两个或更多匹配模式。这里有一个简单的密码检查器，密码规则是 3 到 6 个字符且至少包含一个数字：
<blockquote>let password = "abc123";<br>let checkPass = /(?=\w{3,6})(?=\D*\d)/;<br>checkPass.test(password); // Returns true</blockquote>
</section>

## Instructions
<section id='instructions'>
在正则表达式<code>pwRegex</code>中使用<code>先行断言</code>以匹配至少5个字符且有两个连续数字的密码。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该使用两个正向<code>先行断言</code>。
    testString: assert(pwRegex.source.match(/\(\?=.*?\)\(\?=.*?\)/) !== null, '你的正则表达式应该使用两个正向<code>先行断言</code>。');
  - text: "你的正则表达式不应该匹配<code>'astronaut'</code>。"
    testString: assert(!pwRegex.test("astronaut"), '你的正则表达式不应该匹配<code>"astronaut"</code>。');
  - text: "你的正则表达式不应该匹配<code>'airplanes'</code>。"
    testString: assert(!pwRegex.test("airplanes"), '你的正则表达式不应该匹配<code>"airplanes"</code>。');
  - text: "你的正则表达式应该匹配<code>'bana12'</code>。"
    testString: assert(pwRegex.test("bana12"), '你的正则表达式应该匹配<code>"bana12"</code>。');
  - text: "你的正则表达式应该匹配<code>'abc123'</code>。"
    testString: assert(pwRegex.test("abc123"), '你的正则表达式应该匹配<code>"abc123"</code>。');
  - text: "你的正则表达式不应该匹配<code>'123'</code>。"
    testString: assert(!pwRegex.test("123"), '你的正则表达式不应该匹配<code>"123"</code>。');
  - text: "你的正则表达式不应该匹配<code>'1234'</code>。"
    testString: assert(!pwRegex.test("1234"), '你的正则表达式不应该匹配<code>"1234"</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              