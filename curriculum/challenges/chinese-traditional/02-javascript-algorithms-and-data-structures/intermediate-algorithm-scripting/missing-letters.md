---
id: af7588ade1100bde429baf20
title: 尋找缺失的字母
challengeType: 1
forumTopicId: 16023
dashedName: missing-letters
---

# --description--

在這道題目中，我們需要寫一個函數，找出傳入的字符串裏缺失的字母並返回它。

如果所有字母都在傳入的字符串範圍內，返回 `undefined`。

# --hints--

`fearNotLetter("abce")` 應該返回字符串 `d`。

```js
assert.deepEqual(fearNotLetter('abce'), 'd');
```

`fearNotLetter("abcdefghjklmno")` 應返回 `i`。

```js
assert.deepEqual(fearNotLetter('abcdefghjklmno'), 'i');
```

`fearNotLetter("stvwx")` 應該返回字符串 `u`。

```js
assert.deepEqual(fearNotLetter('stvwx'), 'u');
```

`fearNotLetter("bcdf")` 應該返回字符串 `e`。

```js
assert.deepEqual(fearNotLetter('bcdf'), 'e');
```

`fearNotLetter("abcdefghijklmnopqrstuvwxyz")` 應返回 `undefined`。

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
