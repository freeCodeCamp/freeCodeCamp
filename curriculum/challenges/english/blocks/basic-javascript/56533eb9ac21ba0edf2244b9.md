---
id: 56533eb9ac21ba0edf2244b9
title: Constructing Strings with Variables
challengeType: 1
forumTopicId: 16805
dashedName: constructing-strings-with-variables
---

# --description--

Sometimes you will need to build a string. By using the concatenation operator (`+`), you can insert one or more variables into a string you're building.

Example:

```js
const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";
```

`ourStr` would have a value of the string `Hello, our name is freeCodeCamp, how are you?`.

# --instructions--

Set `myName` to a string equal to your name and build `myStr` with `myName` between the strings `My name is ` and ` and I am well!`

# --hints--

`myName` should be set to a string at least 3 characters long.

```js
assert(typeof myName !== 'undefined' && myName.length > 2);
```

You should use two `+` operators to build `myStr` with `myName` inside it.

```js
assert(__helpers.removeJSComments(code).match(/["']\s*\+\s*myName\s*\+\s*["']/g).length > 0);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
const myName = "";
const myStr = "";
```

# --solutions--

```js
const myName = "Bob";
const myStr = "My name is " + myName + " and I am well!";
```
