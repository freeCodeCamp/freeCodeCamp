---
id: bd7123c9c450eddfaeb5bdef
title: Use Bracket Notation to Find the Nth Character in a String
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVJua'
forumTopicId: 18343
dashedName: use-bracket-notation-to-find-the-nth-character-in-a-string
---

# --description--

You can also use <dfn>bracket notation</dfn> to get the character at other positions within a string.

Remember that computers start counting at `0`, so the first character is actually the zeroth character.

Example:

```js
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];
```

`secondLetterOfFirstName` would have a value of the string `d`.

# --instructions--

Let's try to set `thirdLetterOfLastName` to equal the third letter of the `lastName` variable using bracket notation.

**Hint:** Try looking at the example above if you get stuck.

# --hints--

The `thirdLetterOfLastName` variable should have the value of `v`.

```js
assert(thirdLetterOfLastName === 'v');
```

You should use bracket notation.

```js
assert(code.match(/thirdLetterOfLastName\s*?=\s*?lastName\[.*?\]/));
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(thirdLetterOfLastName);
```

## --seed-contents--

```js
// Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
```
