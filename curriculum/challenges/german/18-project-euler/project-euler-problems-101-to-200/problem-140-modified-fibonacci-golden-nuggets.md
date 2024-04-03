---
id: 5900f3fa1000cf542c50ff0c
title: 'Problem 140: Modified Fibonacci golden nuggets'
challengeType: 1
forumTopicId: 301769
dashedName: problem-140-modified-fibonacci-golden-nuggets
---

# --description--

Man betrachte die unendliche Polynomreihe $A_G(x) = xG_1 + x^2G_2 + x^3G_3 + \cdots$, wobei $G_k$ der $k$-te Term der Rekursionsbeziehung zweiter Ordnung $G_k = G_{k − 1} + G_{k − 2}, G_1 = 1$ und $G_2 = 4$; d. h. $1, 4, 5, 9, 14, 23, \ldots$.

Für dieses Problem werden wir uns mit den Werten von $x$ beschäftigen, für die $A_G(x)$ ein positiver Integer ist.

Die entsprechenden Werte von $x$ für die ersten fünf natürlichen Zahlen sind unten dargestellt.

| $x$                           | $A_G(x)$ |
| ----------------------------- | -------- |
| $\frac{\sqrt{5} − 1}{4}$    | $1$      |
| $\frac{2}{5}$                | $2$      |
| $\frac{\sqrt{22} − 2}{6}$   | $3$      |
| $\frac{\sqrt{137} − 5}{14}$ | $4$      |
| $\frac{1}{2}$                | $5$      |

We shall call $A_G(x)$ a golden nugget if $x$ is rational because they become increasingly rarer; for example, the 20th golden nugget is 211345365. Finde die Summe der ersten dreißig goldenen Nuggets.

# --hints--

`modifiedGoldenNuggets()` sollte `5673835352990` zurückgeben

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
