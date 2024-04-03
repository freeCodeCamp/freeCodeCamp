---
id: 5900f40c1000cf542c50ff1e
title: 'Problem 159: Digitale Wurzelsummen von Faktorisierungen'
challengeType: 1
forumTopicId: 301790
dashedName: problem-159-digital-root-sums-of-factorisations
---

# --description--

Eine zusammengesetzte Zahl kann auf viele verschiedene Arten faktorisiert werden.

Ohne die Multiplikation mit Eins kann 24 beispielsweise auf 7 verschiedene Arten faktorisiert werden:

$$\begin{align}   & 24 = 2 \times 2 \times 2 \times 3\\\\
  & 24 = 2 \times 3 \times 4  \\\\   & 24 = 2 \times 2 \times 6  \\\\
  & 24 = 4 \times 6    \\\\   & 24 = 3 \times 8    \\\\
  & 24 = 2 \times 12   \\\\ & 24 = 24 \end{align}$$

Erinnere dich daran, dass die digitale Wurzel einer Zahl zur Basis 10 gefunden wird, indem man die Ziffern dieser Zahl addiert und diesen Vorgang so lange wiederholt, bis eine Zahl kleiner als 10 herauskommt. Die digitale Wurzel aus 467 ist also 8.

Wir nennen eine digitale Wurzelsumme (DWS) die Summe der digitalen Wurzeln der einzelnen Faktoren unserer Zahl. In der nachstehenden Tabelle sind alle DRS-Werte für 24 aufgeführt.

| Faktorisierung | Digitale Wurzelsumme |
| -------------- | -------------------- |
| 2x2x2x3        | 9                    |
| 2x3x4          | 9                    |
| 2x2x6          | 10                   |
| 4x6            | 10                   |
| 3x8            | 11                   |
| 2x12           | 5                    |
| 24             | 6                    |

Die maximale digitale Wurzelsumme von 24 ist 11. Die Funktion $mdrs(n)$ gibt die maximale digitale Wurzelsumme von $n$ an. Somit ist $mdrs(24) = 11$.

Finde $\sum{mdrs(n)}$ für $1 &lt; n &lt; 1,000,000$.

# --hints--

`euler159()` sollte `14489159` zurückgeben.

```js
assert.strictEqual(euler159(), 14489159);
```

# --seed--

## --seed-contents--

```js
function euler159() {

  return true;
}

euler159();
```

# --solutions--

```js
// solution required
```
