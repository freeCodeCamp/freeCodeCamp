---
id: 5900f49f1000cf542c50ffb1
title: 'Problem 306: Paper-strip Game'
challengeType: 1
forumTopicId: 301960
dashedName: problem-306-paper-strip-game
---

# --description--

The following game is a classic example of Combinatorial Game Theory:

Two players start with a strip of $n$ white squares and they take alternate turns. On each turn, a player picks two contiguous white squares and paints them black. The first player who cannot make a move loses.

- $n = 1$: No valid moves, so the first player loses automatically.
- $n = 2$: Only one valid move, after which the second player loses.
- $n = 3$: Two valid moves, but both leave a situation where the second player loses.
- $n = 4$: There are three valid moves for the first player; who is able to win the game by painting the two middle squares.
- $n = 5$: Four valid moves for the first player (shown below in red); but no matter what the player does, the second player (blue) wins.

<img class="img-responsive center-block" alt="valid starting moves for strip with 5 squares" src="https://cdn.freecodecamp.org/curriculum/project-euler/paper-strip-game.gif" style="background-color: white; padding: 10px;" />

So, for $1 ≤ n ≤ 5$, there are 3 values of $n$ for which the first player can force a win.

Similarly, for $1 ≤ n ≤ 50$, there are 40 values of $n$ for which the first player can force a win.

For $1 ≤ n ≤ 1\\,000\\,000$, how many values of $n$ are there for which the first player can force a win?

# --hints--

`paperStripGame()` should return `852938`.

```js
assert.strictEqual(paperStripGame(), 852938);
```

# --seed--

## --seed-contents--

```js
function paperStripGame() {

  return true;
}

paperStripGame();
```

# --solutions--

```js
// solution required
```
