---
id: 587d7db5367417b2b2512b96
title: Match Letters of the Alphabet
challengeType: 1
---

## Description
<section id='description'>
You saw how you can use <code>character sets</code> to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.
Inside a <code>character set</code>, you can define a range of characters to match using a <code>hyphen</code> character: <code>-</code>.
For example, to match lowercase letters <code>a</code> through <code>e</code> you would use <code>[a-e]</code>.
<blockquote>let catStr = "cat";<br>let batStr = "bat";<br>let matStr = "mat";<br>let bgRegex = /[a-e]at/;<br>catStr.match(bgRegex); // Returns ["cat"]<br>batStr.match(bgRegex); // Returns ["bat"]<br>matStr.match(bgRegex); // Returns null</blockquote>
</section>

## Instructions
<section id='instructions'>
Match all the letters in the string <code>quoteSample</code>.
<strong>Note</strong><br>Be sure to match both upper- and lowercase <strong>letters<strong>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex <code>alphabetRegex</code> should match 35 items.
    testString: 'assert(result.length == 35, ''Your regex <code>alphabetRegex</code> should match 35 items.'');'
  - text: Your regex <code>alphabetRegex</code> should use the global flag.
    testString: 'assert(alphabetRegex.flags.match(/g/).length == 1, ''Your regex <code>alphabetRegex</code> should use the global flag.'');'
  - text: Your regex <code>alphabetRegex</code> should use the case insensitive flag.
    testString: 'assert(alphabetRegex.flags.match(/i/).length == 1, ''Your regex <code>alphabetRegex</code> should use the case insensitive flag.'');'

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
