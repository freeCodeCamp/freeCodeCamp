---
id: 5900f4ff1000cf542c510011
title: 'Problema 402: Polinômios com valores inteiros'
challengeType: 1
forumTopicId: 302070
dashedName: problem-402-integer-valued-polynomials
---

# --description--

Pode-se demonstrar que o polinômio $n^4 + 4n^3 + 2n^2 + 5n$ é um múltiplo de 6 para qualquer número inteiro $n$. Também é possível demonstrar que 6 é o maior número inteiro que satisfaz esta propriedade.

Defina $M(a, b, c)$ como o $m$ máximo, tal que $n^4 + an^3 + bn^2 + cn$ seja um múltiplo de $m$ para todos os números inteiros $n$. Por exemplo, $M(4, 2, 5) = 6$.

Além disso, defina $S(N)$ como a soma de $M(a, b, c)$ para todo $0 &lt; a, b, c ≤ N$.

Podemos verificar que $S(10) = 1.972$ e $S(10.000) = 2.024.258.331.114$.

Considere $F_k$ como a sequência de Fibonacci:

- $F_0 = 0$, $F_1 = 1$ e
- $F_k = F_{k - 1} + F_{k - 2}$ para $k ≥ 2$.

Encontre os últimos 9 algarismos de $\sum S(F_k)$ para $2 ≤ k ≤ 1.234.567.890.123$.

# --hints--

`integerValuedPolynomials()` deve retornar `356019862`.

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
