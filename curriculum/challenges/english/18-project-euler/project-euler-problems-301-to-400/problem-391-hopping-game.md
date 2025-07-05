---
id: 5900f4f31000cf542c510006
title: 'Problem 391: Hopping Game'
challengeType: 1
forumTopicId: 302056
dashedName: problem-391-hopping-game
---

# --description--

Let $s_k$ be the number of 1’s when writing the numbers from 0 to $k$ in binary.

For example, writing 0 to 5 in binary, we have 0, 1, 10, 11, 100, 101. There are seven 1’s, so $s_5 = 7$.

The sequence $S = \\{s_k : k ≥ 0\\}$ starts $\\{0, 1, 2, 4, 5, 7, 9, 12, \ldots\\}$.

A game is played by two players. Before the game starts, a number $n$ is chosen. A counter $c$ starts at 0. At each turn, the player chooses a number from 1 to $n$ (inclusive) and increases $c$ by that number. The resulting value of $c$ must be a member of $S$. If there are no more valid moves, the player loses.

For example, with $n = 5$ and starting with $c = 0$:

- Player 1 chooses 4, so $c$ becomes $0 + 4 = 4$.
- Player 2 chooses 5, so $c$ becomes $4 + 5 = 9$.
- Player 1 chooses 3, so $c$ becomes $9 + 3 = 12$.
- etc.

Note that $c$ must always belong to $S$, and each player can increase $c$ by at most $n$.

Let $M(n)$ be the highest number the first player can choose at her first turn to force a win, and $M(n) = 0$ if there is no such move. For example, $M(2) = 2$, $M(7) = 1$ and $M(20) = 4$.

It can be verified $\sum M{(n)}^3 = 8150$ for $1 ≤ n ≤ 20$.

Find $\sum M{(n)}^3$ for $1 ≤ n ≤ 1000$.

# --hints--

`hoppingGame()` should return `61029882288`.

```js
assert.strictEqual(hoppingGame(), 61029882288);
```

# --seed--

## --seed-contents--

```js
function hoppingGame() {

  return true;
}

hoppingGame();
```

# --solutions--

```js
// solution required
```
