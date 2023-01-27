---
id: 5900f4511000cf542c50ff63
title: 'Problem 228: Minkowski-Summen'
challengeType: 1
forumTopicId: 301871
dashedName: problem-228-minkowski-sums
---

# --description--

Lasse $S_n$ das regelmäßige $n$-seitige Polygon - oder die Form sein -, dessen Eckpunkte $v_k (k = 1, 2, \ldots, n)$ Koordinaten haben:

$$\begin{align}   & x_k = cos(\frac{2k - 1}{n} × 180°) \\\\
  & y_k = sin(\frac{2k - 1}{n} × 180°) \end{align}$$

Jedes $S_n$ ist als eine gefüllte Form zu interpretieren, die aus allen Punkten auf dem Umfang und im Inneren besteht.

Die Minkowski-Summe $S + T$ zweier Formen $S$ und $T$ ist das Ergebnis der Addition jedes Punktes in $S$ zu jedem Punkt in $T$, wobei die Punktaddition koordinatenweise erfolgt: $(u, v) + (x, y) = (u + x, v + y)$.

Zum Beispiel ist die Summe von $S_3$ und $S_4$ die unten rosa dargestellte sechsseitige Form:

<img class="img-responsive center-block" alt="das Bild zeigt S_3, S_4 und S_3 + S_4" src="https://cdn.freecodecamp.org/curriculum/project-euler/minkowski-sums.png" style="background-color: white; padding: 10px;" />

Wie viele Seiten hat $S_{1864} + S_{1865} + \ldots + S_{1909}$?

# --hints--

`minkowskiSums()` sollte `86226` zurückgeben.

```js
assert.strictEqual(minkowskiSums(), 86226);
```

# --seed--

## --seed-contents--

```js
function minkowskiSums() {

  return true;
}

minkowskiSums();
```

# --solutions--

```js
// solution required
```
