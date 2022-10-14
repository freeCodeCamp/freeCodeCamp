---
id: 5900f3fa1000cf542c50ff0c
title: 'Problem 140: Modified Fibonacci golden nuggets'
challengeType: 1
forumTopicId: 301769
dashedName: problem-140-modified-fibonacci-golden-nuggets
---

# --description--

Consider the infinite polynomial series $A_G(x) = xG_1 + x^2G_2 + x^3G_3 + \cdots$, where $G_k$ is the $k$th term of the second order recurrence relation $G_k = G_{k − 1} + G_{k − 2}, G_1 = 1$ and $G_2 = 4$; that is, $1, 4, 5, 9, 14, 23, \ldots$.

For this problem we shall be concerned with values of $x$ for which $A_G(x)$ is a positive integer.

The corresponding values of $x$ for the first five natural numbers are shown below.

| $x$                         | $A_G(x)$ |
|-----------------------------|----------|
| $\frac{\sqrt{5} − 1}{4}$    | $1$      |
| $\frac{2}{5}$               | $2$      |
| $\frac{\sqrt{22} − 2}{6}$   | $3$      |
| $\frac{\sqrt{137} − 5}{14}$ | $4$      |
| $\frac{1}{2}$               | $5$      |

We shall call $A_G(x)$ a golden nugget if $x$ is rational because they become increasingly rarer; for example, the 20th golden nugget is 211345365. Find the sum of the first thirty golden nuggets.

# --hints--

`modifiedGoldenNuggets()` should return `5673835352990`

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
