---
id: 5900f40e1000cf542c50ff21
title: '問題162：十六進制數'
challengeType: 1
forumTopicId: 301796
dashedName: problem-162-hexadecimal-numbers
---

# --description--

In the hexadecimal number system numbers are represented using 16 different digits:

$$0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F$$

十進制數字系統中寫入的十六進制數字 AF 等於 $10 \times 16 + 15 = 175$。

在3位十六進制數10A，1A0，A10 和 A01 中，數字0,1和 A 都存在。

就像用十進制數寫的數字一樣，我們寫十六進制數而不帶前導零。

包含最多十六個十六進制數字的十六進制數是多少，所有數字0,1和A至少出現一次？

以十六進制數字構成字符串的形式給出你的答案。

**注意：** （A,B,C,D,E 和 F 大寫，沒有任何標記爲十六進制的前導或尾隨碼，也沒有前導零，例如1A3F 而不是：1a3f、0x1a3f、$1A3F、#1A3F、0000001A3F）。

# --hints--

`hexadecimalNumbers()` 應該返回一個字符串。

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
