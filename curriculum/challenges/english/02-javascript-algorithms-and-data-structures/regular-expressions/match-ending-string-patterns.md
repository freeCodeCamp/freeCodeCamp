---
id: 587d7db7367417b2b2512b9e
title: Match Ending String Patterns
challengeType: 1
forumTopicId: 301352
dashedName: match-ending-string-patterns
---

# --description--

In the last challenge, you learned to use the caret character to search for patterns at the beginning of strings. There is also a way to search for patterns at the end of strings.

You can search the end of strings using the dollar sign character `$` at the end of the regex.

```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
```

The first `test` call would return `true`, while the second would return `false`.

# --instructions--

Use the anchor character (`$`) to match the string `caboose` at the end of the string `caboose`.

# --hints--

You should search for `caboose` with the dollar sign `$` anchor in your regex.

```js
assert(lastRegex.source == 'caboose$');
```

Your regex should not use any flags.

```js
assert(lastRegex.flags == '');
```

You should match `caboose` at the end of the string `The last car on a train is the caboose`

```js
assert(lastRegex.test('The last car on a train is the caboose'));
```

# --seed--

## --seed-contents--

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Change this line
let result = lastRegex.test(caboose);
```

# --solutions--

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
```
