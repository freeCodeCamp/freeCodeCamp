---
id: 5900f5231000cf542c510034
title: '問題 438: 多項式の解の整数部'
challengeType: 1
forumTopicId: 302109
dashedName: problem-438-integer-part-of-polynomial-equations-solutions
---

# --description--

$n$ 個の整数の組 $t = (a_1, \ldots, a_n)$ について、多項式 $x^n + a_1x^{n - 1} + a_2x^{n - 2} + \ldots + a_{n - 1}x + a_n = 0$ の解を $(x_1, \ldots, x_n)$ とします。

以下の 2 つの条件について考えます。

- $x_1, \ldots, x_n$ はすべて実数である。
- $x_1, ..., x_n$ を並べ替えると、$1 ≤ i ≤ n$ に対し $⌊x_i⌋ = i$ となる。 ($⌊·⌋:$ は床関数。)

$n = 4$ のとき、両方の条件を満たす $n$ 個の整数の組は 12 個あります。

$t$ 内の整数の絶対値の和を $S(t)$ とします。

For $n = 4$ we can verify that $\sum S(t) = 2087$ for all $n$-tuples $t$ which satisfy both conditions.

$n = 7$ のとき、$\sum S(t)$ を求めなさい。

# --hints--

`polynomialIntegerPart()` は `2046409616809` を返す必要があります。

```js
assert.strictEqual(polynomialIntegerPart(), 2046409616809);
```

# --seed--

## --seed-contents--

```js
function polynomialIntegerPart() {

  return true;
}

polynomialIntegerPart();
```

# --solutions--

```js
// solution required
```
