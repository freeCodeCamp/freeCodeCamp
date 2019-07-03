---
id: 587d7db5367417b2b2512b97
title: Match Numbers and Letters of the Alphabet
challengeType: 1

videoUrl: ''
localeTitle: Match Numbers and Letters of the Alphabet
---

## Description
<section id='description'>
使用连字符（<code>-</code>）匹配字符范围并不仅限于字母。它还可以匹配一系列数字。
例如，<code>/[0-5]/</code>匹配<code>0</code>和<code>5</code>之间的任意数字，包含<code>0</code>和<code>5</code>。
此外，还可以在单个字符集中组合一系列字母和数字。
<blockquote>let jennyStr = "Jenny8675309";<br>let myRegex = /[a-z0-9]/ig;<br>// matches all letters and numbers in jennyStr<br>jennyStr.match(myRegex);</blockquote>
</section>

## Instructions
<section id='instructions'>
创建一个正则表达式，使其可以匹配<code>h</code>和<code>s</code>之间的一系列字母，以及<code>2</code>和<code>6</code>之间的一系列数字。请记得在正则表达式中包含恰当的标志。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式<code>myRegex</code>应该匹配 17 项。
    testString: assert(result.length == 17, '你的正则表达式<code>myRegex</code>应该匹配 17 项。');
  - text: 你的正则表达式<code>myRegex</code>应该使用全局标志。
    testString: assert(myRegex.flags.match(/g/).length == 1, '你的正则表达式<code>myRegex</code>应该使用全局标志。');
  - text: 你的正则表达式<code>myRegex</code>应该使用忽略大小写的标志。
    testString: assert(myRegex.flags.match(/i/).length == 1, '你的正则表达式<code>myRegex</code>应该使用忽略大小写的标志。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              