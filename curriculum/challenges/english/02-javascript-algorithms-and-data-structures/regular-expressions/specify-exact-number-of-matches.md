---
id: 587d7db9367417b2b2512ba7
title: Specify Exact Number of Matches
challengeType: 1
forumTopicId: 301365
dashedName: specify-exact-number-of-matches
---

# --description--

You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want a specific number of matches.

To specify a certain number of patterns, just have that one number between the curly brackets.

For example, to match only the word `hah` with the letter `a` `3` times, your regex would be `/ha{3}h/`.

```js
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
```

In order, the three `test` calls would return `false`, `true`, and `false`.

# --instructions--

Change the regex `timRegex` to match the word `Timber` only when it has four letter `m`'s.

# --hints--

Your regex should use curly brackets.

```js
assert(timRegex.source.match(/{.*?}/).length > 0);
```

Your regex should not match the string `Timber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timber'));
```

Your regex should not match the string `Timmber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timmber'));
```

Your regex should not match the string `Timmmber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timmmber'));
```

Your regex should match the string `Timmmmber`

```js
timRegex.lastIndex = 0;
assert(timRegex.test('Timmmmber'));
```

Your regex should not match the string `Timber` with 30 `m`'s in it.

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Ti' + 'm'.repeat(30) + 'ber'));
```

# --seed--

## --seed-contents--

```js
let timStr = "Timmmmber";
let timRegex = /change/; // Change this line
let result = timRegex.test(timStr);
```

# --solutions--

```js
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
```
