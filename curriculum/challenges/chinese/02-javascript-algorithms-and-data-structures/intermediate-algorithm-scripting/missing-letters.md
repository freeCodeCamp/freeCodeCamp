---
id: af7588ade1100bde429baf20
title: 寻找缺失的字母
challengeType: 1
forumTopicId: 16023
dashedName: missing-letters
---

# --description--

在这道题目中，我们需要写一个函数，找出传入的字符串里缺失的字母并返回它。

如果所有字母都在传入的字符串范围内，返回 `undefined`。

# --hints--

`fearNotLetter("abce")` 应该返回字符串 `d`。

```js
assert.deepEqual(fearNotLetter('abce'), 'd');
```

`fearNotLetter("abcdefghjklmno")` 应返回 `i`。

```js
assert.deepEqual(fearNotLetter('abcdefghjklmno'), 'i');
```

`fearNotLetter("stvwx")` 应该返回字符串 `u`。

```js
assert.deepEqual(fearNotLetter('stvwx'), 'u');
```

`fearNotLetter("bcdf")` 应该返回字符串 `e`。

```js
assert.deepEqual(fearNotLetter('bcdf'), 'e');
```

`fearNotLetter("abcdefghijklmnopqrstuvwxyz")` 应返回 `undefined`。

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
