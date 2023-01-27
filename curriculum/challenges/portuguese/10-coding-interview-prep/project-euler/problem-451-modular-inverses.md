---
id: 5900f5311000cf542c510042
title: 'Problema 451: Inversas modulares'
challengeType: 1
forumTopicId: 302124
dashedName: problem-451-modular-inverses
---

# --description--

Considere o número 15.

Há oito números positivos inferiores a 15 que são coprimos para 15: 1, 2, 4, 7, 8, 11, 13, 14.

As inversas modulares desses números modulo 15 são: 1, 8, 4, 13, 2, 11, 7, 14, porque

$$\begin{align}   & 1  \times 1\bmod 15 = 1 \\\\
  & 2  \times 8  = 16\bmod 15 = 1 \\\\   & 4  \times 4  = 16\bmod 15 = 1 \\\\
  & 7  \times 13 = 91\bmod 15 = 1 \\\\   & 11 \times 11 = 121\bmod 15 = 1 \\\\
  & 14 \times 14 = 196\bmod 15 = 1 \end{align}$$

Considere $I(n)$ como o maior número positivo $m$ menor que $n - 1$, tal que a inversa modular de $m$ modulo $n$ é igual ao próprio $m$.

Portanto, $I(15) = 11$.

Além disso, $I(100) = 51$ e $I(7) = 1$.

Encontre $\sum I(n)$ para $3 ≤ n ≤ 2 \times {10}^7$

# --hints--

`modularInverses()` deve retornar `153651073760956`.

```js
assert.strictEqual(modularInverses(), 153651073760956);
```

# --seed--

## --seed-contents--

```js
function modularInverses() {

  return true;
}

modularInverses();
```

# --solutions--

```js
// solution required
```
