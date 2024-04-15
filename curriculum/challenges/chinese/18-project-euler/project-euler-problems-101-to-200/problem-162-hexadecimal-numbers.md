---
id: 5900f40e1000cf542c50ff21
title: '问题162：十六进制数'
challengeType: 1
forumTopicId: 301796
dashedName: problem-162-hexadecimal-numbers
---

# --description--

In the hexadecimal number system numbers are represented using 16 different digits:

$$0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F$$

十进制数字系统中写入的十六进制数字 AF 等于 $10 \times 16 + 15 = 175$。

在3位十六进制数10A，1A0，A10 和 A01 中，数字0,1和 A 都存在。

就像用十进制数写的数字一样，我们写十六进制数而不带前导零。

包含最多十六个十六进制数字的十六进制数是多少，所有数字0,1和A至少出现一次？

以十六进制数字构成字符串的形式给出你的答案。

**注意：** （A,B,C,D,E 和 F 大写，没有任何标记为十六进制的前导或尾随码，也没有前导零，例如1A3F 而不是：1a3f、0x1a3f、$1A3F、#1A3F、0000001A3F）。

# --hints--

`hexadecimalNumbers()` 应该返回一个字符串。

```js
assert(typeof hexadecimalNumbers() === 'string');
```

`hexadecimalNumbers()` should return the string `3D58725572C62302`.

```js
assert.strictEqual(hexadecimalNumbers(), '3D58725572C62302');
```

# --seed--

## --seed-contents--

```js
function hexadecimalNumbers() {

  return true;
}

hexadecimalNumbers();
```

# --solutions--

```js
// solution required
```
