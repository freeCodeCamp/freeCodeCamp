---
id: 5900f3c61000cf542c50fed9
title: 'Problem 90: Quadratische Zifferpaare'
challengeType: 1
forumTopicId: 302207
dashedName: problem-90-cube-digit-pairs
---

# --description--

Auf jede der sechs Seiten eines Würfels wird eine andere Ziffer (0 bis 9) geschrieben; dasselbe geschieht mit einem zweiten Würfel. Indem wir die beide Würfel nebeneinander in verschiedenen Positionen anordnen, können wir eine Vielzahl von zweistelligen Zahlen bilden.

Zum Beispiel könnte die Quadratzahl 64 gebildet werden:

<img class="img-responsive center-block" alt="zwei Würfel, einer mit der Zahl 6 und der andere mit der Zahl 4" src="https://cdn-media-1.freecodecamp.org/project-euler/cube-digit-pairs.png" style="background-color: white; padding: 10px;" />

Durch sorgfältige Auswahl der Ziffern auf beiden Würfeln ist es möglich, alle Quadratzahlen unter Hundert anzuzeigen: 01, 04, 09, 16, 25, 36, 49, 64 und 81.

Dies kann zum Beispiel erreicht werden, indem man {0, 5, 6, 7, 8, 9} auf einen Würfel und {1, 2, 3, 4, 8, 9} auf den anderen Würfel legt.

Für dieses Problem werden wir jedoch zulassen, dass die 6 oder 9 auf den Kopf gestellt wird, sodass eine Anordnung wie {0, 5, 6, 7, 8, 9} und {1, 2, 3, 4, 6, 7} es ermöglicht, alle neun Quadratzahlen darzustellen; andernfalls wäre es unmöglich, 09 zu erhalten.

Bei der Bestimmung einer eindeutigen Anordnung sind wir an den Ziffern auf jedem Würfel interessiert, nicht an der Reihenfolge.

<div style="margin-left: 4em;">
  {1, 2, 3, 4, 5, 6} is equivalent to {3, 6, 4, 1, 2, 5}<br>
  {1, 2, 3, 4, 5, 6} is distinct from {1, 2, 3, 4, 5, 9}
</div>

Da wir aber zulassen, dass 6 und 9 vertauscht werden, stellen die beiden unterschiedlichen Mengen im letzten Beispiel beide die erweiterte Menge {1, 2, 3, 4, 5, 6, 9} zum Zweck der Bildung zweistelliger Zahlen dar.

Bei wie vielen verschiedenen Anordnungen der beiden Würfel können alle Quadratzahlen angezeigt werden?

# --hints--

`cubeDigitPairs()` sollte eine Zahl zurückgeben.

```js
assert(typeof cubeDigitPairs() === 'number');
```

`cubeDigitPairs()` sollte 1217 zurückgeben.

```js
assert.strictEqual(cubeDigitPairs(), 1217);
```

# --seed--

## --seed-contents--

```js
function cubeDigitPairs() {

  return true;
}

cubeDigitPairs();
```

# --solutions--

```js
// solution required
```
