---
id: 587d7db4367417b2b2512b93
title: Find More Than the First Match
challengeType: 1
forumTopicId: 301342
dashedName: find-more-than-the-first-match
---

# --description--

So far, you have only been able to extract or search a pattern once.

```js
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
```

Here `match` would return `["Repeat"]`.

To search or extract a pattern more than once, you can use the `g` flag.

```js
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
```

And here `match` returns the value `["Repeat", "Repeat", "Repeat"]`

# --instructions--

Using the regex `starRegex`, find and extract both `Twinkle` words from the string `twinkleStar`.

**Note**  
You can have multiple flags on your regex like `/search/gi`

# --hints--

Your regex `starRegex` should use the global flag `g`

```js
assert(starRegex.flags.match(/g/).length == 1);
```

Your regex `starRegex` should use the case insensitive flag `i`

```js
assert(starRegex.flags.match(/i/).length == 1);
```

Your match should match both occurrences of the word `Twinkle`

```js
assert(
  result.sort().join() ==
    twinkleStar
      .match(/twinkle/gi)
      .sort()
      .join()
);
```

Your match `result` should have two elements in it.

```js
assert(result.length == 2);
```

# --seed--

## --seed-contents--

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line
```

# --solutions--

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);
```
