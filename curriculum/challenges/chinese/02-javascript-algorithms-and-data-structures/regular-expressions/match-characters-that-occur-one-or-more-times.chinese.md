---
id: 587d7db6367417b2b2512b99
title: Match Characters that Occur One or More Times
challengeType: 1
videoUrl: ''
localeTitle: 匹配出现一次或多次的字符
---

## Description
<section id="description">有时，您需要匹配连续出现一次或多次的字符（或字符组）。这意味着它至少发生一次，并且可以重复。您可以使用<code>+</code>字符来检查是否是这种情况。请记住，角色或模式必须连续出现。也就是说，角色必须一个接一个地重复。例如， <code>/a+/g</code>会在<code>&quot;abc&quot;</code>找到一个匹配并返回<code>[&quot;a&quot;]</code> 。由于<code>+</code> ，它也会在<code>&quot;aabc&quot;</code>找到一个匹配并返回<code>[&quot;aa&quot;]</code> 。如果它是检查字符串<code>&quot;abab&quot;</code> ，它会找到两个匹配并返回<code>[&quot;a&quot;, &quot;a&quot;]</code>因为<code>a</code>字符不在一行 - 它们之间有一个<code>b</code> 。最后，由于字符串<code>&quot;bcd&quot;</code>没有<code>&quot;a&quot;</code> <code>&quot;bcd&quot;</code> ，因此找不到匹配项。 </section>

## Instructions
<section id="instructions">您希望在<code>&quot;Mississippi&quot;</code>字母<code>s</code>出现一次或多次时找到匹配项。写一个使用<code>+</code>符号的正则表达式。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式<code>myRegex</code>应该使用<code>+</code>符号来匹配一个或多个<code>s</code>字符。
    testString: 'assert(/\+/.test(myRegex.source), "Your regex <code>myRegex</code> should use the <code>+</code> sign to match one or more <code>s</code> characters.");'
  - text: 你的正则表达式<code>myRegex</code>应该匹配2个项目。
    testString: 'assert(result.length == 2, "Your regex <code>myRegex</code> should match 2 items.");'
  - text: <code>result</code>变量应该是一个包含两个匹配<code>&quot;ss&quot;</code>的数组
    testString: 'assert(result[0] == "ss" && result[1] == "ss", "The <code>result</code> variable should be an array with two matches of <code>"ss"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let difficultSpelling = "Mississippi";
let myRegex = /change/; // Change this line
let result = difficultSpelling.match(myRegex);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
