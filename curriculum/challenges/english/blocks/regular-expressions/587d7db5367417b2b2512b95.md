---
id: 587d7db5367417b2b2512b95
title: Match Single Character with Multiple Possibilities
challengeType: 1
forumTopicId: 301357
dashedName: match-single-character-with-multiple-possibilities
---

# --description--

You learned how to match literal patterns (`/literal/`) and wildcard character (`/./`). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

You can search for a literal pattern with some flexibility with <dfn>character classes</dfn>. Character classes allow you to define a group of characters you wish to match by placing them inside square (`[` and `]`) brackets.

For example, you want to match `bag`, `big`, and `bug` but not `bog`. You can create the regex `/b[aiu]g/` to do this. The `[aiu]` is the character class that will only match the characters `a`, `i`, or `u`.

```js
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
```

In order, the four `match` calls would return the values `["big"]`, `["bag"]`, `["bug"]`, and `null`.

# --instructions--

Use a character class with vowels (`a`, `e`, `i`, `o`, `u`) in your regex `vowelRegex` to find all the vowels in the string `quoteSample`.

**Note:** Be sure to match both upper- and lowercase vowels.

# --hints--

You should find all 25 vowels.

```js
assert(result.length == 25);
```

Your regex `vowelRegex` should use a character class.

```js
assert(/\[.*\]/.test(vowelRegex.source));
```

Your regex `vowelRegex` should use the global flag.

```js
assert(vowelRegex.flags.match(/g/).length == 1);
```

Your regex `vowelRegex` should use the case insensitive flag.

```js
assert(vowelRegex.flags.match(/i/).length == 1);
```

Your regex should not match any consonants.

```js
assert(!/[b-df-hj-np-tv-z]/gi.test(result.join()));
```

# --seed--

## --seed-contents--

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Change this line
let result = vowelRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
```
