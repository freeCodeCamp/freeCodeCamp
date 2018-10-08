---
id: 587d7db4367417b2b2512b93
title: Find More Than the First Match
challengeType: 1
---

## Description
<section id='description'>
So far, you have only been able to extract or search a pattern once.
<blockquote>let testStr = "Repeat, Repeat, Repeat";<br>let ourRegex = /Repeat/;<br>testStr.match(ourRegex);<br>// Returns ["Repeat"]</blockquote>
To search or extract a pattern more than once, you can use the <code>g</code> flag.
<blockquote>let repeatRegex = /Repeat/g;<br>testStr.match(repeatRegex);<br>// Returns ["Repeat", "Repeat", "Repeat"]</blockquote>
</section>

## Instructions
<section id='instructions'>
Using the regex <code>starRegex</code>, find and extract both <code>"Twinkle"</code> words from the string <code>twinkleStar</code>.
<strong>Note</strong><br>You can have multiple flags on your regex like <code>/search/gi</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex <code>starRegex</code> should use the global flag <code>g</code>
    testString: 'assert(starRegex.flags.match(/g/).length == 1, "Your regex <code>starRegex</code> should use the global flag <code>g</code>");'
  - text: Your regex <code>starRegex</code> should use the case insensitive flag <code>i</code>
    testString: 'assert(starRegex.flags.match(/i/).length == 1, "Your regex <code>starRegex</code> should use the case insensitive flag <code>i</code>");'
  - text: Your match should match both occurrences of the word <code>"Twinkle"</code>
    testString: 'assert(result.sort().join() == twinkleStar.match(/twinkle/gi).sort().join(), "Your match should match both occurrences of the word <code>"Twinkle"</code>");'
  - text: Your match <code>result</code> should have two elements in it.
    testString: 'assert(result.length == 2, "Your match <code>result</code> should have two elements in it.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
