---
id: 5900f3f51000cf542c50ff08
title: 'Problem 137: Fibonacci golden nuggets'
challengeType: 1
forumTopicId: 301765
dashedName: problem-137-fibonacci-golden-nuggets
---

# --description--

Man betrachte die unendliche Polynomreihe $A_{F}(x) = xF_1 + x^2F_2 + x^3F_3 + \ldots$, wobei $F_k$ der $k$-te Term der Fibonacci-Folge ist: $1, 1, 2, 3, 5, 8, \ldots$; das heißt, $F_k = F_{k - 1} + F_{k - 2}, F_1 = 1$ und $F_2 = 1$.

Für dieses Problem sind wir an Werten von $x$ interessiert, für die $A_{F}(x)$ eine positive ganze Zahl ist.

Überraschenderweise

$$\begin{align} A_F(\frac{1}{2}) & = (\frac{1}{2}) × 1 + {(\frac{1}{2})}^2 × 1 + {(\frac{1}{2})}^3 × 2 + {(\frac{1}{2})}^4 × 3 + {(\frac{1}{2})}^5 × 5 + \cdots \\\\
                 & = \frac{1}{2} + \frac{1}{4} + \frac{2}{8} + \frac{3}{16} + \frac{5}{32} + \cdots \\\\ & = 2 \end{align}$$

Die entsprechenden Werte von $x$ für die ersten fünf natürlichen Zahlen sind unten dargestellt.

| $x$                         | $A_F(x)$ |
| --------------------------- | -------- |
| $\sqrt{2} − 1$             | $1$      |
| $\frac{1}{2}$              | $2$      |
| $\frac{\sqrt{13} − 2}{3}$ | $3$      |
| $\frac{\sqrt{89} − 5}{8}$ | $4$      |
| $\frac{\sqrt{34} − 3}{5}$ | $5$      |

We shall call $A_F(x)$ a golden nugget if $x$ is rational, because they become increasingly rarer; for example, the 10th golden nugget is 74049690.

Find the 15th golden nugget.

# --hints--

`goldenNugget()` sollte `1120149658760` zurückgeben.

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
