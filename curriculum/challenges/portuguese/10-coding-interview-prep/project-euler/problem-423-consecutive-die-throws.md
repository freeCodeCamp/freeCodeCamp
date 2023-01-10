---
id: 5900f5141000cf542c510027
title: 'Problema 423: Lançamentos consecutivos de dados'
challengeType: 1
forumTopicId: 302093
dashedName: problem-423-consecutive-die-throws
---

# --description--

Considere $n$ um inteiro positivo.

Um dado de 6 lados é lançado $n$ vezes. Considere $c$ como o número de pares de lançamentos consecutivos que dão o mesmo valor.

Por exemplo, se $n = 7$ e os valores dos lançamentos dos dados são (1, 1, 5, 6, 6, 6, 3), os seguintes pares de lançamentos consecutivos dão o mesmo valor:

$$\begin{align}   & (\underline{1}, \underline{1}, 5, 6, 6, 6, 3) \\\\
  & (1, 1, 5, \underline{6}, \underline{6}, 6, 3) \\\\ & (1, 1, 5, 6, \underline{6}, \underline{6}, 3) \end{align}$$

Portanto, $c = 3$ para (1, 1, 5, 6, 6, 6, 3).

Defina $C(n)$ como o número de resultados de lançar um dado de 6 lados $n$ vezes, tal que $c$ não exceda $π(n)$.<sup>1</sup>

Por exemplo, $C(3) = 216$, $C(4) = 1290$, $C(11) = 361.912.500$ e $C(24) = 4.727.547.363.281.250.000$.

Defina $S(L)$ como $\sum C(n)$ para $1 ≤ n ≤ L$.

Por exemplo, $S(50)\bmod 1.000.000.007 = 832.833.871$.

Encontre $S(50.000.000)\bmod 1.000.000.007$.

<sup>1</sup> $π$ é a função de contagem de números primos, ou seja, $π(n)$ é a quantidade de números primos $≤ n$.

# --hints--

`consecutiveDieThrows()` deve retornar `653972374`.

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
