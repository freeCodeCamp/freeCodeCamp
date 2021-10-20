---
id: 587d7db3367417b2b2512b8f
title: Match Literal Strings
challengeType: 1
forumTopicId: 301355
dashedName: match-literal-strings
---

# --description--

In the last challenge, you searched for the word `Hello` using the regular expression `/Hello/`. That regex searched for a literal match of the string `Hello`. Here's another example searching for a literal match of the string `Kevin`:

```js
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
```

This `test` call will return `true`.

Any other forms of `Kevin` will not match. For example, the regex `/Kevin/` will not match `kevin` or `KEVIN`.

```js
let wrongRegex = /kevin/;
wrongRegex.test(testStr);
```

This `test` call will return `false`.

A future challenge will show how to match those other forms as well.

# --instructions--

Complete the regex `waldoRegex` to find `"Waldo"` in the string `waldoIsHiding` with a literal match.

# --hints--

Your regex `waldoRegex` should find the string `Waldo`

```js
waldoRegex.lastIndex = 0;
assert(waldoRegex.test(waldoIsHiding));
```

Your regex `waldoRegex` should not search for anything else.

```js
waldoRegex.lastIndex = 0;
assert(!waldoRegex.test('Somewhere is hiding in this text.'));
```

You should perform a literal string match with your regex.

```js
assert(!/\/.*\/i/.test(code));
```

# --seed--

## --seed-contents--

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```

# --solutions--

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```
