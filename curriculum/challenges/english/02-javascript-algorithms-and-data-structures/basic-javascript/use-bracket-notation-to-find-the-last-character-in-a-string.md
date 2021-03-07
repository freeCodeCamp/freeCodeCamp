---
id: bd7123c9c451eddfaeb5bdef
title: Use Bracket Notation to Find the Last Character in a String
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQGcv'
forumTopicId: 18342
dashedName: use-bracket-notation-to-find-the-last-character-in-a-string
---

# --description--

In order to get the last letter of a string, you can subtract one from the string's length.

For example, if `var firstName = "Charles"`, you can get the value of the last letter of the string by using `firstName[firstName.length - 1]`.

Example:

```js
var firstName = "Charles";
var lastLetter = firstName[firstName.length - 1];
```

`lastLetter` would have a value of the string `s`.

# --instructions--

Use <dfn>bracket notation</dfn> to find the last character in the `lastName` variable.

**Hint:** Try looking at the example above if you get stuck.

# --hints--

`lastLetterOfLastName` should be the letter `e`.

```js
assert(lastLetterOfLastName === 'e');
```

You should use `.length` to get the last letter.

```js
assert(code.match(/\.length/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(lastLetterOfLastName);
```

## --seed-contents--

```js
// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];
```
