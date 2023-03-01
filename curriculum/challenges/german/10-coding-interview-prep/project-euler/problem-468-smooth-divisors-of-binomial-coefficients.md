---
id: 5900f5411000cf542c510054
title: 'Problem 468: Glatte Teiler der Binomialkoeffizienten'
challengeType: 1
forumTopicId: 302143
dashedName: problem-468-smooth-divisors-of-binomial-coefficients
---

# --description--

Ein Integer heißt B-glatt, wenn keiner ihrer Primfaktoren größer als $B$ ist.

Lasse $SB(n)$ der größte B-glatte Teiler von $n$ sein.

Beispiele:

$$\begin{align}   & S_1(10) = 1 \\\\
  & S_4(2\\,100) = 12 \\\\ & S_{17}(2\\,496\\,144) = 5\\,712 \end{align}$$

Definiere $F(n) = \displaystyle\sum_{B = 1}^n \sum_{r = 0}^n S_B(\displaystyle\binom{n}{r})$. Dabei bezeichnet $\displaystyle\binom{n}{r}$ den Binomialkoeffizienten.

Beispiele:

$$\begin{align}   & F(11) = 3132 \\\\
  & F(1\\,111)\bmod 1\\,000\\,000\\,993 = 706\\,036\\,312 \\\\ & F(111\\,111)\bmod 1\\,000\\,000\\,993 = 22\\,156\\,169 \end{align}$$

Finde $F(11\\,111\\,111)\bmod 1\\,000\\,000\\,993$.

# --hints--

`smoothDivisorsOfBinomialCoefficients()` sollte `852950321` zurückgeben.

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
