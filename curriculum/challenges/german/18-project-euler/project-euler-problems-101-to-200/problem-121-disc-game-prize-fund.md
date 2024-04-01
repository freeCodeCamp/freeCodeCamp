---
id: 5900f3e51000cf542c50fef8
title: 'Problem 121: Preisgeld für Disc Game'
challengeType: 1
forumTopicId: 301748
dashedName: problem-121-disc-game-prize-fund
---

# --description--

Ein Beutel enthält eine rote Scheibe und eine blaue Scheibe. In einem Glücksspiel zieht ein Spieler eine zufällige Scheibe und deren Farbe wird notiert. Nach jeder Runde wird die Scheibe zurück in den Beutel gelegt, eine zusätzliche rote Scheibe wird hinzugefügt, und eine andere Scheibe wird zufällig entnommen.

Der Spieler zahlt £1, um zu spielen und gewinnt, wenn am Ende des Spiels mehr blaue als rote Scheiben entnommen wurden.

If the game is played for four turns, the probability of a player winning is exactly 11/120, and so the maximum prize fund the banker should allocate for winning in this game would be £10 before they would expect to incur a loss. Zu beachten ist, dass jede Auszahlung eine ganze Zahl von Pfund ist und auch die ursprünglich für das Spiel gezahlten 1 Pfund einschließt, so dass der Spieler in dem angegebenen Beispiel tatsächlich 9 Pfund gewinnt.

Finde die maximale Prämie, die in einem einzigen Spiel zugewiesen werden sollte, in dem 15 Runden gespielt werden.

# --hints--

`discGamePrize()` sollte `2269` zurückgeben.

```js
assert.strictEqual(discGamePrize(), 2269);
```

# --seed--

## --seed-contents--

```js
function discGamePrize() {

  return true;
}

discGamePrize();
```

# --solutions--

```js
// solution required
```
