---
id: 587d7dbb367417b2b2512bac
title: Remove Whitespace from Start and End
challengeType: 1
forumTopicId: 301362
dashedName: remove-whitespace-from-start-and-end
---

# --description--

Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.

# --instructions--

Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

**Note:** The `String.prototype.trim()` method would work here, but you'll need to complete this challenge using regular expressions.

# --hints--

`result` should be equal to the string `Hello, World!`

```js
assert(result === 'Hello, World!');
```

Your solution should not use the `String.prototype.trim()` method.

```js
assert(!__helpers.removeJSComments(code).match(/\.?[\s\S]*?trim/));
```

The `result` variable should not directly be set to a string

```js
assert(!__helpers.removeJSComments(code).match(/result\s*=\s*["'`].*?["'`]/));
```

The value of the `hello` variable should not be changed.

```js
assert(hello === '   Hello, World!  ');
```

# --seed--

## --seed-contents--

```js
let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line
```

# --solutions--

```js
let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)(.+[^\s])(\s+)$/;
let result = hello.replace(wsRegex, '$2');
```
