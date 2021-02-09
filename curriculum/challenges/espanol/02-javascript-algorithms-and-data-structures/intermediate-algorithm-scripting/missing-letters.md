---
id: af7588ade1100bde429baf20
title: Missing letters
challengeType: 5
forumTopicId: 16023
dashedName: missing-letters
---

# --description--

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

# --hints--

`fearNotLetter("abce")` should return "d".

```js
assert.deepEqual(fearNotLetter('abce'), 'd');
```

`fearNotLetter("abcdefghjklmno")` should return "i".

```js
assert.deepEqual(fearNotLetter('abcdefghjklmno'), 'i');
```

`fearNotLetter("stvwx")` should return "u".

```js
assert.deepEqual(fearNotLetter('stvwx'), 'u');
```

`fearNotLetter("bcdf")` should return "e".

```js
assert.deepEqual(fearNotLetter('bcdf'), 'e');
```

`fearNotLetter("abcdefghijklmnopqrstuvwxyz")` should return undefined.

```js
assert.isUndefined(fearNotLetter('abcdefghijklmnopqrstuvwxyz'));
```

# --seed--

## --seed-contents--

```js
function fearNotLetter(str) {
  return str;
}

fearNotLetter("abce");
```

# --solutions--

```js
function fearNotLetter (str) {
  for (var i = str.charCodeAt(0); i <= str.charCodeAt(str.length - 1); i++) {
    var letter = String.fromCharCode(i);
    if (str.indexOf(letter) === -1) {
      return letter;
    }
  }

  return undefined;
}
```
