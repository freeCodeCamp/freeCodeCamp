---
id: af7588ade1100bde429baf20
title: Letras faltantes
challengeType: 1
forumTopicId: 16023
dashedName: missing-letters
---

# --description--

Encuentra la letra que falta en la siguiente cadena de letras y devuélvela.

Si todas las letras están presentes en la cadena, devuelve `undefined`.

# --hints--

`fearNotLetter("abce")` debe devolver la cadena `d`.

```js
assert.deepEqual(fearNotLetter('abce'), 'd');
```

`fearNotLetter("abcdefghjklmno")` debe devolver la cadena `i`.

```js
assert.deepEqual(fearNotLetter('abcdefghjklmno'), 'i');
```

`fearNotLetter("stvwx")` debe devolver la cadena `u`.

```js
assert.deepEqual(fearNotLetter('stvwx'), 'u');
```

`fearNotLetter("bcdf")` debe devolver la cadena `e`.

```js
assert.deepEqual(fearNotLetter('bcdf'), 'e');
```

`fearNotLetter("abcdefghijklmnopqrstuvwxyz")` debe devolver `undefined`.

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
