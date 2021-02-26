---
id: 587d7dba367417b2b2512ba9
title: Positive and Negative Lookahead
challengeType: 1
forumTopicId: 301360
dashedName: positive-and-negative-lookahead
---

# --description--

<dfn>Lookaheads</dfn> are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

There are two kinds of lookaheads: <dfn>positive lookahead</dfn> and <dfn>negative lookahead</dfn>.

A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as `(?=...)` where the `...` is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as `(?!...)` where the `...` is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

Lookaheads are a bit confusing but some examples will help.

```js
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
```

Both of these `match` calls would return `["q"]`.

A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

```js
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
```

# --instructions--

Use lookaheads in the `pwRegex` to match passwords that are greater than 5 characters long, and have two consecutive digits.

# --hints--

Your regex should use two positive `lookaheads`.

```js
assert(pwRegex.source.match(/\(\?=.*?\)\(\?=.*?\)/) !== null);
```

Your regex should not match the string `astronaut`

```js
assert(!pwRegex.test('astronaut'));
```

Your regex should not match the string `banan1`

```js
assert(!pwRegex.test('banan1'));
```

Your regex should match the string `bana12`

```js
assert(pwRegex.test('bana12'));
```

Your regex should match the string `abc123`

```js
assert(pwRegex.test('abc123'));
```

Your regex should not match the string `12345`

```js
assert(!pwRegex.test('12345'));
```

Your regex should match the string `8pass99`

```js
assert(pwRegex.test('8pass99'));
```

Your regex should not match the string `1a2bcde`

```js
assert(!pwRegex.test('1a2bcde'));
```

Your regex should match the string `astr1on11aut`

```js
assert(pwRegex.test('astr1on11aut'));
```

# --seed--

## --seed-contents--

```js
let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);
```

# --solutions--

```js
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
```
