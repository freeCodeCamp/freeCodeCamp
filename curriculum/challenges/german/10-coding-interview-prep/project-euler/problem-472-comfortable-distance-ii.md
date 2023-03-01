---
id: 5900f5451000cf542c510057
title: 'Problem 472: Angenehmer Abstand II'
challengeType: 1
forumTopicId: 302149
dashedName: problem-472-comfortable-distance-ii
---

# --description--

Es gibt $N$ Sitze in einer Reihe. $N$ Personen kommen nacheinander, um die Plätze nach den folgenden Regeln zu besetzen:

1. Keine Person sitzt neben einer anderen.
1. Die erste Person wählt einen beliebigen Platz.
1. Jede weitere Person wählt den Sitz, der am weitesten von den bereits sitzenden Personen entfernt ist, sofern dies nicht gegen Regel 1 verstößt. Gibt es mehr als eine Wahlmöglichkeit, die diese Bedingung erfüllt, wählt die Person die Wahlmöglichkeit ganz links.

Beachte, dass aufgrund von Regel 1 sicherlich einige Plätze unbesetzt bleiben werden und die maximale Anzahl von Personen, die sitzen können, kleiner ist als $N$ (für $N > 1$).

Hier sind die möglichen Sitzordnungen für $N = 15$:

<img class="img-responsive center-block" alt="Sitzordnung für N = 15" src="https://cdn.freecodecamp.org/curriculum/project-euler/comfortable-distance-ii.png" style="background-color: white; padding: 10px;" />

Wir sehen, dass, wenn die erste Person richtig wählt, die 15 Plätze bis zu 7 Personen aufnehmen können. Wir können auch sehen, dass die erste Person 9 Auswahlmöglichkeiten hat, um die Anzahl der Personen zu maximieren, die Platz nehmen können.

Lasse $f(N)$ die Anzahl der Wahlmöglichkeiten sein, die die erste Person hat, um die Anzahl der Plätze für $N$ Sitze in einer Reihe zu maximieren. Somit ist $f(1) = 1$, $f(15) = 9$, $f(20) = 6$ und $f(500) = 16$.

Außerdem ist $\sum f(N) = 83$ für $1 ≤ N ≤ 20$ und $\sum f(N) = 13\\,343$ für $1 ≤ N ≤ 500$.

Finde $\sum f(N)$ für $1 ≤ N ≤ {10}^{12}$. Gib die letzten 8 Ziffern deiner Antwort an.

# --hints--

`comfortableDistanceTwo()` sollte `73811586` zurückgeben.

```js
assert.strictEqual(comfortableDistanceTwo(), 73811586);
```

# --seed--

## --seed-contents--

```js
function comfortableDistanceTwo() {

  return true;
}

comfortableDistanceTwo();
```

# --solutions--

```js
// solution required
```
