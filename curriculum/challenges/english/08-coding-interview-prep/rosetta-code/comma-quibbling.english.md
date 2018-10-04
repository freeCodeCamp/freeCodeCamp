---
title: Comma quibbling
id: 596e414344c3b2872167f0fe
challengeType: 5
---

## Description
<section id='description'>
<p>Comma quibbling is a task originally set by Eric Lippert in his <a href="http://blogs.msdn.com/b/ericlippert/archive/2009/04/15/comma-quibbling.aspx" title="link: http://blogs.msdn.com/b/ericlippert/archive/2009/04/15/comma-quibbling.aspx">blog</a>.</p>
Task:<p>Write a function to generate a string output which is the concatenation of input words from a list/sequence where:</p>
An input of no words produces the output string of just the two brace characters "{}".
An input of just one word, e.g. ["ABC"], produces the output string of the word inside the two braces, e.g. "{ABC}".
An input of two words, e.g. ["ABC", "DEF"], produces the output string of the two words inside the two braces with the words separated by the string " and ", e.g. "{ABC and DEF}".
An input of three or more words, e.g. ["ABC", "DEF", "G", "H"], produces the output string of all but the last word separated by ", " with the last word separated by " and " and all within braces; e.g. "{ABC, DEF, G and H}".
<p>Test your function with the following series of inputs showing your output here on this page:</p>
[]                       # (No input words).
["ABC"]
["ABC", "DEF"]
["ABC", "DEF", "G", "H"]
<p>Note: Assume words are non-empty strings of uppercase characters for this task.</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>quibble</code> is a function.
    testString: 'assert(typeof quibble === ''function'', ''<code>quibble</code> is a function.'');'
  - text: '<code>quibble(["ABC"])</code> should return a string.'
    testString: 'assert(typeof quibble(["ABC"]) === ''string'', ''<code>quibble(["ABC"])</code> should return a string.'');'
  - text: '<code>quibble([])</code> should return "{}".'
    testString: 'assert.equal(quibble(testCases[0]), results[0], ''<code>quibble([])</code> should return "{}".'');'
  - text: '<code>quibble(["ABC"])</code> should return "{ABC}".'
    testString: 'assert.equal(quibble(testCases[1]), results[1], ''<code>quibble(["ABC"])</code> should return "{ABC}".'');'
  - text: '<code>quibble(["ABC", "DEF"])</code> should return "{ABC and DEF}".'
    testString: 'assert.equal(quibble(testCases[2]), results[2], ''<code>quibble(["ABC", "DEF"])</code> should return "{ABC and DEF}".'');'
  - text: '<code>quibble(["ABC", "DEF", "G", "H"])</code> should return "{ABC,DEF,G and H}".'
    testString: 'assert.equal(quibble(testCases[3]), results[3], ''<code>quibble(["ABC", "DEF", "G", "H"])</code> should return "{ABC,DEF,G and H}".'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quibble (words) {
  // Good luck!
  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
function quibble (words) {
  return "{" +
    words.slice(0, words.length - 1).join(",") +
   (words.length > 1 ? " and " : "") +
   (words[words.length - 1] || '') +
  "}";
}

```

</section>
