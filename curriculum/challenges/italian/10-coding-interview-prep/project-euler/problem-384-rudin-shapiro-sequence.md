---
id: 5900f4ed1000cf542c50fffe
title: 'Problema 384: Sequenza di Rudin-Shapiro'
challengeType: 1
forumTopicId: 302048
dashedName: problem-384-rudin-shapiro-sequence
---

# --description--

Definisci la sequenza $a(n)$ come il numero di coppie adiacenti di uno nell'espansione binaria di $n$ (possibilmente sovrapposte).

Ad esempio: $a(5) = a({101}_2) = 0$, $a(6) = a({110}_2) = 1$, $a(7) = a({111}_2) = 2$

Definire la sequenza $b(n) = {(-1)}^{a(n)}$. Questa sequenza è chiamata sequenza di Rudin-Shapiro.

Considera anche la sequenza sommatoria di $b(n)$: $s(n) = \displaystyle\sum_{i = 0}^{n} b(i)$.

La prima coppia di valori di queste sequenze sono:

$$\begin{array}{lr}   n    & 0 & 1 & 2 &  3 & 4 & 5 &  6 & 7 \\\\
  a(n) & 0 & 0 & 0 &  1 & 0 & 0 &  1 & 2 \\\\   b(n) & 1 & 1 & 1 & -1 & 1 & 1 & -1 & 1 \\\\
  s(n) & 1 & 2 & 3 &  2 & 3 & 4 &  3 & 4 \end{array}$$

La sequenza $s(n)$ ha la notevole proprietà che tutti gli elementi sono positivi e ogni numero intero positivo $k$ si verifica esattamente $k$ volte.

Definisci $g(t, c)$, con $1 ≤ c ≤ t$, come l'indice in $s(n)$ per il quale $t$ si verifica per la $c$° volta in $s(n)$.

Ad esempio: $g(3, 3) = 6$, $g(4, 2) = 7$ and $g(54321, 12345) = 1\\,220\\,847\\,710$.

Sia $F(n)$ la sequenza di fibonacci definita da:

$$\begin{align}   & F(0) = F(1) = 1 \text{ and} \\\\
  & F(n) = F(n - 1) + F(n - 2) \text{ for } n > 1. \end{align}$$

Definisci $GF(t) = g(F(t), F(t - 1))$.

Trova $\sum GF(t)$ for$ 2 ≤ t ≤ 45$.

# --hints--

`rudinShapiroSequence()` dovrebbe restituire `3354706415856333000`.

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
