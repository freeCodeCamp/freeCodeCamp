---
id: 5900f4ed1000cf542c50fffe
title: 'Problema 384: Sequência de Rudin-Shapiro'
challengeType: 1
forumTopicId: 302048
dashedName: problem-384-rudin-shapiro-sequence
---

# --description--

Defina a sequência $a(n)$ como o número de pares adjacentes de uns na expansão binária de $n$ (possivelmente sobrepostos).

Por exemplo: $a(5) = a({101}_2) = 0$, $a(6) = a({110}_2) = 1$, $a(7) = a({111}_2) = 2$

Defina a sequência $b(n) = {(-1)}^{a(n)}$. Essa sequência é chamada de sequência de Rudin-Shapiro.

Além disso, considere a sequência somatória de $b(n)$: $s(n) = \displaystyle\sum_{i = 0}^{n} b(i)$.

Os primeiros valores destas sequências são:

$$\begin{array}{lr}   n    & 0 & 1 & 2 &  3 & 4 & 5 &  6 & 7 \\\\
  a(n) & 0 & 0 & 0 &  1 & 0 & 0 &  1 & 2 \\\\   b(n) & 1 & 1 & 1 & -1 & 1 & 1 & -1 & 1 \\\\
  s(n) & 1 & 2 & 3 &  2 & 3 & 4 &  3 & 4 \end{array}$$

A sequência $s(n)$ tem a incrível propriedade de que todos os elementos são positivos e de que todo número inteiro positivo $k$ ocorre exatamente $k$ vezes.

Defina $g(t, c)$, com $1 ≤ c ≤ t$, como o índice em $s(n)$ para o qual $t$ ocorre pela $c$ª vez em $s(n)$.

Ex.: $g(3, 3) = 6$, $g(4, 2) = 7$ e $g(54321, 12345) = 1.220.847.710$.

Considere $F(n)$ como a sequência de Fibonacci definida por:

$$\begin{align}   & F(0) = F(1) = 1 \text{ e} \\\\
  & F(n) = F(n - 1) + F(n - 2) \text{ para } n > 1. \end{align}$$

Defina $GF(t) = g(F(t), F(t - 1))$.

Encontre a $\sum GF(t)$ para $2 ≤ t ≤ 45$.

# --hints--

`rudinShapiroSequence()` deve retornar `3354706415856333000`.

```js
assert.strictEqual(rudinShapiroSequence(), 3354706415856333000);
```

# --seed--

## --seed-contents--

```js
function rudinShapiroSequence() {

  return true;
}

rudinShapiroSequence();
```

# --solutions--

```js
// solution required
```
