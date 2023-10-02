---
id: 5900f5201000cf542c510032
title: '問題 435: フィボナッチ数の多項式'
challengeType: 1
forumTopicId: 302106
dashedName: problem-435-polynomials-of-fibonacci-numbers
---

# --description--

フィボナッチ数 $\\{f_n, n ≥ 0\\}$ は、$f_0 = 0$, $f_1 = 1$ を初期条件として $f_n = f_{n - 1} + f_{n - 2}$ と再帰的に定義されます。

多項式 $\\{F_n, n ≥ 0\\}$ を $F_n(x) = \displaystyle\sum_{i = 0}^n f_ix^i$ と定義します。

例えば、$F_7(x) = x + x^2 + 2x^3 + 3x^4 + 5x^5 + 8x^6 + 13x^7$, $F_7(11) = 268\\,357\\,683$ です。

$n = {10}^{15}$ とします。 和 $\displaystyle\sum_{x = 0}^{100} F_n(x)$ を求め、mod $1\\,307\\,674\\,368\\,000 \\, (= 15!)$ で答えなさい。

# --hints--

`polynomialsOfFibonacciNumbers()` は`252541322550` を返す必要があります。

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
