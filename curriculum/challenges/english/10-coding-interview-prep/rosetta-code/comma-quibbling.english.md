---
title: Comma quibbling
id: 596e414344c3b2872167f0fe
challengeType: 5
isHidden: false
forumTopicId: 302234
---

## Description
<section id='description'>
Comma quibbling is a task originally set by Eric Lippert in his <a href="https://blogs.msdn.com/b/ericlippert/archive/2009/04/15/comma-quibbling.aspx" target="_blank">blog</a>.
</section>

## Instructions
<section id='instructions'>
Write a function to generate a string output which is the concatenation of input words from a list/sequence where:
<ol>
  <li>An input of no words produces the output string of just the two brace characters (<code>"{}"</code>)</li>
  <li>An input of just one word, e.g. <code>["ABC"]</code>, produces the output string of the word inside the two braces, e.g. <code>"{ABC}"</code></li>
  <li>An input of two words, e.g. <code>["ABC", "DEF"]</code>, produces the output string of the two words inside the two braces with the words separated by the string <code>" and "</code>, e.g. <code>"{ABC and DEF}"</code></li>
  <li>An input of three or more words, e.g. <code>["ABC", "DEF", "G", "H"]</code>, produces the output string of all but the last word separated by <code>", "</code> with the last word separated by <code>" and "</code> and all within braces; e.g. <code>"{ABC, DEF, G and H}"</code></li>
</ol>
Test your function with the following series of inputs showing your output here on this page:
<ul>
  <li>[] # (No input words).</li>
  <li>["ABC"]</li>
  <li>["ABC", "DEF"]</li>
  <li>["ABC", "DEF", "G", "H"]</li>
</ul>
<strong>Note:</strong> Assume words are non-empty strings of uppercase characters for this task.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>quibble</code> should be a function.
    testString: assert(typeof quibble === 'function');
  - text: <code>quibble(["ABC"])</code> should return a string.
    testString: assert(typeof quibble(["ABC"]) === 'string');
  - text: <code>quibble([])</code> should return "{}".
    testString: assert.equal(quibble(testCases[0]), results[0]);
  - text: <code>quibble(["ABC"])</code> should return "{ABC}".
    testString: assert.equal(quibble(testCases[1]), results[1]);
  - text: <code>quibble(["ABC", "DEF"])</code> should return "{ABC and DEF}".
    testString: assert.equal(quibble(testCases[2]), results[2]);
  - text: <code>quibble(["ABC", "DEF", "G", "H"])</code> should return "{ABC,DEF,G and H}".
    testString: assert.equal(quibble(testCases[3]), results[3]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quibble(words) {
  // Good luck!
  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const testCases = [[], ["ABC"], ["ABC", "DEF"], ["ABC", "DEF", "G", "H"]];
const results = ["{}", "{ABC}", "{ABC and DEF}", "{ABC,DEF,G and H}"];
```

</div>

</section>

## Solution
<section id='solution'>


```js
function quibble(words) {
  return "{" +
    words.slice(0, words.length - 1).join(",") +
   (words.length > 1 ? " and " : "") +
   (words[words.length - 1] || '') +
  "}";
}

```

</section>
