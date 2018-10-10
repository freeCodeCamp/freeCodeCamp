---
id: 587d7db6367417b2b2512b9b
title: Find Characters with Lazy Matching
challengeType: 1
videoUrl: ''
localeTitle: 查找具有延迟匹配的字符
---

## Description
<section id="description">在正则表达式中， <code>greedy</code>匹配找到符合正则表达式模式的字符串的最长部分，并将其作为匹配返回。替代方案称为<code>lazy</code>匹配，它找到满足正则表达式模式的字符串的最小可能部分。您可以将regex <code>/t[az]*i/</code>应用于字符串<code>&quot;titanic&quot;</code> 。这个正则表达式基本上是一个以<code>t</code>开头的模式，以<code>i</code>结尾，并且在它们之间有一些字母。默认情况下，正则表达式是<code>greedy</code> ，因此匹配将返回<code>[&quot;titani&quot;]</code> 。它找到可能适合模式的最大子串。但是，你可以使用<code>?</code>字符将其更改为<code>lazy</code>匹配。 <code>&quot;titanic&quot;</code>与调整后的正则表达式匹配<code>/t[az]*?i/</code> return <code>[&quot;ti&quot;]</code> 。 </section>

## Instructions
<section id="instructions">修复regex <code>/&lt;.*&gt;/</code>以返回HTML标记<code>&lt;h1&gt;</code>而不是文本<code>&quot;&lt;h1&gt;Winter is coming&lt;/h1&gt;&quot;</code> 。记住通配符<code>.</code>在正则表达式中匹配任何字符。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>result</code>变量应该是一个包含<code>&lt;h1&gt;</code>的数组
    testString: 'assert(result[0] == "<h1>", "The <code>result</code> variable should be an array with <code>&lt;h1&gt;</code> in it");'

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
// solution required
```
</section>
