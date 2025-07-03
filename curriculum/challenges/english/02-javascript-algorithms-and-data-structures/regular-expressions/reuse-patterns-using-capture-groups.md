---
id: 587d7dbb367417b2b2512baa
title: Reuse Patterns Using Capture Groups
challengeType: 1
forumTopicId: 301364
dashedName: reuse-patterns-using-capture-groups
---

# --description--

Say you want to match a word that occurs multiple times like below.

```js
let repeatStr = "row row row your boat";
```

You could use `/row row row/`, but what if you don't know the specific word repeated? <dfn>Capture groups</dfn> can be used to find repeated substrings.

Capture groups are constructed by enclosing the regex pattern to be captured in parentheses. In this case, the goal is to capture a word consisting of alphanumeric characters so the capture group will be `\w+` enclosed by parentheses: `/(\w+)/`.

The substring matched by the group is saved to a temporary "variable", which can be accessed within the same regex using a backslash and the number of the capture group (e.g. `\1`). Capture groups are automatically numbered by the position of their opening parentheses (left to right), starting at 1.

The example below matches a word that occurs thrice separated by spaces:

```js
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
```

Using the `.match()` method on a string will return an array with the matched substring, along with its captured groups.


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
reRegex.lastIndex = 0;
assert(reRegex.test('42 42 42'));
```

Your regex should match the string `100 100 100`.

```js
reRegex.lastIndex = 0;
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
reRegex.lastIndex = 0;
assert(!reRegex.test('101 102 103'));
```

Your regex should not match the string `1 2 3`.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('1 2 3'));
```

Your regex should match the string `10 10 10`.

```js
reRegex.lastIndex = 0;
assert(reRegex.test('10 10 10'));
```

Your regex should not match the string `42\t42\t42`.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('42\t42\t42'));
```

Your regex should not match the string `42  42  42`.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('42  42  42'));
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
let reRegex = /^(\d+) \1 \1$/;
let result = reRegex.test(repeatNum);
```
