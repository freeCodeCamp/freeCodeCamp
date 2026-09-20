---
id: 5900f5201000cf542c510032
title: 'Problem 435: Polynomials of Fibonacci numbers'
challengeType: 1
forumTopicId: 302106
dashedName: problem-435-polynomials-of-fibonacci-numbers
---

# --description--

The Fibonacci numbers $\\{f_n, n ≥ 0\\}$ are defined recursively as $f_n = f_{n - 1} + f_{n - 2}$ with base cases $f_0 = 0$ and $f_1 = 1$.

Define the polynomials $\\{F_n, n ≥ 0\\}$ as $F_n(x) = \displaystyle\sum_{i = 0}^n f_ix^i$.

For example, $F_7(x) = x + x^2 + 2x^3 + 3x^4 + 5x^5 + 8x^6 + 13x^7$, and $F_7(11) = 268\\,357\\,683$.

Let $n = {10}^{15}$. Find the sum $\displaystyle\sum_{x = 0}^{100} F_n(x)$ and give your answer modulo $1\\,307\\,674\\,368\\,000 \\, (= 15!)$.

# --hints--

`polynomialsOfFibonacciNumbers()` should return `252541322550`.

```js
assert.strictEqual(polynomialsOfFibonacciNumbers(), 252541322550);
```

# --seed--

## --seed-contents--

```js
function polynomialsOfFibonacciNumbers() {

  return true;
}

polynomialsOfFibonacciNumbers();
```

# --solutions--

```js
// solution required
```
