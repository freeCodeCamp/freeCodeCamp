---
id: 587d7db4367417b2b2512b90
title: Match a Literal String with Different Possibilities
challengeType: 1
forumTopicId: 301345
dashedName: match-a-literal-string-with-different-possibilities
---

# --description--

Using regexes like `/coding/`, you can look for the pattern `coding` in another string.

This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the `alternation` or `OR` operator: `|`.

This operator matches patterns either before or after it. For example, if you wanted to match the strings `yes` or `no`, the regex you want is `/yes|no/`.

You can also search for more than just two patterns. You can do this by adding more patterns with more `OR` operators separating them, like `/yes|no|maybe/`.

# --instructions--

Complete the regex `petRegex` to match the pets `dog`, `cat`, `bird`, or `fish`.

# --hints--

Your regex `petRegex` should return `true` for the string `John has a pet dog.`

```js
assert(petRegex.test('John has a pet dog.'));
```

Your regex `petRegex` should return `false` for the string `Emma has a pet rock.`

```js
assert(!petRegex.test('Emma has a pet rock.'));
```

Your regex `petRegex` should return `true` for the string `Emma has a pet bird.`

```js
assert(petRegex.test('Emma has a pet bird.'));
```

Your regex `petRegex` should return `true` for the string `Liz has a pet cat.`

```js
assert(petRegex.test('Liz has a pet cat.'));
```

Your regex `petRegex` should return `false` for the string `Kara has a pet dolphin.`

```js
assert(!petRegex.test('Kara has a pet dolphin.'));
```

Your regex `petRegex` should return `true` for the string `Alice has a pet fish.`

```js
assert(petRegex.test('Alice has a pet fish.'));
```

Your regex `petRegex` should return `false` for the string `Jimmy has a pet computer.`

```js
assert(!petRegex.test('Jimmy has a pet computer.'));
```

# --seed--

## --seed-contents--

```js
let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);
```

# --solutions--

```js
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
```
