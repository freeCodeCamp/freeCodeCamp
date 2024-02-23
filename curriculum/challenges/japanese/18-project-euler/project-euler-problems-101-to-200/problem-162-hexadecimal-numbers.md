---
id: 5900f40e1000cf542c50ff21
title: '問題 162: 16 進数'
challengeType: 1
forumTopicId: 301796
dashedName: problem-162-hexadecimal-numbers
---

# --description--

16 進法では、次の 16 種類の英数字を使って数を表します。

$$0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F$$

16 進数の AF を 10 進法で表すと、$10 \times 16 + 15 = 175$ となります。

3 桁の 16 進数 10A, 1A0, A10, A01 には 0, 1, A のすべてが含まれています。

10 進数で表す場合と同様、16 進数では先行ゼロを付けずに表します。

16 進数の英数字をたかだか 16 個含む 16 進数のうち、0, 1, A のすべてが 1 回以上出現するものはいくつありますか。

回答は、16 進数の文字列にすること。

**注:** (A, B, C, D, E, F は大文字です。16 進数であることを表すコードを先頭や末尾に付けず、先行ゼロも付けません。例: 1A3F を 1a3f, 0x1a3f, $1A3F, #1A3F, 0000001A3F とは書きません)

# --hints--

`hexadecimalNumbers()` は文字列を返す必要があります。

```js
assert(typeof hexadecimalNumbers() === 'string');
```

`hexadecimalNumbers()` は文字列 `3D58725572C62302` を返す必要があります。

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
