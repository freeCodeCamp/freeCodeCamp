---
id: bd7123c9c452eddfaeb5bdef
title: Use Bracket Notation to Find the Nth-to-Last Character in a String
challengeType: 1
videoUrl: 'https://scrimba.com/c/cw4vkh9'
forumTopicId: 18344
dashedName: use-bracket-notation-to-find-the-nth-to-last-character-in-a-string
---

# --description--

You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

For example, you can get the value of the third-to-last letter of the `var firstName = "Charles"` string by using `firstName[firstName.length - 3]`

Example:

```js
var firstName = "Charles";
var thirdToLastLetter = firstName[firstName.length - 3];
```

`thirdToLastLetter` would have a value of the string `l`.

# --instructions--

Use <dfn>bracket notation</dfn> to find the second-to-last character in the `lastName` string.

**Hint:** Try looking at the example above if you get stuck.

# --hints--

`secondToLastLetterOfLastName` should be the letter `c`.

```js
assert(secondToLastLetterOfLastName === 'c');
```

You should use `.length` to get the second last letter.

```js
assert(code.match(/\.length/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(secondToLastLetterOfLastName);
```

## --seed-contents--

```js
// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
```
