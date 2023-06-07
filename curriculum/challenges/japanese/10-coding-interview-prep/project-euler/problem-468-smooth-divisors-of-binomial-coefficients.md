---
id: 5900f5411000cf542c510054
title: '問題 468: 二項係数の Smooth 約数'
challengeType: 1
forumTopicId: 302143
dashedName: problem-468-smooth-divisors-of-binomial-coefficients
---

# --description--

$B$ より大きい素因数を持たない整数は B-smooth と呼ばれます。

$n$ の最大の B-smooth 約数を $SB(n)$ とします。

例:

$$\begin{align}   & S_1(10) = 1 \\\\
  & S_4(2\\,100) = 12 \\\\ & S_{17}(2\\,496\\,144) = 5\\,712 \end{align}$$

$F(n) = \displaystyle\sum_{B = 1}^n \sum_{r = 0}^n S_B(\displaystyle\binom{n}{r})$ と定義します。 ここで、$\displaystyle\binom{n}{r}$ は二項係数を表します。

例:

$$\begin{align}   & F(11) = 3132 \\\\
  & F(1\\,111)\bmod 1\\,000\\,000\\,993 = 706\\,036\\,312 \\\\ & F(111\\,111)\bmod 1\\,000\\,000\\,993 = 22\\,156\\,169 \end{align}$$

$F(11\\,111\\,111)\bmod 1\\,000\\,000\\,993$ を求めなさい。

# --hints--

`smoothDivisorsOfBinomialCoefficients()` は `852950321` を返す必要があります。

```js
assert.strictEqual(smoothDivisorsOfBinomialCoefficients(), 852950321);
```

# --seed--

## --seed-contents--

```js
function smoothDivisorsOfBinomialCoefficients() {

  return true;
}

smoothDivisorsOfBinomialCoefficients();
```

# --solutions--

```js
// solution required
```
