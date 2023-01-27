---
id: af7588ade1100bde429baf20
title: Fehlende Buchstaben
challengeType: 1
forumTopicId: 16023
dashedName: missing-letters
---

# --description--

Finden Sie den fehlenden Buchstaben im übergebenen Buchstabenbereich und geben Sie ihn zurück.

Wenn sich alle Buchstaben im Bereich befinden, gib `undefined` zurück.

# --hints--

`fearNotLetter("abce")` sollte den String `d` zurückgeben.

```js
assert.deepEqual(fearNotLetter('abce'), 'd');
```

`fearNotLetter("abcdefghjklmno")` sollte den String `i` zurückgeben.

```js
assert.deepEqual(fearNotLetter('abcdefghjklmno'), 'i');
```

`fearNotLetter("stvwx")` sollte den String `u` zurückgeben.

```js
assert.deepEqual(fearNotLetter('stvwx'), 'u');
```

`fearNotLetter("bcdf")` sollte den String `e` zurückgeben.

```js
assert.deepEqual(fearNotLetter('bcdf'), 'e');
```

`fearNotLetter("abcdefghijklmnopqrstuvwxyz")` sollte `undefined` zurückgeben.

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
