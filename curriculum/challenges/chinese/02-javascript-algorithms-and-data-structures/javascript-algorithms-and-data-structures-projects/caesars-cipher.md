---
id: 56533eb9ac21ba0edf2244e2
title: 凯撒密码
challengeType: 5
forumTopicId: 16003
---

# --description--

`凯撒密码`是最简单和最广为人知的<dfn>密码之一</dfn>，也被称为`移位密码`。在`移位密码`中，明文中的字母通过按照一个固定数目进行偏移后被替换成新的字母。

[ROT13](https://en.wikipedia.org/wiki/ROT13) 是一个被广泛使用的编码技术，明文中的所有字母都被移动 13 位。因此，'A' ↔ 'N', 'B' ↔ 'O' 等等。

请编写一个函数，用于解码一个被 [ROT13](https://en.wikipedia.org/wiki/ROT13) 编码的字符串，然后返回解码后的结果。

所有解码后的字母都必须为字母大写。请不要解码非字母的字符（例如，空格、标点符号），但你需要在结果中保留它们。

# --hints--

`rot13('SERR PBQR PNZC')`应解码为`FREE CODE CAMP`。

```js
assert(rot13('SERR PBQR PNZC') === 'FREE CODE CAMP');
```

`rot13('SERR CVMMN!')`应解码为`FREE PIZZA!`。

```js
assert(rot13('SERR CVMMN!') === 'FREE PIZZA!');
```

`rot13('SERR YBIR?')`应解码为`FREE LOVE?`。

```js
assert(rot13('SERR YBIR?') === 'FREE LOVE?');
```

`rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')`应解码为`THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.`。

```js
assert(
  rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.') ===
    'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'
);
```

# --solutions--

