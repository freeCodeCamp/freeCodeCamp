---
id: 5900f5411000cf542c510054
title: 'Problema 468: Divisores harmonizados de coeficientes binomiais'
challengeType: 1
forumTopicId: 302143
dashedName: problem-468-smooth-divisors-of-binomial-coefficients
---

# --description--

Um inteiro é chamado de harmonizado de B se nenhum de seus fatores primos é maior que $B$.

Considere $SB(n)$ como o maior divisor harmonizado de B de $n$.

Exemplos:

$$\begin{align}   & S_1(10) = 1 \\\\
  & S_4(2.100) = 12 \\\\ & S_{17}(2.496.144) = 5.712 \end{align}$$

Defina $F(n) = \displaystyle\sum_{B = 1}^n \sum_{r = 0}^n S_B(\displaystyle\binom{n}{r})$. Aqui, $\displaystyle\binom{n}{r}$ denota o coeficiente binomial.

Exemplos:

$$\begin{align}   & F(11) = 3132 \\\\
  & F(1.111)\bmod 1.000.000.993 = 706.036.312 \\\\ & F(111.111)\bmod 1.000.000.993 = 22.156.169 \end{align}$$

Encontre $F(11.111.111)\bmod 1.000.000.993$.

# --hints--

`smoothDivisorsOfBinomialCoefficients()` deve retornar `852950321`.

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
