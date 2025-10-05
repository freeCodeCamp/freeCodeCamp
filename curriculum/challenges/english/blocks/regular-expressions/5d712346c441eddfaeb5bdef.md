---
id: 5d712346c441eddfaeb5bdef
title: Match All Numbers
challengeType: 1
forumTopicId: 18181
dashedName: match-all-numbers
---

# --description--

You've learned shortcuts for common string patterns like alphanumerics. Another common pattern is looking for just digits or numbers.

The shortcut to look for digit characters is `\d`, with a lowercase `d`. This is equal to the character class `[0-9]`, which looks for a single character of any number between zero and nine.

# --instructions--

Use the shorthand character class `\d` to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.

# --hints--

Your regex should use the shortcut character to match digit characters

```js
assert(/\\d/.test(numRegex.source));
```

Your regex should use the global flag.

```js
assert(numRegex.global);
```

Your regex should find 1 digit in the string `9`.

```js
assert('9'.match(numRegex).length == 1);
```

Your regex should find 2 digits in the string `Catch 22`.

```js
assert('Catch 22'.match(numRegex).length == 2);
```

Your regex should find 3 digits in the string `101 Dalmatians`.

```js
assert('101 Dalmatians'.match(numRegex).length == 3);
```

Your regex should find no digits in the string `One, Two, Three`.

```js
assert('One, Two, Three'.match(numRegex) == null);
```

Your regex should find 2 digits in the string `21 Jump Street`.

```js
assert('21 Jump Street'.match(numRegex).length == 2);
```

Your regex should find 4 digits in the string `2001: A Space Odyssey`.

```js
assert('2001: A Space Odyssey'.match(numRegex).length == 4);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /change/; // Change this line
let result = movieName.match(numRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
```
