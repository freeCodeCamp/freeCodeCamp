---
id: 5900f54a1000cf542c51005c
title: 'Problem 477: Number Sequence Game'
challengeType: 1
forumTopicId: 302154
dashedName: problem-477-number-sequence-game
---

# --description--

The number sequence game starts with a sequence $S$ of $N$ numbers written on a line.

Two players alternate turns. At his turn, a player must select and remove either the first or the last number remaining in the sequence.

The player score is the sum of all the numbers he has taken. Each player attempts to maximize his own sum.

If $N = 4$ and $S = \\{1, 2, 10, 3\\}$, then each player maximizes his score as follows:

- Player 1: removes the first number (1)
- Player 2: removes the last number from the remaining sequence (3)
- Player 1: removes the last number from the remaining sequence (10)
- Player 2: removes the remaining number (2)

Player 1 score is $1 + 10 = 11$.

Let $F(N)$ be the score of player 1 if both players follow the optimal strategy for the sequence $S = \\{s_1, s_2, \ldots, s_N\\}$ defined as:

- $s_1 = 0$
- $s_{i + 1} = ({s_i}^2 + 45)$ modulo $1\\,000\\,000\\,007$

The sequence begins with $S = \\{0, 45, 2\\,070, 4\\,284\\,945, 753\\,524\\,550, 478\\,107\\,844, 894\\,218\\,625, \ldots\\}$.

You are given $F(2) = 45$, $F(4) = 4\\,284\\,990$, $F(100) = 26\\,365\\,463\\,243$, $F(104) = 2\\,495\\,838\\,522\\,951$.

Find $F({10}^8)$.

# --hints--

`numberSequenceGame()` should return `25044905874565164`.

```js
assert.strictEqual(numberSequenceGame(), 25044905874565164);
```

# --seed--

## --seed-contents--

```js
function numberSequenceGame() {

  return true;
}

numberSequenceGame();
```

# --solutions--

```js
// solution required
```
