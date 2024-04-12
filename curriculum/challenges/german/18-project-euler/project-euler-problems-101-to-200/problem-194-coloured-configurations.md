---
id: 5900f42f1000cf542c50ff40
title: 'Problem 194: Farbige Konfigurationen'
challengeType: 1
forumTopicId: 301832
dashedName: problem-194-coloured-configurations
---

# --description--

Betrachte die Grafik, die mit den Einheiten A gebildet wurde:
<img class="img-responsive" alt="Grafik Einheit A" src="https://cdn.freecodecamp.org/curriculum/project-euler/coloured-configurations-1.png" style="display: inline-block; background-color: white; padding: 10px;" />
 und B: <img class="img-responsive" alt="graph unit B" src="https://cdn.freecodecamp.org/curriculum/project-euler/coloured-configurations-2.png" style="display: inline-block; background-color: white; padding: 10px;" />, wo die Einheiten wie im Graphen <img class="img-responsive" alt="graph with four units glued along the vertical edges" src="https://cdn.freecodecamp.org/curriculum/project-euler/coloured-configurations-3.png" style="display: inline-block; background-color: white; padding: 10px;" /> an den vertikalen Kanten befestigt sind.

Eine Konfiguration des Typs $(a,b,c)$ ist eine Grafik, die aus $a$ Einheiten A und $b$ Einheiten B gebildet wurde, und wo die Scheitelpunkte der Grafik mit bis zu $c$ Farben gefärbt werden, so dass keine zwei benachbarten Scheitelpunkte die gleiche Farbe haben. Die zusammengesetzte Grafik oben ist ein Beispiel einer Konfiguration des Typs $(2,2,6)$, eigentlich des Typs $(2,2,c)$ für alle $c ≥ 4$

$N(a,b,c)$ sollte die Anzahl der Konfigurationen des Typs $(a,b,c)$ sein. Zum Beispiel $N(1,0,3) = 24$, $N(0,2,4) = 92928$ und $N(2,2,3) = 20736$.

Finde die letzten 8 Ziffern von $N(25,75,1984)$.

# --hints--

`coloredConfigurations()` sollte `61190912` zurückgeben.

```js
assert.strictEqual(coloredConfigurations(), 61190912);
```

# --seed--

## --seed-contents--

```js
function coloredConfigurations() {

  return true;
}

coloredConfigurations();
```

# --solutions--

```js
// solution required
```
