---
id: 587d7db4367417b2b2512b91
title: Ignore Case While Matching
challengeType: 1
videoUrl: ''
localeTitle: 匹配时忽略大小写
---

## Description
<section id="description">到目前为止，你已经看过正则表达式来进行字符串的字面匹配。但有时，您可能还希望匹配案例差异。大小写（或有时是大写字母大小写）是大写字母和小写字母之间的区别。大写的示例是<code>&quot;A&quot;</code> ， <code>&quot;B&quot;</code>和<code>&quot;C&quot;</code> 。小写的示例是<code>&quot;a&quot;</code> ， <code>&quot;b&quot;</code>和<code>&quot;c&quot;</code> 。您可以使用所谓的标志来匹配这两种情况。还有其他标志，但在这里你将专注于忽略大小写的标志 - <code>i</code>旗帜。您可以通过将其附加到正则表达式来使用它。使用此标志的示例是<code>/ignorecase/i</code> 。此正则表达式可以匹配字符串<code>&quot;ignorecase&quot;</code> ， <code>&quot;igNoreCase&quot;</code>和<code>&quot;IgnoreCase&quot;</code> 。 </section>

## Instructions
<section id="instructions">写一个正则表达式<code>fccRegex</code>来匹配<code>&quot;freeCodeCamp&quot;</code> ，无论它的情况如何。您的正则表达式不应与任何缩写或带有空格的变体匹配。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该与<code>freeCodeCamp</code>匹配
    testString: 'assert(fccRegex.test("freeCodeCamp"), "Your regex should match <code>freeCodeCamp</code>");'
  - text: 你的正则表达式应该与<code>FreeCodeCamp</code>匹配
    testString: 'assert(fccRegex.test("FreeCodeCamp"), "Your regex should match <code>FreeCodeCamp</code>");'
  - text: 你的正则表达式应该与<code>FreecodeCamp</code>匹配
    testString: 'assert(fccRegex.test("FreecodeCamp"), "Your regex should match <code>FreecodeCamp</code>");'
  - text: 你的正则表达式应该与<code>FreeCodecamp</code>匹配
    testString: 'assert(fccRegex.test("FreeCodecamp"), "Your regex should match <code>FreeCodecamp</code>");'
  - text: 你的正则表达式不应该与<code>Free Code Camp</code>不匹配
    testString: 'assert(!fccRegex.test("Free Code Camp"), "Your regex should not match <code>Free Code Camp</code>");'
  - text: 你的正则表达式应该与<code>FreeCOdeCamp</code>匹配
    testString: 'assert(fccRegex.test("FreeCOdeCamp"), "Your regex should match <code>FreeCOdeCamp</code>");'
  - text: 你的正则表达式不应该与<code>FCC</code>匹配
    testString: 'assert(!fccRegex.test("FCC"), "Your regex should not match <code>FCC</code>");'
  - text: 你的正则表达式应该与<code>FrEeCoDeCamp</code>匹配
    testString: 'assert(fccRegex.test("FrEeCoDeCamp"), "Your regex should match <code>FrEeCoDeCamp</code>");'
  - text: 你的正则表达式应该与<code>FrEeCodECamp</code>匹配
    testString: 'assert(fccRegex.test("FrEeCodECamp"), "Your regex should match <code>FrEeCodECamp</code>");'
  - text: 你的正则表达式应该与<code>FReeCodeCAmp</code>匹配
    testString: 'assert(fccRegex.test("FReeCodeCAmp"), "Your regex should match <code>FReeCodeCAmp</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myString = "freeCodeCamp";
let fccRegex = /change/; // Change this line
let result = fccRegex.test(myString);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
