---
id: 587d7db5367417b2b2512b96
title: Match Letters of the Alphabet
challengeType: 1
forumTopicId: 301354
---

## Description
<section id='description'>
You saw how you can use <dfn>character sets</dfn> to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.
Inside a character set, you can define a range of characters to match using a hyphen character: <code>-</code>.
For example, to match lowercase letters <code>a</code> through <code>e</code> you would use <code>[a-e]</code>.

```js
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null
```

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
    testString: assert(result.length == 35);
  - text: Your regex <code>alphabetRegex</code> should use the global flag.
    testString: assert(alphabetRegex.flags.match(/g/).length == 1);
  - text: Your regex <code>alphabetRegex</code> should use the case insensitive flag.
    testString: assert(alphabetRegex.flags.match(/i/).length == 1);

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
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
```

</section>
