---
id: 5900f5371000cf542c51004a
title: '问题 459：翻转游戏'
challengeType: 1
forumTopicId: 302133
dashedName: problem-459-flipping-game
---

# --description--

The flipping game is a two player game played on a $N$ by $N$ square board.

Each square contains a disk with one side white and one side black.

The game starts with all disks showing their white side.

A turn consists of flipping all disks in a rectangle with the following properties:

- the upper right corner of the rectangle contains a white disk
- the rectangle width is a perfect square (1, 4, 9, 16, ...)
- the rectangle height is a triangular number (1, 3, 6, 10, ...)

<img class="img-responsive center-block" alt="flipping all disks in a 4x3 rectangle on a 5x5 board" src="https://cdn.freecodecamp.org/curriculum/project-euler/flipping-game-1.png" style="background-color: white; padding: 10px;" />

Players alternate turns. A player wins by turning the grid all black.

Let $W(N)$ be the number of winning moves for the first player on a $N$ by $N$ board with all disks white, assuming perfect play.

$W(1) = 1$, $W(2) = 0$, $W(5) = 8$ and $W({10}^2) = 31\\,395$.

For $N = 5$, the first player's eight winning first moves are:

<img class="img-responsive center-block" alt="eight winning first moves for N = 5" src="https://cdn.freecodecamp.org/curriculum/project-euler/flipping-game-2.png" style="background-color: white; padding: 10px;" />

Find $W({10}^6)$.

# --hints--

`flippingGame()` should return `3996390106631`.

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
