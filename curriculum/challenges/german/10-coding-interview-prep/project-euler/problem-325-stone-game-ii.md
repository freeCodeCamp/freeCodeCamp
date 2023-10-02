---
id: 5900f4b11000cf542c50ffc4
title: 'Problem 325: Steinspiel II'
challengeType: 1
forumTopicId: 301982
dashedName: problem-325-stone-game-ii
---

# --description--

Ein Spiel wird mit zwei Steinhaufen und zwei Spielern gespielt. Wenn ein Spieler an der Reihe ist, darf er eine bestimmte Anzahl von Steinen vom größeren Haufen nehmen. Die Anzahl der entfernten Steine muss ein positives Vielfaches der Anzahl der Steine im kleineren Stapel sein.

Wenn z.B. das geordnete Paar (6,14) eine Konfiguration mit 6 Steinen im kleineren Haufen und 14 Steinen im größeren Stapel beschreibt, dann kann der erste Spieler 6 oder 12 Steine vom größeren Haufen entfernen.

Der Spieler, der alle Steine von einem Haufen genommen hat, gewinnt das Spiel.

Eine gewinnende Variante ist eine, bei der der erste Spieler einen Sieg erzwingen kann. Zum Beispiel sind (1,5), (2,6) und (3,12) Gewinnkombinationen, weil der erste Spieler sofort alle Steine des zweiten Haufens entnehmen kann.

Eine verlierende Kombinationen wäre, wenn der zweite Spieler einen Sieg erzwingen kann, egal was der erste Spieler tut. Zum Beispiel sind (2,3) und (3,4) Verliererkombinationen: Jeder legale Zug führt zu einem Gewinn des zweiten Spielers.

Definiere $S(N)$ als die Summe von ($x_i + y_i$) für alle Verlustkombinationen ($x_i$, $y_i$), $0 &lt; x_i &lt; y_i ≤ N$. Wir können überprüfen, dass $S(10) = 211$ und $S({10}^4) = 230\\,312\\,207\\,313$.

Finde $S({10}^{16})\bmod 7^{10}$.

# --hints--

`stoneGameTwo()` sollte `54672965` zurückgeben.

```js
assert.strictEqual(stoneGameTwo(), 54672965);
```

# --seed--

## --seed-contents--

```js
function stoneGameTwo() {

  return true;
}

stoneGameTwo();
```

# --solutions--

```js
// solution required
```
