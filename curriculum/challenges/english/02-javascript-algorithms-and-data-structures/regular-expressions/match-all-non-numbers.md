---
id: 587d7db8367417b2b2512ba1
title: Match All Non-Numbers
challengeType: 1
forumTopicId: 301347
dashedName: match-all-non-numbers
---

# --description--

The last challenge showed how to search for digits using the shortcut `\d` with a lowercase `d`. You can also search for non-digits using a similar shortcut that uses an uppercase `D` instead.

The shortcut to look for non-digit characters is `\D`. This is equal to the character class `[^0-9]`, which looks for a single character that is not a number between zero and nine.

# --instructions--

Use the shorthand character class for non-digits `\D` to count how many non-digits are in movie titles.

# --hints--

Your regex should use the shortcut character to match non-digit characters

```js
assert(/\\D/.test(noNumRegex.source));
```

Your regex should use the global flag.

```js
assert(noNumRegex.global);
```

Your regex should find no non-digits in the string `9`.

```js
assert('9'.match(noNumRegex) == null);
```

Your regex should find 6 non-digits in the string `Catch 22`.

```js
assert('Catch 22'.match(noNumRegex).length == 6);
```

Your regex should find 11 non-digits in the string `101 Dalmatians`.

```js
assert('101 Dalmatians'.match(noNumRegex).length == 11);
```

Your regex should find 15 non-digits in the string `One, Two, Three`.

```js
assert('One, Two, Three'.match(noNumRegex).length == 15);
```

Your regex should find 12 non-digits in the string `21 Jump Street`.

```js
assert('21 Jump Street'.match(noNumRegex).length == 12);
```

Your regex should find 17 non-digits in the string `2001: A Space Odyssey`.

```js
assert('2001: A Space Odyssey'.match(noNumRegex).length == 17);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // Change this line
let result = movieName.match(noNumRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
```
