---
id: 5900f4e41000cf542c50fff5
title: 'Problema 375: Mínimo das subsequências'
challengeType: 1
forumTopicId: 302037
dashedName: problem-375-minimum-of-subsequences
---

# --description--

Considere $S_n$ como uma sequência de números inteiros produzida com o seguinte gerador de números pseudoaleatórios:

$$\begin{align}         S_0 & = 290.797 \\\\
  S_{n + 1} & = {S_n}^2\bmod 50.515.093 \end{align}$$

Considere $A(i, j)$ como o mínimo dos números $S_i, S_{i + 1}, \ldots, S_j$ para $i ≤ j$. Considere $M(N) = \sum A(i, j)$ para $1 ≤ i ≤ j ≤ N$.

Podemos verificar que $M(10) = 432.256.955$ e $M(10.000) = 3.264.567.774.119$.

Encontre $M(2.000.000.000)$.

# --hints--

`minimumOfSubsequences()` deve retornar `7435327983715286000`.

```js
assert.strictEqual(minimumOfSubsequences(), 7435327983715286000);
```

# --seed--

## --seed-contents--

```js
function minimumOfSubsequences() {

  return true;
}

minimumOfSubsequences();
```

# --solutions--

```js
// solution required
```
