---
id: 587d7dba367417b2b2512ba8
title: Check for All or None
challengeType: 1
forumTopicId: 301338
dashedName: check-for-all-or-none
---

# --description--

Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless.

You can specify the possible existence of an element with a question mark, `?`. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

For example, there are slight differences in American and British English and you can use the question mark to match both spellings.

```js
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
```

Both uses of the `test` method would return `true`.

# --instructions--

Change the regex `favRegex` to match both the American English (`favorite`) and the British English (`favourite`) version of the word.

# --hints--

Your regex should use the optional symbol, `?`.

```js
favRegex.lastIndex = 0;
assert(favRegex.source.match(/\?/).length > 0);
```

Your regex should match the string `favorite`

```js
favRegex.lastIndex = 0;
assert(favRegex.test('favorite'));
```

Your regex should match the string `favourite`

```js
favRegex.lastIndex = 0;
assert(favRegex.test('favourite'));
```

Your regex should not match the string `fav`

```js
favRegex.lastIndex = 0;
assert(!favRegex.test('fav'));
```

# --seed--

## --seed-contents--

```js
let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);
```

# --solutions--

```js
let favWord = "favorite";
let favRegex = /favou?r/;
let result = favRegex.test(favWord);
```
