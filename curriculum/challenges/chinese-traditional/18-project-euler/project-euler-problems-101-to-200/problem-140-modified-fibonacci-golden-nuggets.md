---
id: 5900f3fa1000cf542c50ff0c
title: '問題 140：改進的斐波那契金塊'
challengeType: 1
forumTopicId: 301769
dashedName: problem-140-modified-fibonacci-golden-nuggets
---

# --description--

Consider the infinite polynomial series $A_G(x) = xG_1 + x^2G_2 + x^3G_3 + \cdots$, where $G_k$ is the $k$th term of the second order recurrence relation $G_k = G_{k − 1} + G_{k − 2}, G_1 = 1$ and $G_2 = 4$; that is, $1, 4, 5, 9, 14, 23, \ldots$.

在這個問題中，我們關注的是那些使得 $A_G(x)$ 爲正整數的 $x$ 的值。

前五個對應的自然數 $x$ 如下。

| $x$                           | $A_G(x)$ |
| ----------------------------- | -------- |
| $\frac{\sqrt{5} − 1}{4}$    | $1$      |
| $\frac{2}{5}$                | $2$      |
| $\frac{\sqrt{22} − 2}{6}$   | $3$      |
| $\frac{\sqrt{137} − 5}{14}$ | $4$      |
| $\frac{1}{2}$                | $5$      |

當 $x$ 是有理數時，我們稱 $A_G(x)$ 是一個金磚，因爲這樣的數字逐漸變得稀少；例如，第 20 個金磚是 211345365。 請計算出前三十個金磚之和。

# --hints--

`modifiedGoldenNuggets()` 應該返回 `5673835352990`

```js
assert.strictEqual(modifiedGoldenNuggets(), 5673835352990);
```

# --seed--

## --seed-contents--

```js
function modifiedGoldenNuggets() {

  return true;
}

modifiedGoldenNuggets();
```

# --solutions--

```js
// solution required
```
