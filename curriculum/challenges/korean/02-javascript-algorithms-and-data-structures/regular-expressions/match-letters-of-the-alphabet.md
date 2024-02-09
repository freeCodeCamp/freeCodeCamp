---
id: 587d7db5367417b2b2512b96
title: Match Letters of the Alphabet
challengeType: 1
forumTopicId: 301354
dashedName: match-letters-of-the-alphabet
---

# --description--

You saw how you can use <dfn>character sets</dfn> to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.

Inside a character set, you can define a range of characters to match using a hyphen character: `-`.

For example, to match lowercase letters `a` through `e` you would use `[a-e]`.

```js
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
```

In order, the three `match` calls would return the values `["cat"]`, `["bat"]`, and `null`.

# --instructions--

Match all the letters in the string `quoteSample`.

**Note**: Be sure to match both uppercase and lowercase letters.

# --hints--

Your regex `alphabetRegex` should match 35 items.

```js
assert(result.length == 35);
```

Your regex `alphabetRegex` should use the global flag.

```js
assert(alphabetRegex.flags.match(/g/).length == 1);
```

Your regex `alphabetRegex` should use the case insensitive flag.

```js
assert(alphabetRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Change this line
let result = alphabetRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
```
