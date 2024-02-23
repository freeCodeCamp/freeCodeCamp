---
id: 5900f5141000cf542c510027
title: 'Problema 423: Lanzamientos consecutivos de dados'
challengeType: 1
forumTopicId: 302093
dashedName: problem-423-consecutive-die-throws
---

# --description--

Let $n$ be a positive integer.

Un dado de 6-lados es lanzado $n$ veces. Sea $c$ el número de pares de lanzamientos consecutivos que den el mismo valor.

Por ejemplo, si $n = 7$ y los valores de lanzamiento de dado son (1, 1, 5, 6, 6, 6, 3), entonces las siguientes pares de lanzamientos consecutivos dan el mismo valor:

$$\begin{align}   & (\underline{1}, \underline{1}, 5, 6, 6, 6, 3) \\\\
  & (1, 1, 5, \underline{6}, \underline{6}, 6, 3) \\\\ & (1, 1, 5, 6, \underline{6}, \underline{6}, 3) \end{align}$$

Por lo tanto, $c = 3$ para (1, 1, 5, 6, 6, 6, 3).

Define $C(n)$ como el número de resultados de lanzar un dado de 6-lados $n$ veces tales que $c$ no excedan $π(n)$.<sup>1</sup>

Por ejemplo, $C(3) = 216$, $C(4) = 1290$, $C(11) = 361\\,912\\,500$ and $C(24) = 4\\,727\\,547\\,363\\,281\\,250\\,000$.

Define $S(L)$ como $\sum C(n)$ para $1 ≤ n ≤ L$.

Por ejemplo, $S(50)\bmod 1\\,000\\,000\\,007 = 832\\,833\\,871$.

Encuentra $S(50\\,000\\,000)\bmod 1\\,000\\,000\\,007$.

<sup>1</sup> $π$ denota la función conteo de primos, p.ej. $π(n)$ es el número de primos $≤ n$.

# --hints--

`consecutiveDieThrows()` debería devolver `653972374`.

```js
assert.strictEqual(consecutiveDieThrows(), 653972374);
```

# --seed--

## --seed-contents--

```js
function consecutiveDieThrows() {

  return true;
}

consecutiveDieThrows();
```

# --solutions--

```js
// solution required
```
