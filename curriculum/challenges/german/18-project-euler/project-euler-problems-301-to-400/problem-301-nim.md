---
id: 5900f4991000cf542c50ffab
title: 'Problem 301: Nim'
challengeType: 1
forumTopicId: 301955
dashedName: problem-301-nim
---

# --description--

Nim is a game played with heaps of stones, where two players take it in turn to remove any number of stones from any heap until no stones remain.

Wir betrachten die Normalspielversion von Nim mit drei Haufen, die wie folgt funktioniert:

- At the start of the game there are three heaps of stones.
- On his turn the player removes any positive number of stones from any single heap.
- The first player unable to move (because no stones remain) loses.

Wenn ($n_1$, $n_2$, $n_3$) eine Nim-Position angibt, die aus Haufen der Größe $n_1$, $n_2$ und $n_3$ besteht, dann gibt es eine einfache Funktion $X(n_1,n_2,n_3)$ - die man nachschlagen oder versuchen kann, selbst abzuleiten - die zurückgibt:

- zero if, with perfect strategy, the player about to move will eventually lose; or
- ungleich Null, wenn der Spieler, der am Zug ist, bei perfekter Strategie schließlich gewinnt.

Zum Beispiel $X(1, 2, 3) = 0$, denn egal, was der aktuelle Spieler tut, kann sein Gegner mit einem Zug antworten, der zwei gleich große Haufen übrig lässt, woraufhin jeder Zug des aktuellen Spielers von seinem Gegner gespiegelt werden kann, bis keine Steine mehr übrig sind; der aktuelle Spieler verliert also. Zur Veranschaulichung:

- current player moves to (1,2,1)
- Gegner bewegt sich auf (1,0,1)
- aktuelle Spieler bewegt sich auf (0,0,1)
- Der Gegner bewegt sich auf (0,0,0), und gewinnt somit.

Für wie viele positive Integer $n ≤ 2^{30}$ gilt $X(n, 2n, 3n) = 0$?

# --hints--

`nim()` should return `2178309`.

```js
assert.strictEqual(nim(), 2178309);
```

# --seed--

## --seed-contents--

```js
function nim() {

  return true;
}

nim();
```

# --solutions--

```js
// solution required
```
