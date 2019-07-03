---
id: 587d7db9367417b2b2512ba6
title: Specify Only the Lower Number of Matches
challengeType: 1

videoUrl: ''
localeTitle: Specify Only the Lower Number of Matches
---

## Description
<section id='description'>
你可以使用带有花括号的<code>数量说明符</code>来指定匹配模式的上下限。但有时候你只想指定匹配模式的下限而不需要指定上限。
为此，在第一个数字后面跟一个逗号即可。
例如，要匹配至少出现<code>3</code>次字母<code>a</code>的字符串<code>"hah"</code>，你的正则表达式应该是<code>/ha{3,}h/</code>。
<blockquote>let A4 = "haaaah";<br>let A2 = "haah";<br>let A100 = "h" + "a".repeat(100) + "h";<br>let multipleA = /ha{3,}h/;<br>multipleA.test(A4); // Returns true<br>multipleA.test(A2); // Returns false<br>multipleA.test(A100); // Returns true</blockquote>
</section>

## Instructions
<section id='instructions'>
修改正则表达式<code>haRegex</code>，匹配包含四个或更多字母<code>z</code>的单词<code>"Hazzah"</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该使用花括号。
    testString: assert(haRegex.source.match(/{.*?}/).length > 0, '你的正则表达式应该使用花括号。');
  - text: "你的正则表达式不应该匹配<code>'Hazzah'</code>。"
    testString: assert(!haRegex.test("Hazzah"), '你的正则表达式不应该匹配<code>"Hazzah"</code>。');
  - text: "你的正则表达式不应该匹配<code>'Hazzzah'</code>。"
    testString: assert(!haRegex.test("Hazzzah"), '你的正则表达式不应该匹配<code>"Hazzzah"</code>。');
  - text: "你的正则表达式应该匹配<code>'Hazzzzah'</code>。"
    testString: assert(haRegex.test("Hazzzzah"), '你的正则表达式应该匹配<code>"Hazzzzah"</code>。');
  - text: "你的正则表达式应该匹配<code>'Hazzzzzah'</code>。"
    testString: assert(haRegex.test("Hazzzzzah"), '你的正则表达式应该匹配<code>"Hazzzzzah"</code>。');
  - text: "你的正则表达式应该匹配<code>'Hazzzzzzah'</code>。"
    testString: assert(haRegex.test("Hazzzzzzah"), '你的正则表达式应该匹配<code>"Hazzzzzzah"</code>。');
  - text: "你的正则表达式不应该匹配拥有 30 个字母<code>z</code>的<code>'Hazzah'</code>。"
    testString: assert(haRegex.test("Ha" + "z".repeat(30) + "ah"), '你的正则表达式不应该匹配拥有 30 个字母<code>z</code>的<code>"Hazzah"</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              