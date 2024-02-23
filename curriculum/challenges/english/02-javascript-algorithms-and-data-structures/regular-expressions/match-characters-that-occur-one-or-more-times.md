---
id: 587d7db6367417b2b2512b99
title: Match Characters that Occur One or More Times
challengeType: 1
forumTopicId: 301350
dashedName: match-characters-that-occur-one-or-more-times
---

# --description--

Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.

You can use the `+` character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.

For example, `/a+/g` would find one match in `abc` and return `["a"]`. Because of the `+`, it would also find a single match in `aabc` and return `["aa"]`.

If it were instead checking the string `abab`, it would find two matches and return `["a", "a"]` because the `a` characters are not in a row - there is a `b` between them. Finally, since there is no `a` in the string `bcd`, it wouldn't find a match.

# --instructions--

You want to find matches when the letter `s` occurs one or more times in `Mississippi`. Write a regex that uses the `+` sign.

# --hints--

Your regex `myRegex` should use the `+` sign to match one or more `s` characters.

```js
assert(/\+/.test(myRegex.source));
```

Your regex `myRegex` should match 2 items.

```js
assert(result.length == 2);
```

The `result` variable should be an array with two matches of `ss`

```js
assert(result[0] == 'ss' && result[1] == 'ss');
```

# --seed--

## --seed-contents--

```js
let difficultSpelling = "Mississippi";
let myRegex = /change/; // Change this line
let result = difficultSpelling.match(myRegex);
```

# --solutions--

```js
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
```
