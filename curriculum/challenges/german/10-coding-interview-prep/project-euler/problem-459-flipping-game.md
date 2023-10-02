---
id: 5900f5371000cf542c51004a
title: 'Problem 459: Flip-Spiel'
challengeType: 1
forumTopicId: 302133
dashedName: problem-459-flipping-game
---

# --description--

Das Hüpfspiel ist ein Spiel für zwei Spieler, das auf einem quadratischen Spielbrett von $N$ mal $N$ gespielt wird.

Jedes Quadrat enthält eine Scheibe, die auf einer Seite weiß und auf der anderen Seite schwarz ist.

Das Spiel beginnt damit, dass alle Scheiben ihre weiße Seite zeigen.

Ein Zug besteht darin, alle Scheiben in einem Rechteck mit den folgenden Eigenschaften umzudrehen:

- die obere rechte Ecke des Rechtecks enthält eine weiße Scheibe
- die Rechteckbreite ist ein perfektes Quadrat (1, 4, 9, 16, ...)
- die Höhe des Rechtecks ist eine dreieckige Zahl (1, 3, 6, 10, ...)

<img class="img-responsive center-block" alt="alle Scheiben in einem 4x3-Rechteck auf einem 5x5-Brett umdrehen" src="https://cdn.freecodecamp.org/curriculum/project-euler/flipping-game-1.png" style="background-color: white; padding: 10px;" />

Spieler wechseln sich ab. Ein Spieler gewinnt, indem er das Raster ganz schwarz macht.

Lasse $W(N)$ die Anzahl der Gewinnzüge für den ersten Spieler auf einem $N$ mal $N$ Brett mit allen weißen Feldern sein, unter der Annahme eines perfekten Spiels.

$W(1) = 1$, $W(2) = 0$, $W(5) = 8$ and $W({10}^2) = 31\\,395$.

Für $N = 5$ sind die acht siegreichen ersten Züge des ersten Spielers:

<img class="img-responsive center-block" alt="acht gewinnende erste Züge für N = 5" src="https://cdn.freecodecamp.org/curriculum/project-euler/flipping-game-2.png" style="background-color: white; padding: 10px;" />

Finde $W({10}^6)$.

# --hints--

`flippingGame()` sollte `3996390106631` zurückgeben.

```js
assert.strictEqual(flippingGame(), 3996390106631);
```

# --seed--

## --seed-contents--

```js
function flippingGame() {

  return true;
}

flippingGame();
```

# --solutions--

```js
// solution required
```
