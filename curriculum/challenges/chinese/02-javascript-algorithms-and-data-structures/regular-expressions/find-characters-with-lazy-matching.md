---
id: 587d7db6367417b2b2512b9b
challengeType: 1
forumTopicId: 301341
title: 用惰性匹配来查找字符
---

## Description
<section id='description'>
在正则表达式中，<code>贪婪</code>匹配会匹配到符合正则表达式匹配模式的字符串的最长可能部分，并将其作为匹配项返回。另一种方案称为<code>懒惰</code>匹配，它会匹配到满足正则表达式的字符串的最小可能部分。
可以将正则表达式<code>/t[a-z]*i/</code>应用于字符串<code>"titanic"</code>。这个正则表达式是一个以<code>t</code>开始，以<code>i</code>结束，并且中间有一些字母的匹配模式。
正则表达式默认是<code>贪婪</code>匹配，因此匹配返回为<code>["titani"]</code>。它会匹配到适合该匹配模式的最大子字符串。
但是，你可以使用<code>?</code>字符来将其变成<code>懒惰</code>匹配。调整后的正则表达式<code>/t[a-z]*?i/</code>匹配字符串<code>"titanic"</code>返回<code>["ti"]</code>。
<strong>注意</strong><br>应该避免使用正则表达式解析 HTML，但是可以用正则表达式匹配 HTML 字符串。
</section>

## Instructions
<section id='instructions'>
修复正则表达式<code>/&lt;.*&gt;/</code>，让它返回 HTML 标签<code>&lt;h1&gt;</code>，而不是文本<code>"&lt;h1&gt;Winter is coming&lt;/h1&gt;"</code>。请记得在正则表达式中使用通配符<code>.</code>来匹配任意字符。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>结果</code>变量应该是一个包含<code>&lt;h1&gt;</code>的数组。
    testString: assert(result[0] == '<h1>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
```

</section>
