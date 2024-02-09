---
id: 5900f4dd1000cf542c50ffef
title: 'Problem 368: Eine Kempner-ähnliche Reihe'
challengeType: 1
forumTopicId: 302029
dashedName: problem-368-a-kempner-like-series
---

# --description--

The harmonic series $1 + \dfrac{1}{2} + \dfrac{1}{3} + \dfrac{1}{4} + \ldots$ is well known to be divergent.

Wenn wir jedoch in dieser Reihe jeden Term weglassen, in dessen Nenner eine 9 steht, konvergiert die Reihe bemerkenswerterweise zu ungefähr 22,9206766193. Diese modifizierte harmonische Reihe wird als Kempner-Reihe bezeichnet.

Betrachten wir nun eine andere modifizierte harmonische Reihe, indem wir jeden Term aus der harmonischen Reihe weglassen, bei dem der Nenner 3 oder mehr gleiche aufeinanderfolgende Ziffern hat. Man kann feststellen, dass von den ersten 1200 Termen der harmonischen Reihe nur 20 Terme ausgelassen werden.

Diese 20 ausgelassenen Begriffe sind:

$$\dfrac{1}{111}, \dfrac{1}{222}, \dfrac{1}{333}, \dfrac{1}{444}, \dfrac{1}{555}, \dfrac{1}{666}, \dfrac{1}{777}, \dfrac{1}{888}, \dfrac{1}{999}, \dfrac{1}{1000}, \dfrac{1}{1110}, \\\\
\dfrac{1}{1111}, \dfrac{1}{1112}, \dfrac{1}{1113}, \dfrac{1}{1114}, \dfrac{1}{1115}, \dfrac{1}{1116}, \dfrac{1}{1117}, \dfrac{1}{1118}, \dfrac{1}{1119}$$

Auch diese Reihe konvergiert.

Finde den Wert, zu dem die Reihe konvergiert. Gib deine Antwort auf 10 Stellen hinter dem Komma gerundet an.

# --hints--

`kempnerLikeSeries()` should return `253.6135092068`.

```js
assert.strictEqual(kempnerLikeSeries(), 253.6135092068);
```

# --seed--

## --seed-contents--

```js
function kempnerLikeSeries() {

  return true;
}

kempnerLikeSeries();
```

# --solutions--

```js
// solution required
```
