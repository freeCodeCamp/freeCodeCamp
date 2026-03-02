---
id: 587d7db5367417b2b2512b94
title: Match Anything with Wildcard Period
challengeType: 1
forumTopicId: 301348
dashedName: match-anything-with-wildcard-period
---

# --description--

Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: `.`

The wildcard character `.` will match any one character. The wildcard is also called `dot` and `period`. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match `hug`, `huh`, `hut`, and `hum`, you can use the regex `/hu./` to match all four words.

```js
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
```

Both of these `test` calls would return `true`.

# --instructions--

Complete the regex `unRegex` so that it matches the strings `run`, `sun`, `fun`, `pun`, `nun`, and `bun`. Your regex should use the wildcard character.

# --hints--

You should use the `.test()` method.

```js
assert(__helpers.removeJSComments(code).match(/\.test\(.*\)/));
```

You should use the wildcard character in your regex `unRegex`

```js
assert(/\./.test(unRegex.source));
```

Your regex `unRegex` should match `run` in the string `Let us go on a run.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Let us go on a run.'));
```

Your regex `unRegex` should match `sun` in the string `The sun is out today.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('The sun is out today.'));
```

Your regex `unRegex` should match `fun` in the string `Coding is a lot of fun.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Coding is a lot of fun.'));
```

Your regex `unRegex` should match `pun` in the string `Seven days without a pun makes one weak.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Seven days without a pun makes one weak.'));
```

Your regex `unRegex` should match `nun` in the string `One takes a vow to be a nun.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('One takes a vow to be a nun.'));
```

Your regex `unRegex` should match `bun` in the string `She got fired from the hot dog stand for putting her hair in a bun.`

```js
unRegex.lastIndex = 0;
assert(
  unRegex.test(
    'She got fired from the hot dog stand for putting her hair in a bun.'
  )
);
```

Your regex `unRegex` should not match the string `There is a bug in my code.`

```js
unRegex.lastIndex = 0;
assert(!unRegex.test('There is a bug in my code.'));
```

Your regex `unRegex` should not match the string `Catch me if you can.`

```js
unRegex.lastIndex = 0;
assert(!unRegex.test('Catch me if you can.'));
```

# --seed--

## --seed-contents--

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = unRegex.test(exampleStr);
```

# --solutions--

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
```
