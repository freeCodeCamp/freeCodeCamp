---
id: af7588ade1100bde429baf20
title: الأحرف المفقودة (Missing letters)
challengeType: 1
forumTopicId: 16023
dashedName: missing-letters
---

# --description--

ابحث عن الحرف المفقود في نطاق الحروف الذي تم تمريرها وقم بارجاعه.

إذا كانت جميع الحروف موجودة في النطاق، إرجع `undefined`.

# --hints--

`fearNotLetter("abce")` يجب أن يعيد السلسلة `d`.

```js
assert.deepEqual(fearNotLetter('abce'), 'd');
```

`fearNotLetter("abcdefghjklmno")` يجب أن يعيد السلسلة `i`.

```js
assert.deepEqual(fearNotLetter('abcdefghjklmno'), 'i');
```

`fearNotLetter("stvwx")` يجب أن يعيد السلسلة `u`.

```js
assert.deepEqual(fearNotLetter('stvwx'), 'u');
```

`fearNotLetter("bcdf")` يجب أن يعيد السلسلة `e`.

```js
assert.deepEqual(fearNotLetter('bcdf'), 'e');
```

`fearNotLetter("abcdefghijklmnopqrstuvwxyz")` يجب أن يعيد `undefined`.

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
