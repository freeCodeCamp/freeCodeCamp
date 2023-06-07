---
id: 5900f4b91000cf542c50ffcc
title: 'Problema 333: Partizioni speciali'
challengeType: 1
forumTopicId: 301991
dashedName: problem-333-special-partitions
---

# --description--

Tutti gli interi positivi possono essere suddivisi in modo tale che ogni termine della partizione possa essere espresso come $2^i \times 3^j$, dove $i, j ≥ 0$.

Consideriamo solo quelle partizioni dove nessuno dei termini può dividere uno degli altri termini. Ad esempio, la partizione di $17 = 2 + 6 + 9 = (2^1 \times 3^0 + 2^1 \times 3^1 + 2^0 \times 3^2)$ non sarebbe valida poiché 2 puó dividere 6. Neanche la partizione $17 = 16 + 1 = (2^4 \times 3^0 + 2^0 \times 3^0)$ poiché 1 può dividere 16. L'unica partizione valida di 17 sarebbe $8 + 9 = (2^3 \times 3^0 + 2^0 \times 3^2)$.

Molti interi hanno più di una partizione valida, il primo è 11 con le due partizioni seguenti.

$$\begin{align}   & 11 = 2 + 9 = (2^1 \times 3^0 + 2^0 \times 3^2) \\\\
  & 11 = 8 + 3 = (2^3 \times 3^0 + 2^0 \times 3^1) \end{align}$$

Definiamo $P(n)$ come il numero di partizioni valide di $n$. Per esempio, $P(11) = 2$.

Consideriamo solo gli interi primi $q$ che avrebbero una singola partizione valida come $P(17)$.

La somma dei primi $q &lt;100$ tali che $P(q) = 1$ è uguale a 233.

Trova la somma dei primi $q &lt; 1\\,000\\,000$ tali che $P(q) = 1$.

# --hints--

`specialPartitions()` dovrebbe restituire `3053105`.

```js
assert.strictEqual(specialPartitions(), 3053105);
```

# --seed--

## --seed-contents--

```js
function specialPartitions() {

  return true;
}

specialPartitions();
```

# --solutions--

```js
// solution required
```
