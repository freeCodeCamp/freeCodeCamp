---
id: af7588ade1100bde429baf20
title: 不足している文字
challengeType: 1
forumTopicId: 16023
dashedName: missing-letters
---

# --description--

渡された文字の範囲で不足している文字を見つけて返してください。

すべての文字が範囲内に存在する場合は、`undefined` を返してください。

# --hints--

`fearNotLetter("abce")` は文字列 `d` を返す必要があります。

```js
assert.deepEqual(fearNotLetter('abce'), 'd');
```

`fearNotLetter("abcdefghjklmno")` は文字列 `i` を返す必要があります。

```js
assert.deepEqual(fearNotLetter('abcdefghjklmno'), 'i');
```

`fearNotLetter("stvwx")` は文字列 `u` を返す必要があります。

```js
assert.deepEqual(fearNotLetter('stvwx'), 'u');
```

`fearNotLetter("bcdf")` は文字列 `e` を返す必要があります。

```js
assert.deepEqual(fearNotLetter('bcdf'), 'e');
```

`fearNotLetter("abcdefghijklmnopqrstuvwxyz")` は `undefined` を返す必要があります。

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
