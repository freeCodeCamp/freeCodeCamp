---
id: 5900f5201000cf542c510032
title: 'Problema 435: Polinomiali di numeri di Fibonacci'
challengeType: 1
forumTopicId: 302106
dashedName: problem-435-polynomials-of-fibonacci-numbers
---

# --description--

I numeri di Fibonacci $\\{f_n, n ≥ 0\\}$ sono definiti in maniera ricorsiva come $f_n = f_{n - 1} + f_{n - 2}$ con i casi base $f_0 = 0$ e $f_1 = 1$.

Definisci i polinomi $\\{F_n, n ≥ 0\\}$ come $F_n(x) = \displaystyle\sum_{i = 0}^n f_ix^i$.

Per esempio, $F_7(x) = x + x^2 + 2x^3 + 3x^4 + 5x^5 + 8x^6 + 13x^7$, e $F_7(11) = 268\\,357\\,683$.

Sia $n = {10}^{15}$. Trova la somma $\displaystyle\sum_{x = 0}^{100} F_n(x)$ e dai la tua risposta modulo $1\\,307\\,674\\,368\\,000 \\, (= 15!)$.

# --hints--

`polynomialsOfFibonacciNumbers()` dovrebbe restituire `252541322550`.

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
