---
id: 587d7db4367417b2b2512b91
title: Ignore Case While Matching
challengeType: 1

videoUrl: ''
localeTitle: Ignore Case While Matching
---

## Description
<section id='description'>
到目前为止，你已经了解了如何用正则表达式来执行字符串的文字匹配。但有时候，你可能也想匹配不同的英文字母大小写。
大小写（或者字母大小写）是大写字母和小写字母的区别。大写字母的例子有<code>"A"</code>、<code>"B"</code>和<code>"C"</code>。小写字母的例子有<code>"a"</code>、<code>"b"</code>和<code>"c"</code>。
你可以使用标志（flag）来匹配这两种情况。标志有很多，不过这里我们只关注忽略大小写的标志——<code>i</code>。你可以通过将它附加到正则表达式之后来使用它。这里给出使用该标志的一个实例<code>/ignorecase/i</code>。这个字符串可以匹配字符串<code>"ignorecase"</code>、<code>"igNoreCase"</code>和<code>"IgnoreCase"</code>。
</section>

## Instructions
<section id='instructions'>
编写正则表达式<code>fccRegex</code>以匹配<code>"freeCodeCamp"</code>，忽略大小写。你的正则表达式不应与任何缩写或带有空格的变体匹配。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该匹配<code>freeCodeCamp</code>。
    testString: assert(fccRegex.test('freeCodeCamp'), '你的正则表达式应该匹配<code>freeCodeCamp</code>。');
  - text: 你的正则表达式应该匹配<code>FreeCodeCamp</code>。
    testString: assert(fccRegex.test('FreeCodeCamp'), '你的正则表达式应该匹配<code>FreeCodeCamp</code>。');
  - text: 你的正则表达式应该匹配<code>FreecodeCamp</code>。
    testString: assert(fccRegex.test('FreecodeCamp'), '你的正则表达式应该匹配<code>FreecodeCamp</code>。');
  - text: 你的正则表达式应该匹配<code>FreeCodecamp</code>。
    testString: assert(fccRegex.test('FreeCodecamp'), '你的正则表达式应该匹配<code>FreeCodecamp</code>。');
  - text: 你的正则表达式不应该匹配<code>Free Code Camp</code>。
    testString: assert(!fccRegex.test('Free Code Camp'), '你的正则表达式不应该匹配<code>Free Code Camp</code>。');
  - text: Your regex should match<code>FreeCOdeCamp</code>。
    testString: assert(fccRegex.test('FreeCOdeCamp'), 'Your regex should match<code>FreeCOdeCamp</code>。');
  - text: 你的正则表达式不应该匹配<code>FCC</code>。
    testString: assert(!fccRegex.test('FCC'), '你的正则表达式不应该匹配<code>FCC</code>。');
  - text: 你的正则表达式应该匹配<code>FrEeCoDeCamp</code>。
    testString: assert(fccRegex.test('FrEeCoDeCamp'), '你的正则表达式应该匹配<code>FrEeCoDeCamp</code>。');
  - text: 你的正则表达式应该匹配<code>FrEeCodECamp</code>。
    testString: assert(fccRegex.test('FrEeCodECamp'), '你的正则表达式应该匹配<code>FrEeCodECamp</code>。');
  - text: 你的正则表达式应该匹配<code>FReeCodeCAmp</code>。
    testString: assert(fccRegex.test('FReeCodeCAmp'), '你的正则表达式应该匹配<code>FReeCodeCAmp</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              