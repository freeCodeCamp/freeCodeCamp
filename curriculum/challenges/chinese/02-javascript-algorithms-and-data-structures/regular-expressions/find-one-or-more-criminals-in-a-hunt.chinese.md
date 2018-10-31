---
id: 587d7db7367417b2b2512b9c
title: Find One or More Criminals in a Hunt
challengeType: 1
videoUrl: ''
localeTitle: 在狩猎中找到一个或多个罪犯
---

## Description
<section id="description">是时候暂停和测试你的新正则表达式写作技巧了。一群罪犯逃出监狱逃跑，但你不知道有多少人。但是，你知道他们和其他人在一起时会保持紧密联系。你有责任立刻找到所有的罪犯。下面是一个查看如何执行此操作的示例：regex <code>/z+/</code>在连续出现一次或多次时匹配字母<code>z</code> 。它会在以下所有字符串中找到匹配项： <blockquote> “Z” <br> “ZZZZZZ” <br> “ABCzzzz” <br> “zzzzABC” <br> “abczzzzzzzzzzzzzzzzzzzzzabc” </blockquote>但它没有在以下字符串中找到匹配项，因为没有字母<code>z</code>字符： <blockquote> “” <br> “ABC” <br> “ABCABC” </blockquote></section>

## Instructions
<section id="instructions">写一个<code>greedy</code>正则表达式，在一群其他人中找到一个或多个罪犯。罪犯由大写字母<code>C</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您正则表达式应该匹配<code>one</code>犯罪（“ <code>C</code>中”）， <code>&quot;C&quot;</code>
    testString: 'assert("C".match(reCriminals) && "C".match(reCriminals)[0] == "C", "Your regex should match <code>one</code> criminal ("<code>C</code>") in <code>"C"</code>");'
  - text: 您正则表达式应该匹配<code>two</code>罪犯（“ <code>CC</code>中”） <code>&quot;CC&quot;</code>
    testString: 'assert("CC".match(reCriminals) && "CC".match(reCriminals)[0] == "CC", "Your regex should match <code>two</code> criminals ("<code>CC</code>") in <code>"CC"</code>");'
  - text: 你的正则表达式应匹配<code>&quot;P1P5P4CCCP2P6P3&quot;</code>中的<code>three</code>罪犯（“ <code>CCC</code> ”）
    testString: 'assert("P1P5P4CCCP2P6P3".match(reCriminals) && "P1P5P4CCCP2P6P3".match(reCriminals)[0] == "CCC", "Your regex should match <code>three</code> criminals ("<code>CCC</code>") in <code>"P1P5P4CCCP2P6P3"</code>");'
  - text: 你的正则表达式应匹配<code>&quot;P6P2P7P4P5CCCCCP3P1&quot;</code>中的<code>five</code>罪犯（“ <code>CCCCC</code> ”）
    testString: 'assert("P6P2P7P4P5CCCCCP3P1".match(reCriminals) && "P6P2P7P4P5CCCCCP3P1".match(reCriminals)[0] == "CCCCC", "Your regex should match <code>five</code> criminals ("<code>CCCCC</code>") in <code>"P6P2P7P4P5CCCCCP3P1"</code>");'
  - text: 你的正则表达式不应该匹配<code>&quot;&quot;</code>中的任何罪犯
    testString: 'assert(!reCriminals.test(""), "Your regex should not match any criminals in <code>""</code>");'
  - text: 你的正则表达式不应该匹配<code>&quot;P1P2P3&quot;</code>中的任何罪犯
    testString: 'assert(!reCriminals.test("P1P2P3"), "Your regex should not match any criminals in <code>"P1P2P3"</code>");'
  - text: 您正则表达式应该与<code>fifty</code>的罪犯（“ <code>CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC</code>中”） <code>&quot;P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3&quot;</code> 。
    testString: 'assert("P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3".match(reCriminals) && "P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3".match(reCriminals)[0] == "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC", "Your regex should match <code>fifty</code> criminals ("<code>CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC</code>") in <code>"P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /./; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
