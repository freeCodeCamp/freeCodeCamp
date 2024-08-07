---
id: 5900f4a61000cf542c50ffb8
title: 'Problem 313: Sliding game'
challengeType: 1
forumTopicId: 301969
dashedName: problem-313-sliding-game
---

# --description--

In a sliding game a counter may slide horizontally or vertically into an empty space. The objective of the game is to move the red counter from the top left corner of a grid to the bottom right corner; the space always starts in the bottom right corner. For example, the following sequence of pictures show how the game can be completed in five moves on a 2 by 2 grid.

<img alt="completing game in five moves on grid 2x2" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliding-game-1.gif" style="background-color: white; padding: 10px; display: block; margin-right: auto; margin-left: auto; margin-bottom: 1.2rem;">

Let $S(m, n)$ represent the minimum number of moves to complete the game on an $m$ by $n$ grid. For example, it can be verified that $S(5, 4) = 25$.

<img alt="initial grid state and final grid state for game on grid 5x4" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliding-game-2.gif" style="background-color: white; padding: 10px; display: block; margin-right: auto; margin-left: auto; margin-bottom: 1.2rem;">

There are exactly 5482 grids for which $S(m, n) = p^2$, where $p &lt; 100$ is prime.

How many grids does $S(m, n) = p^2$, where $p &lt; {10}^6$ is prime?

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
