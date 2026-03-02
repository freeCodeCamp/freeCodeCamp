---
id: 596e414344c3b2872167f0fe
title: Comma quibbling
challengeType: 1
forumTopicId: 302234
dashedName: comma-quibbling
---

# --description--

<a href="https://rosettacode.org/wiki/Comma_quibbling" target="_blank" rel="noopener noreferrer nofollow">Comma quibbling</a> is a task originally set by Eric Lippert in his blog.

# --instructions--

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

**Note:** Assume words are non-empty strings of uppercase characters for this task.

# --hints--

`quibble` should be a function.

```js
assert(typeof quibble === 'function');
```

`quibble(["ABC"])` should return a string.

```js
assert(typeof quibble(['ABC']) === 'string');
```

`quibble([])` should return "{}".

```js
assert.equal(quibble(testCases[0]), results[0]);
```

`quibble(["ABC"])` should return `"{ABC}"`.

```js
assert.equal(quibble(testCases[1]), results[1]);
```

`quibble(["ABC", "DEF"])` should return `"{ABC and DEF}"`.

```js
assert.equal(quibble(testCases[2]), results[2]);
```

`quibble(["ABC", "DEF", "G", "H"])` should return `"{ABC, DEF, G and H}"`.

```js
assert.equal(quibble(testCases[3]), results[3]);
```

# --seed--

## --after-user-code--

```js
const testCases = [[], ["ABC"], ["ABC", "DEF"], ["ABC", "DEF", "G", "H"]];
const results = ["{}", "{ABC}", "{ABC and DEF}", "{ABC, DEF, G and H}"];
```

## --seed-contents--

```js
function quibble(words) {

  return true;
}
```

# --solutions--

```js
function quibble(words) {
  return "{" +
    words.slice(0, words.length - 1).join(", ") +
   (words.length > 1 ? " and " : "") +
   (words[words.length - 1] || '') +
  "}";
}
```
