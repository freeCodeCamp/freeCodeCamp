---
id: 5900f4a61000cf542c50ffb8
title: 'Problem 313: Schiebespiel'
challengeType: 1
forumTopicId: 301969
dashedName: problem-313-sliding-game
---

# --description--

In a sliding game a counter may slide horizontally or vertically into an empty space. The objective of the game is to move the red counter from the top left corner of a grid to the bottom right corner; the space always starts in the bottom right corner. For example, the following sequence of pictures show how the game can be completed in five moves on a 2 by 2 grid.

<img class="img-responsive center-block" alt="Spiel in fünf Zügen auf einem 2x2-Gitterfeld abschließen" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliding-game-1.gif" style="background-color: white; padding: 10px;" />

Lasse $S(m, n)$ die minimale Anzahl von Zügen sein, um das Spiel auf einem $m$ mal $n$ Gitter zu beenden. Es kann zum Beispiel nachgewiesen werden, dass $S(5, 4) = 25$ ist.

<img class="img-responsive center-block" alt="Anfangszustand des Gitters und Endzustand des Gitters für das Spiel auf dem Gitter 5x4" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliding-game-2.gif" style="background-color: white; padding: 10px;" />

Es gibt genau 5482 Netze, für die $S(m, n) = p^2$ ist, wobei $p &lt; 100$ eine Primzahl ist.

Wie viele Gitter hat $S(m, n) = p^2$, wenn $p &lt; {10}^6$ eine Primzahl ist?

# --hints--

`slidingGame()` should return `2057774861813004`.

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
