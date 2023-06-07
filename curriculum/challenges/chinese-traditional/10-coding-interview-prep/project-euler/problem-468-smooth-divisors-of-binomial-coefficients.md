---
id: 5900f5411000cf542c510054
title: '問題 468：二項式係數的平滑除數'
challengeType: 1
forumTopicId: 302143
dashedName: problem-468-smooth-divisors-of-binomial-coefficients
---

# --description--

An integer is called B-smooth if none of its prime factors is greater than $B$.

Let $SB(n)$ be the largest B-smooth divisor of $n$.

示例：

$$\begin{align}   & S_1(10) = 1 \\\\
  & S_4(2\\,100) = 12 \\\\ & S_{17}(2\\,496\\,144) = 5\\,712 \end{align}$$

Define $F(n) = \displaystyle\sum_{B = 1}^n \sum_{r = 0}^n S_B(\displaystyle\binom{n}{r})$. Here, $\displaystyle\binom{n}{r}$ denotes the binomial coefficient.

示例：

$$\begin{align}   & F(11) = 3132 \\\\
  & F(1\\,111)\bmod 1\\,000\\,000\\,993 = 706\\,036\\,312 \\\\ & F(111\\,111)\bmod 1\\,000\\,000\\,993 = 22\\,156\\,169 \end{align}$$

Find $F(11\\,111\\,111)\bmod 1\\,000\\,000\\,993$.

# --hints--

`smoothDivisorsOfBinomialCoefficients()` should return `852950321`.

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
