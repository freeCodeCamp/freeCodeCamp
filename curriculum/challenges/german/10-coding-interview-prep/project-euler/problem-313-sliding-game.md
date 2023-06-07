---
id: 5900f4a61000cf542c50ffb8
title: 'Problem 313: Schiebespiel'
challengeType: 1
forumTopicId: 301969
dashedName: problem-313-sliding-game
---

# --description--

Bei einem Schiebespiel kann ein Spielstein horizontal oder vertikal in ein leeres Feld gleiten. Ziel des Spiels ist es, den roten Spielstein von der linken oberen Ecke eines Gitters in die rechte untere Ecke zu bringen; das Feld beginnt immer in der rechten unteren Ecke. Die folgende Bildfolge zeigt zum Beispiel, wie das Spiel in fünf Zügen auf einem 2 x 2-Raster beendet werden kann.

<img class="img-responsive center-block" alt="Spiel in fünf Zügen auf einem 2x2-Gitterfeld abschließen" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliding-game-1.gif" style="background-color: white; padding: 10px;" />

Lasse $S(m, n)$ die minimale Anzahl von Zügen sein, um das Spiel auf einem $m$ mal $n$ Gitter zu beenden. Es kann zum Beispiel nachgewiesen werden, dass $S(5, 4) = 25$ ist.

<img class="img-responsive center-block" alt="Anfangszustand des Gitters und Endzustand des Gitters für das Spiel auf dem Gitter 5x4" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliding-game-2.gif" style="background-color: white; padding: 10px;" />

Es gibt genau 5482 Netze, für die $S(m, n) = p^2$ ist, wobei $p &lt; 100$ eine Primzahl ist.

Wie viele Gitter hat $S(m, n) = p^2$, wenn $p &lt; {10}^6$ eine Primzahl ist?

# --hints--

`slidingGame()` sollte `2057774861813004` zurückgeben.

```js
assert.strictEqual(slidingGame(), 2057774861813004);
```

# --seed--

## --seed-contents--

```js
function slidingGame() {

  return true;
}

slidingGame();
```

# --solutions--

```js
// solution required
```
