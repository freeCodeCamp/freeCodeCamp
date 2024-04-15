---
id: 5900f4ff1000cf542c510011
title: 'Problema 402: Polínomios valorados por Entero'
challengeType: 1
forumTopicId: 302070
dashedName: problem-402-integer-valued-polynomials
---

# --description--

It can be shown that the polynomial $n^4 + 4n^3 + 2n^2 + 5n$ is a multiple of 6 for every integer $n$. It can also be shown that 6 is the largest integer satisfying this property.

Define $M(a, b, c)$ como el máximo $m$ tal que $n^4 + an^3 + bn^2 + cn$ es un múltiplo de $m$ para todos los enteros $n$. Por ejemplo, $M(4, 2, 5) = 6$.

También defina, defina $S(N)$ como la suma de $M(a, b, c)$ para todos $0 &lt; a, b, c ≤ N$.

Podemos verificar que $S(10) = 1\\,972$ y $S(10\\,000) = 2\\,024\\,258\\,331\\,114$.

Sea $F_k$ la secuencia de Fibonacci:

- $F_0 = 0$, $F_1 = 1$ and
- $F_k = F_{k - 1} + F_{k - 2}$ para $k ≥ 2$.

Encuentra los 9 dígitos de $\sum S(F_k)$ para $2 ≤ k ≤ 1\\,234\\,567\\,890\\,123$.

# --hints--

`integerValuedPolynomials()` debería devolver `356019862`.

```js
assert.strictEqual(integerValuedPolynomials(), 356019862);
```

# --seed--

## --seed-contents--

```js
function integerValuedPolynomials() {

  return true;
}

integerValuedPolynomials();
```

# --solutions--

```js
// solution required
```
