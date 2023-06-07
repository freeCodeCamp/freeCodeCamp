---
id: 5900f4b91000cf542c50ffcc
title: 'Problem 333: Spezielle Teilungen'
challengeType: 1
forumTopicId: 301991
dashedName: problem-333-special-partitions
---

# --description--

Alle positiven Integer können so geteilt werden, dass jeder einzelne Term der Aufteilung als $2^i \times 3^j$ ausgedrückt werden kann, wobei $i, j ≥ 0$.

Betrachten wir nur solche Teilungen, bei denen keiner der Terme einen der anderen Terme teilen kann. Zum Beispiel wäre die Teilung von $17 = 2 + 6 + 9 = (2^1 \times 3^0 + 2^1 \times 3^1 + 2^0 \times 3^2)$ nicht gültig, da 2 durch 6 teilbar ist. Auch die Teilung $17 = 16 + 1 = (2^4 \times 3^0 + 2^0 \times 3^0)$ würde nicht funktionieren, da 1 die Zahl 16 teilen kann. Die einzig gültige Teilung von 17 wäre $8 + 9 = (2^3 \times 3^0 + 2^0 \times 3^2)$.

Viele ganze Zahlen haben mehr als eine gültige Unterteilung, die erste ist 11 und hat die folgenden zwei Unterteilungen.

$$\begin{align}   & 11 = 2 + 9 = (2^1 \times 3^0 + 2^0 \times 3^2) \\\\
  & 11 = 8 + 3 = (2^3 \times 3^0 + 2^0 \times 3^1) \end{align}$$

Definieren wir $P(n)$ als die Anzahl der gültigen Partitionen von $n$. Zum Beispiel: $P(11) = 2$.

Betrachten wir nur die ganzen Primzahlen $q$, die eine einzige gültige Teilung wie $P(17)$ haben.

Die Summe der Primzahlen $q &lt;100$, so dass $P(q) = 1$ gleich 233 ist.

Finde die Summe der Primzahlen $q &lt; 1\\,000\\,000$, sodass $P(q) = 1$ ist.

# --hints--

`specialPartitions()` sollte `3053105` zurückgeben.

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
