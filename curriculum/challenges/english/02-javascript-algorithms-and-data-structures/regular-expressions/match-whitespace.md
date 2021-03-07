---
id: 587d7db8367417b2b2512ba3
title: Match Whitespace
challengeType: 1
forumTopicId: 301359
dashedName: match-whitespace
---

# --description--

The challenges so far have covered matching letters of the alphabet and numbers. You can also match the whitespace or spaces between letters.

You can search for whitespace using `\s`, which is a lowercase `s`. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class `[ \r\t\f\n\v]`.

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
```

This `match` call would return `[" ", " "]`.
# --instructions--

Change the regex `countWhiteSpace` to look for multiple whitespace characters in a string.

# --hints--

Your regex should use the global flag.

```js
assert(countWhiteSpace.global);
```

Your regex should use the shorthand character `\s` to match all whitespace characters.

```js
assert(/\\s/.test(countWhiteSpace.source));
```

Your regex should find eight spaces in the string `Men are from Mars and women are from Venus.`

```js
assert(
  'Men are from Mars and women are from Venus.'.match(countWhiteSpace).length ==
    8
);
```

Your regex should find three spaces in the string `Space: the final frontier.`

```js
assert('Space: the final frontier.'.match(countWhiteSpace).length == 3);
```

Your regex should find no spaces in the string `MindYourPersonalSpace`

```js
assert('MindYourPersonalSpace'.match(countWhiteSpace) == null);
```

# --seed--

## --seed-contents--

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // Change this line
let result = sample.match(countWhiteSpace);
```

# --solutions--

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
```
