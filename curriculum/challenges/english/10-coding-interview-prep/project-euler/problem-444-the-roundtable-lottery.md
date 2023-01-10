---
id: 5900f52a1000cf542c51003b
title: 'Problem 444: The Roundtable Lottery'
challengeType: 1
forumTopicId: 302116
dashedName: problem-444-the-roundtable-lottery
---

# --description--

A group of $p$ people decide to sit down at a round table and play a lottery-ticket trading game. Each person starts off with a randomly-assigned, unscratched lottery ticket. Each ticket, when scratched, reveals a whole-pound prize ranging anywhere from £1 to £$p$, with no two tickets alike. The goal of the game is for each person to maximize his ticket winnings upon leaving the game.

An arbitrary person is chosen to be the first player. Going around the table, each player has only one of two options:

1.  The player can scratch his ticket and reveal its worth to everyone at the table.
2.  The player can trade his unscratched ticket for a previous player's scratched ticket, and then leave the game with that ticket. The previous player then scratches his newly-acquired ticket and reveals its worth to everyone at the table.

The game ends once all tickets have been scratched. All players still remaining at the table must leave with their currently-held tickets.

Assume that each player uses the optimal strategy for maximizing the expected value of his ticket winnings.

Let $E(p)$ represent the expected number of players left at the table when the game ends in a game consisting of $p$ players (e.g. $E(111) = 5.2912$ when rounded to 5 significant digits).

Let $S_1(N) = \displaystyle\sum_{p = 1}^N E(p)$.

Let $S_k(N) = \displaystyle\sum_{p = 1}^N S_{k - 1}(p)$ for $k > 1$.

Find $S_{20}({10}^{14})$ and write the answer as a string in scientific notation rounded to 10 significant digits. Use a lowercase `e` to separate mantissa and exponent. For example, the answer for $S_3(100)$ would be `5.983679014e5`.

# --hints--

`roundtableLottery()` should return a string.

```js
assert(typeof roundtableLottery() === 'string');
```

`roundtableLottery()` should return the string `1.200856722e263`.

```js
assert.strictEqual(roundtableLottery(), '1.200856722e263');
```

# --seed--

## --seed-contents--

```js
function roundtableLottery() {

  return true;
}

roundtableLottery();
```

# --solutions--

```js
// solution required
```
