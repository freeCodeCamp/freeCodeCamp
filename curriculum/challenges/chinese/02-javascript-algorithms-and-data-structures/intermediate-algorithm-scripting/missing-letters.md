---
id: af7588ade1100bde429baf20
title: 丢失的字母
challengeType: 5
---

# --description--

在这道题目中，我们需要写一个函数，找到传入的字符串里缺失的字母并返回它。

判断缺失的依据是字母顺序，比如 abcdfg 中缺失了 e。而 abcdef 中就没有字母缺失，此时我们需要返回`undefined`。

如果你遇到了问题，请点击[帮助](https://forum.freecodecamp.one/t/topic/157)。

# --hints--

`fearNotLetter('abce')`应该返回 'd'。

```js
assert.deepEqual(fearNotLetter('abce'), 'd');
```

`fearNotLetter('abcdefghjklmno')`应该返回 'i'。

```js
assert.deepEqual(fearNotLetter('abcdefghjklmno'), 'i');
```

`fearNotLetter('stvwx')`应该返回 'u'。

```js
assert.deepEqual(fearNotLetter('stvwx'), 'u');
```

`fearNotLetter('bcdf')`应该返回 'e'。

```js
assert.deepEqual(fearNotLetter('bcdf'), 'e');
```

`fearNotLetter('abcdefghijklmnopqrstuvwxyz')`应该返回`undefined`。

```js
assert.isUndefined(fearNotLetter('abcdefghijklmnopqrstuvwxyz'));
```

# --solutions--

