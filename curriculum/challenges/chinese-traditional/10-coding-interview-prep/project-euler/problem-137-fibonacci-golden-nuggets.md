---
id: 5900f3f51000cf542c50ff08
title: '問題 137：斐波那契金塊'
challengeType: 1
forumTopicId: 301765
dashedName: problem-137-fibonacci-golden-nuggets
---

# --description--

考慮無窮級數 $A_{F}(x) = xF_1 + x^2F_2 + x^3F_3 + \ldots$，其中 $F_k$ 是斐波那契數列 $1, 1, 2, 3, 5, 8, \ldots$ 的第 $k$ 項；即 $F_k = F_{k − 1} + F_{k − 2}, F_1 = 1$，$F_2 = 1$。

在這個問題中，我們關注的是那些使得 $A_{F}(x)$ 爲正整數的 $x$ 的值。

令人驚訝的是：

$$\begin{align} A_F(\frac{1}{2}) & = (\frac{1}{2}) × 1 + {(\frac{1}{2})}^2 × 1 + {(\frac{1}{2})}^3 × 2 + {(\frac{1}{2})}^4 × 3 + {(\frac{1}{2})}^5 × 5 + \cdots \\\\
                 & = \frac{1}{2} + \frac{1}{4} + \frac{2}{8} + \frac{3}{16} + \frac{5}{32} + \cdots \\\\ & = 2 \end{align}$$

前五個對應的自然數 $x$ 如下。

| $x$                         | $A_F(x)$ |
| --------------------------- | -------- |
| $\sqrt{2} − 1$             | $1$      |
| $\frac{1}{2}$              | $2$      |
| $\frac{\sqrt{13} − 2}{3}$ | $3$      |
| $\frac{\sqrt{89} − 5}{8}$ | $4$      |
| $\frac{\sqrt{34} − 3}{5}$ | $5$      |

當 $x$ 是有理數時，我們稱 $A_F(x)$ 是一個金磚，因爲這樣的數字逐漸變得稀少；例如，第 10 個金磚是 74049690。

請求出第 15 個金磚。

# --hints--

`goldenNugget()` 應該返回 `1120149658760`。

```js
assert.strictEqual(goldenNugget(), 1120149658760);
```

# --seed--

## --seed-contents--

```js
function goldenNugget() {

  return true;
}

goldenNugget();
```

# --solutions--

```js
// solution required
```
