---
id: 5900f3dd1000cf542c50fef0
title: '問題 113：非彈性數'
challengeType: 1
forumTopicId: 301739
dashedName: problem-113-non-bouncy-numbers
---

# --description--

Working from left-to-right if no digit is exceeded by the digit to its left it is called an increasing number; for example, 134468.

同樣，如果右邊的數字沒有超過任何數字，則稱爲遞減數；例如，66420。

我們將既不增加也不減少的正整數稱爲“有彈性”數；例如，155349。

隨着 n 的增加，低於 n 的有彈性數的比例增加，因此只有 12951 個低於 100 萬的數不是有彈性的，只有 277032 個低於 ${10}^{10}$ 的非有彈性數。

Googol (${10}^{100}$) 以下多少個數字不是有彈性的？

# --hints--

`nonBouncyNumbers()` 應該返回 `51161058134250`。

```js
assert.strictEqual(nonBouncyNumbers(), 51161058134250);
```

# --seed--

## --seed-contents--

```js
function nonBouncyNumbers() {

  return true;
}

nonBouncyNumbers();
```

# --solutions--

```js
// solution required
```
