---
id: 587d7dbb367417b2b2512baa
title: Reuse Patterns Using Capture Groups
challengeType: 1
forumTopicId: 301364
dashedName: reuse-patterns-using-capture-groups
---

# --description--

Some patterns you search for will occur multiple times in a string. It is wasteful to manually repeat that regex. There is a better way to specify when you have multiple repeat substrings in your string.

You can search for repeat substrings using <dfn>capture groups</dfn>. Parentheses, `(` and `)`, are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses.

To specify where that repeat string will appear, you use a backslash (`\`) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be `\1` to match the first group.

The example below matches any word that occurs twice separated by a space:

```js
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr);
repeatStr.match(repeatRegex);
```

The `test` call would return `true`, and the `match` call would return `["regex regex", "regex"]`.

Using the `.match()` method on a string will return an array with the string it matches, along with its capture group.

# --instructions--

Use capture groups in `reRegex` to match a string that consists of only the same number repeated exactly three times separated by single spaces.

# --hints--

Your regex should use the shorthand character class for digits.

```js
assert(reRegex.source.match(/\\d/));
```

Your regex should reuse a capture group twice.

```js
assert(reRegex.source.match(/\\1|\\2/g).length >= 2);
```

Your regex should match the string `42 42 42`.

```js
assert(reRegex.test('42 42 42'));
```

Your regex should match the string `100 100 100`.

```js
assert(reRegex.test('100 100 100'));
```

Your regex should not match the string `42 42 42 42`.

```js
assert.equal('42 42 42 42'.match(reRegex.source), null);
```

Your regex should not match the string `42 42`.

```js
assert.equal('42 42'.match(reRegex.source), null);
```

Your regex should not match the string `101 102 103`.

```js
assert(!reRegex.test('101 102 103'));
```

Your regex should not match the string `1 2 3`.

```js
assert(!reRegex.test('1 2 3'));
```

Your regex should match the string `10 10 10`.

```js
assert(reRegex.test('10 10 10'));
```

# --seed--

## --seed-contents--

```js
let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);
```

# --solutions--

```js
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
```
