---
id: 587d7db7367417b2b2512b9c
title: Find One or More Criminals in a Hunt
challengeType: 1

videoUrl: ''
localeTitle: Find One or More Criminals in a Hunt
---

## Description
<section id='description'>
是时候暂停和测试你的新正则表达式写作技巧了。一群罪犯逃出监狱逃跑，但你不知道有多少人。但是，你知道他们和其他人在一起时会保持紧密联系。你有责任立刻找到所有的罪犯。
这里有一个示例来回顾如何做到这一点：
当字母<code>z</code>在一行中出现一次或连续多次时，正则表达式<code>/z+/</code>会匹配到它。它会在以下所有字符串中找到匹配项：
<blockquote>"z"<br>"zzzzzz"<br>"ABCzzzz"<br>"zzzzABC"<br>"abczzzzzzzzzzzzzzzzzzzzzabc"</blockquote>
但是它不会在以下字符串中找到匹配项，因为它们中没有字母<code>z</code>：
<blockquote>""<br>"ABC"<br>"abcabc"</blockquote>
</section>

## Instructions
<section id='instructions'>
编写一个<code>贪婪</code>正则表达式，在一组其他人中匹配到一个或多个罪犯。罪犯由大写字母<code>C</code>表示。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "你的正则表达式应该匹配<code>'C'</code>中的 <em>一个</em> 罪犯（'<code>C</code>'）。"
    testString: assert('C'.match(reCriminals) && 'C'.match(reCriminals)[0] == 'C', '你的正则表达式应该匹配<code>"C"</code>中的 <em>一个</em> 罪犯（"<code>C</code>"）。');
  - text: "你的正则表达式应该匹配<code>'CC'</code>中的 <em>两个</em> 罪犯（'<code>CC</code>'）。"
    testString: assert('CC'.match(reCriminals) && 'CC'.match(reCriminals)[0] == 'CC', '你的正则表达式应该匹配<code>"CC"</code>中的 <em>两个</em> 罪犯（"<code>CC</code>"）。');
  - text: "你的正则表达式应该匹配<code>'P1P5P4CCCP2P6P3'</code>中的 <em>三个</em> 罪犯（'<code>CCC</code>'）。"
    testString: assert('P1P5P4CCCP2P6P3'.match(reCriminals) && 'P1P5P4CCCP2P6P3'.match(reCriminals)[0] == 'CCC', '你的正则表达式应该匹配<code>"P1P5P4CCCP2P6P3"</code>中的 <em>三个</em> 罪犯（"<code>CCC</code>"）。');
  - text: "你的正则表达式应该匹配<code>'P6P2P7P4P5CCCCCP3P1'</code>中的 <em>五个</em> 罪犯（'<code>CCCCC</code>'）。"
    testString: assert('P6P2P7P4P5CCCCCP3P1'.match(reCriminals) && 'P6P2P7P4P5CCCCCP3P1'.match(reCriminals)[0] == 'CCCCC', '你的正则表达式应该匹配<code>"P6P2P7P4P5CCCCCP3P1"</code>中的 <em>五个</em> 罪犯（"<code>CCCCC</code>"）。');
  - text: "你的正则表达式在<code>''</code>中不应该匹配到任何罪犯。"
    testString: assert(!reCriminals.test(''), '你的正则表达式在<code>""</code>中不应该匹配到任何罪犯。');
  - text: "你的正则表达式在<code>'P1P2P3'</code>中不应该匹配到任何罪犯。"
    testString: assert(!reCriminals.test('P1P2P3'), '你的正则表达式在<code>"P1P2P3"</code>中不应该匹配到任何罪犯。');
  - text: "你的正则表达式应该匹配<code>'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'</code>中的 <em>五十个</em> 罪犯（'<code>CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC</code>'）。"
    testString: assert('P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(reCriminals) && 'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(reCriminals)[0] == "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC", '你的正则表达式应该匹配<code>"P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3"</code>中的 <em>五十个</em> 罪犯（"<code>CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC</code>"）。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              