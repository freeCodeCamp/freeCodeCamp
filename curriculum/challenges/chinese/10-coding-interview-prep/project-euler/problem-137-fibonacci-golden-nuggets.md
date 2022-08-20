---
id: 5900f3f51000cf542c50ff08
title: '问题 137：斐波那契金块'
challengeType: 1
forumTopicId: 301765
dashedName: problem-137-fibonacci-golden-nuggets
---

# --description--

考虑无穷级数 $A_{F}(x) = xF_1 + x^2F_2 + x^3F_3 + \ldots$，其中 $F_k$ 是斐波那契数列 $1, 1, 2, 3, 5, 8, \ldots$ 的第 $k$ 项；即 $F_k = F_{k − 1} + F_{k − 2}, F_1 = 1$，$F_2 = 1$。

在这个问题中，我们关注的是那些使得 $A_{F}(x)$ 为正整数的 $x$ 的值。

令人惊讶的是：

$$\begin{align} A_F(\frac{1}{2}) & = (\frac{1}{2}) × 1 + {(\frac{1}{2})}^2 × 1 + {(\frac{1}{2})}^3 × 2 + {(\frac{1}{2})}^4 × 3 + {(\frac{1}{2})}^5 × 5 + \cdots \\\\
                 & = \frac{1}{2} + \frac{1}{4} + \frac{2}{8} + \frac{3}{16} + \frac{5}{32} + \cdots \\\\ & = 2 \end{align}$$

前五个对应的自然数 $x$ 如下。

| $x$                         | $A_F(x)$ |
| --------------------------- | -------- |
| $\sqrt{2} − 1$             | $1$      |
| $\frac{1}{2}$              | $2$      |
| $\frac{\sqrt{13} − 2}{3}$ | $3$      |
| $\frac{\sqrt{89} − 5}{8}$ | $4$      |
| $\frac{\sqrt{34} − 3}{5}$ | $5$      |

当 $x$ 是有理数时，我们称 $A_F(x)$ 是一个金砖，因为这样的数字逐渐变得稀少；例如，第 10 个金砖是 74049690。

请求出第 15 个金砖。

# --hints--

`goldenNugget()` 应该返回 `1120149658760`。

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
