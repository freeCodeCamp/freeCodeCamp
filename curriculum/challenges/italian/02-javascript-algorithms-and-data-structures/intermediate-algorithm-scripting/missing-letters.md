---
id: af7588ade1100bde429baf20
title: Lettere mancanti
challengeType: 1
forumTopicId: 16023
dashedName: missing-letters
---

# --description--

Trova la lettera mancante nell'intervallo di lettere passato e restituisca.

Se tutte le lettere sono presenti nell'intervallo, restituisci `undefined`.

# --hints--

`fearNotLetter("abce")` dovrebbe restituire la stringa `d`.

```js
assert.deepEqual(fearNotLetter('abce'), 'd');
```

`fearNotLetter("abcdefghjklmno")` dovrebbe restituire la stringa `i`.

```js
assert.deepEqual(fearNotLetter('abcdefghjklmno'), 'i');
```

`fearNotLetter("stvwx")` dovrebbe restituire la stringa `u`.

```js
assert.deepEqual(fearNotLetter('stvwx'), 'u');
```

`fearNotLetter("bcdf")` dovrebbe restituire la stringa `e`.

```js
assert.deepEqual(fearNotLetter('bcdf'), 'e');
```

`fearNotLetter("abcdefghijklmnopqrstuvwxyz")` dovrebbe restituire `undefined`.

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
