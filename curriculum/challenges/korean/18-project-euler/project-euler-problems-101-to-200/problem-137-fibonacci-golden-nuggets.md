---
id: 5900f3f51000cf542c50ff08
title: 'Problem 137: Fibonacci golden nuggets'
challengeType: 1
forumTopicId: 301765
dashedName: problem-137-fibonacci-golden-nuggets
---

# --description--

Consider the infinite polynomial series $A_{F}(x) = xF_1 + x^2F_2 + x^3F_3 + \ldots$, where $F_k$ is the $k$th term in the Fibonacci sequence: $1, 1, 2, 3, 5, 8, \ldots$; that is, $F_k = F_{k − 1} + F_{k − 2}, F_1 = 1$ and $F_2 = 1$.

For this problem we shall be interested in values of $x$ for which $A_{F}(x)$ is a positive integer.

Surprisingly

$$\begin{align}
A_F(\frac{1}{2}) & = (\frac{1}{2}) × 1 + {(\frac{1}{2})}^2 × 1 + {(\frac{1}{2})}^3 × 2 + {(\frac{1}{2})}^4 × 3 + {(\frac{1}{2})}^5 × 5 + \cdots \\\\
                 & = \frac{1}{2} + \frac{1}{4} + \frac{2}{8} + \frac{3}{16} + \frac{5}{32} + \cdots \\\\
                 & = 2
\end{align}$$

The corresponding values of $x$ for the first five natural numbers are shown below.

| $x$                       | $A_F(x)$ |
|---------------------------|----------|
| $\sqrt{2} − 1$            | $1$      |
| $\frac{1}{2}$             | $2$      |
| $\frac{\sqrt{13} − 2}{3}$ | $3$      |
| $\frac{\sqrt{89} − 5}{8}$ | $4$      |
| $\frac{\sqrt{34} − 3}{5}$ | $5$      |

We shall call $A_F(x)$ a golden nugget if $x$ is rational, because they become increasingly rarer; for example, the 10th golden nugget is 74049690.

Find the 15th golden nugget.

# --hints--

`goldenNugget()` should return `1120149658760`.

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
