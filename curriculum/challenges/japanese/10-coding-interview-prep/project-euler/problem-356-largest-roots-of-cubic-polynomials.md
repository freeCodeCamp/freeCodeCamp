---
id: 5900f4d01000cf542c50ffe3
title: '問題 356: 三次多項式の最大根'
challengeType: 1
forumTopicId: 302016
dashedName: problem-356-largest-roots-of-cubic-polynomials
---

# --description--

Let $a_n$ be the largest real root of a polynomial $g(x) = x^3 - 2^n \times x^2 + n$.

例: $a_2 = 3.86619826\ldots$

$\displaystyle\sum_{i = 1}^{30} \lfloor {a_i}^{987654321}\rfloor$ の下位 8 桁を求めなさい。

**注:** $\lfloor a\rfloor$ は床関数を表します。

# --hints--

`rootsOfCubicPolynomials()` は `28010159` を返す必要があります。

```js
assert.strictEqual(rootsOfCubicPolynomials(), 28010159);
```

# --seed--

## --seed-contents--

```js
function rootsOfCubicPolynomials() {

  return true;
}

rootsOfCubicPolynomials();
```

# --solutions--

```js
// solution required
```
