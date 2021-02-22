---
id: 587d7db7367417b2b2512b9d
title: Match Beginning String Patterns
challengeType: 1
forumTopicId: 301349
dashedName: match-beginning-string-patterns
---

# --description--

Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings.

In an earlier challenge, you used the caret character (`^`) inside a character set to create a negated character set in the form `[^thingsThatWillNotBeMatched]`. Outside of a character set, the caret is used to search for patterns at the beginning of strings.

```js
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
```

The first `test` call would return `true`, while the second would return `false`.

# --instructions--

Use the caret character in a regex to find `Cal` only in the beginning of the string `rickyAndCal`.

# --hints--

Your regex should search for the string `Cal` with a capital letter.

```js
assert(calRegex.source == '^Cal');
```

Your regex should not use any flags.

```js
assert(calRegex.flags == '');
```

Your regex should match the string `Cal` at the beginning of the string.

```js
assert(calRegex.test('Cal and Ricky both like racing.'));
```

Your regex should not match the string `Cal` in the middle of a string.

```js
assert(!calRegex.test('Ricky and Cal both like racing.'));
```

# --seed--

## --seed-contents--

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Change this line
let result = calRegex.test(rickyAndCal);
```

# --solutions--

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
```
