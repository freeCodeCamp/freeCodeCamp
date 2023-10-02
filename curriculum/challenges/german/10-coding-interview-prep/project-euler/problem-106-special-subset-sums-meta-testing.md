---
id: 5900f3d71000cf542c50fee9
title: 'Problem 106: Spezielle Teilmengen: Meta-Tests'
challengeType: 1
forumTopicId: 301730
dashedName: problem-106-special-subset-sums-meta-testing
---

# --description--

Lasse $S(A)$ die Summe der Elemente der Menge A der Größe n sein. Wir nennen sie eine spezielle Summenmenge, wenn für zwei beliebige nicht leere, disjunkte Teilmengen B und C die folgenden Eigenschaften zutreffen:

1. $S(B) ≠ S(C)$; heißt, die Summen der Teilmengen können nicht gleich sein.
2. Wenn B mehr Elemente enthält als C, dann $S(B) > S(C)$.

Für dieses Problem nehmen wir an, dass eine gegebene Menge n streng zunehmende Elemente enthält und bereits die zweite Regel erfüllt.

Überraschenderweise muss von den 25 möglichen Teilmengenpaaren, die sich aus einer Menge mit n = 4 ergeben können, nur 1 dieser Paare auf Gleichheit geprüft werden (erste Regel). Ähnlich verhält es sich, wenn n = 7 ist, dann müssen nur 70 der 966 Teilmengenpaare getestet werden.

Wie viele der 261625 möglichen Teilmengenpaare müssen bei n = 12 auf Gleichheit geprüft werden?

**Hinweis:** Dieses Problem hängt mit Problem 103 und Problem 105 zusammen.

# --hints--

`subsetSumsMetaTesting()` sollte `21384` zurückgeben.

```js
assert.strictEqual(subsetSumsMetaTesting(), 21384);
```

# --seed--

## --seed-contents--

```js
function subsetSumsMetaTesting() {

  return true;
}

subsetSumsMetaTesting();
```

# --solutions--

```js
// solution required
```
