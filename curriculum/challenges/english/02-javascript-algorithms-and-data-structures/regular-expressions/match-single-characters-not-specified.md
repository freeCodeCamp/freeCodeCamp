---
id: 587d7db6367417b2b2512b98
title: Match Single Characters Not Specified
challengeType: 1
forumTopicId: 301358
dashedName: match-single-characters-not-specified
---

# --description--

So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. These types of character sets are called <dfn>negated character sets</dfn>.

To create a negated character set, you place a caret character (`^`) after the opening bracket and before the characters you do not want to match.

For example, `/[^aeiou]/gi` matches all characters that are not a vowel. Note that characters like `.`, `!`, `[`, `@`, `/` and white space are matched - the negated vowel character set only excludes the vowel characters.

# --instructions--

Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.

# --hints--

Your regex `myRegex` should match 9 items.

```js
assert(result.length == 9);
```

Your regex `myRegex` should use the global flag.

```js
assert(myRegex.flags.match(/g/).length == 1);
```

Your regex `myRegex` should use the case insensitive flag.

```js
assert(myRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "3 blind mice.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```
