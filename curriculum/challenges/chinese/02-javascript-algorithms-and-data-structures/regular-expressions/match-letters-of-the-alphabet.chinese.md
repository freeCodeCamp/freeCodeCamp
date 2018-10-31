---
id: 587d7db5367417b2b2512b96
title: Match Letters of the Alphabet
challengeType: 1
videoUrl: ''
localeTitle: 匹配字母的字母
---

## Description
<section id="description">您了解了如何使用<code>character sets</code>来指定要匹配的一组字符，但是当您需要匹配大范围的字符（例如，字母表中的每个字母）时，这是很多类型。幸运的是，有一个内置功能，使这简短。在<code>character set</code> ，您可以使用<code>hyphen</code>字符来定义要匹配的<code>hyphen</code>范围： <code>-</code> 。例如，要匹配小写字母<code>a</code>到<code>e</code>您将使用<code>[ae]</code> 。 <blockquote>让catStr =“猫”; <br>让batStr =“蝙蝠”; <br>让matStr =“mat”; <br>让bgRegex = / [ae] at /; <br> catStr.match（bgRegex）; //返回[“cat”] <br> batStr.match（bgRegex）; //返回[“bat”] <br> matStr.match（bgRegex）; //返回null </blockquote></section>

## Instructions
<section id="instructions">匹配字符串<code>quoteSample</code>中的所有字母。 <strong>注意</strong> <br>务必匹配大写和小写<strong>字母<strong>。</strong></strong> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式<code>alphabetRegex</code>应该匹配35项。
    testString: 'assert(result.length == 35, "Your regex <code>alphabetRegex</code> should match 35 items.");'
  - text: 你的正则表达式<code>alphabetRegex</code>应该使用全局标志。
    testString: 'assert(alphabetRegex.flags.match(/g/).length == 1, "Your regex <code>alphabetRegex</code> should use the global flag.");'
  - text: 你的正则表达式<code>alphabetRegex</code>应该使用不区分大小写的标志。
    testString: 'assert(alphabetRegex.flags.match(/i/).length == 1, "Your regex <code>alphabetRegex</code> should use the case insensitive flag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Change this line
let result = alphabetRegex; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
