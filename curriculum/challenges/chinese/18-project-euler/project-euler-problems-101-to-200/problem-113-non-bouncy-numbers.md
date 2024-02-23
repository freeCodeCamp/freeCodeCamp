---
id: 5900f3dd1000cf542c50fef0
title: '问题 113：非弹性数'
challengeType: 1
forumTopicId: 301739
dashedName: problem-113-non-bouncy-numbers
---

# --description--

Working from left-to-right if no digit is exceeded by the digit to its left it is called an increasing number; for example, 134468.

同样，如果右边的数字没有超过任何数字，则称为递减数；例如，66420。

我们将既不增加也不减少的正整数称为“有弹性”数；例如，155349。

随着 n 的增加，低于 n 的有弹性数的比例增加，因此只有 12951 个低于 100 万的数不是有弹性的，只有 277032 个低于 ${10}^{10}$ 的非有弹性数。

Googol (${10}^{100}$) 以下多少个数字不是有弹性的？

# --hints--

`nonBouncyNumbers()` 应该返回 `51161058134250`。

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
