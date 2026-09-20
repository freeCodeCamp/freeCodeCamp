---
id: af7588ade1100bde429baf20
title: Build a Missing Letter Detector
challengeType: 26
dashedName: build-a-missing-letter-detector
---

# --description--

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have a function named `fearNotLetter`.
1. The `fearNotLetter` function should accept one argument: a string representing a range of letters in alphabetical order which can have one letter missing.
1. The function should find the missing letter in the passed letter range and return it.
1. If all letters are present in the range, the function should return `undefined`.

# --hints--

You should have a `fearNotLetter` function.

```js
assert.isFunction(fearNotLetter);
```

`fearNotLetter("abce")` should return the string `d`.

```js
assert.deepEqual(fearNotLetter('abce'), 'd');
```

`fearNotLetter("abcdefghjklmno")` should return the string `i`.

```js
assert.deepEqual(fearNotLetter('abcdefghjklmno'), 'i');
```

`fearNotLetter("stvwx")` should return the string `u`.

```js
assert.deepEqual(fearNotLetter('stvwx'), 'u');
```

`fearNotLetter("bcdf")` should return the string `e`.

```js
assert.deepEqual(fearNotLetter('bcdf'), 'e');
```

`fearNotLetter("abcdefghijklmnopqrstuvwxyz")` should return `undefined`.

```js
assert.isUndefined(fearNotLetter('abcdefghijklmnopqrstuvwxyz'));
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function fearNotLetter (str) {
  for (var i = str.charCodeAt(0); i <= str.charCodeAt(str.length - 1); i++) {
    let letter = String.fromCharCode(i);
    if (str.indexOf(letter) === -1) {
      return letter;
    }
  }

  return undefined;
}
```
