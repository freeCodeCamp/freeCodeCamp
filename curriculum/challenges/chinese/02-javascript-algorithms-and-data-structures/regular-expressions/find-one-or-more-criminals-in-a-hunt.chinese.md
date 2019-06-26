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
  - text: 測試文本
    testString: assert(true);

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
