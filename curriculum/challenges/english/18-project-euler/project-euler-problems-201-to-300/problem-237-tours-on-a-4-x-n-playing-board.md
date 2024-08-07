---
id: 5900f4591000cf542c50ff6c
title: 'Problem 237: Tours on a 4 x n playing board'
challengeType: 1
forumTopicId: 301882
dashedName: problem-237-tours-on-a-4-x-n-playing-board
---

# --description--

Let $T(n)$ be the number of tours over a 4 × $n$ playing board such that:

- The tour starts in the top left corner.
- The tour consists of moves that are up, down, left, or right one square.
- The tour visits each square exactly once.
- The tour ends in the bottom left corner.

The diagram shows one tour over a 4 × 10 board:

<img alt="one tour over 4 x 10 board" src="https://cdn.freecodecamp.org/curriculum/project-euler/tours-on-a-4-x-n-playing-board.gif" style="background-color: white; padding: 10px; display: block; margin-right: auto; margin-left: auto; margin-bottom: 1.2rem;">

$T(10)$ is 2329. What is $T({10}^{12})$ modulo ${10}^8$?

# --hints--

`toursOnPlayingBoard()` should return `15836928`.

```js
assert.strictEqual(toursOnPlayingBoard(), 15836928);
```

# --seed--

## --seed-contents--

```js
function toursOnPlayingBoard() {

  return true;
}

toursOnPlayingBoard();
```

# --solutions--

```js
// solution required
```
