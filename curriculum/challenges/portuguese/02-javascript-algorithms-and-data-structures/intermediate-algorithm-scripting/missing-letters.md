---
id: af7588ade1100bde429baf20
title: Encontrar as letras faltando
challengeType: 1
forumTopicId: 16023
dashedName: missing-letters
---

# --description--

Encontre a letra que falta no intervalo de letras passado e devolva-a.

Se todas as letras estiverem presentes no intervalo, retorne `undefined`.

# --hints--

`fearNotLetter("abce")` deve retornar a string `d`.

```js
assert.deepEqual(fearNotLetter('abce'), 'd');
```

`fearNotLetter("abcdefghjklmno")` deve retornar a string `i`.

```js
assert.deepEqual(fearNotLetter('abcdefghjklmno'), 'i');
```

`fearNotLetter("stvwx")` deve retornar a string `u`.

```js
assert.deepEqual(fearNotLetter('stvwx'), 'u');
```

`fearNotLetter("bcdf")` deve retornar a string `e`.

```js
assert.deepEqual(fearNotLetter('bcdf'), 'e');
```

`fearNotLetter("abcdefghijklmnopqrstuvwxyz")` deve retornar `undefined`.

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
