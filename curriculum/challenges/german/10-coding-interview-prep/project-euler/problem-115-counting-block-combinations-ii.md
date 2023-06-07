---
id: 5900f3df1000cf542c50fef1
title: 'Problem 115: Zählen von Blockkombinationen II'
challengeType: 1
forumTopicId: 301741
dashedName: problem-115-counting-block-combinations-ii
---

# --description--

Auf eine Reihe mit einer Länge von `n` Einheiten werden rote Blöcke mit einer Mindestlänge von `m` Einheiten gelegt, so dass zwei rote Blöcke (die unterschiedlich lang sein dürfen) durch mindestens ein schwarzes Quadrat getrennt sind.

Die Füllfunktion $F(m, n)$ soll die Anzahl der Möglichkeiten darstellen, wie eine Zeile gefüllt werden kann.

Zum Beispiel $F(3, 29) = 673135$ und $F(3, 30) = 1089155$.

Das heißt, für m = 3 ist n = 30 der kleinste Wert, für den die Fill-Count-Funktion erstmals eine Million überschreitet.

Auf die gleiche Weise kann für m = 10 nachgewiesen werden, dass $F(10, 56) = 880711$ und $F(10, 57) = 1148904$, also n = 57 der kleinste Wert ist, für den die Fill-Count-Funktion erstmals eine Million überschreitet.

Finde für m = 50 den kleinsten Wert von `n`, für den die Funktion fill-count zuerst eine Million überschreitet.

**Hinweis:** Dies ist eine schwierigere Version von Problem 114.

# --hints--

`countingBlockTwo()` sollte `168` zurückgeben.

```js
assert.strictEqual(countingBlockTwo(), 168);
```

# --seed--

## --seed-contents--

```js
function countingBlockTwo() {

  return true;
}

countingBlockTwo();
```

# --solutions--

```js
// solution required
```
