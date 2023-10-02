---
id: 5900f5221000cf542c510033
title: 'Problem 436: Unfair wager'
challengeType: 1
forumTopicId: 302107
dashedName: problem-436-unfair-wager
---

# --description--

Julie proposes the following wager to her sister Louise.

She suggests they play a game of chance to determine who will wash the dishes.

For this game, they shall use a generator of independent random numbers uniformly distributed between 0 and 1.

The game starts with $S = 0$.

The first player, Louise, adds to $S$ different random numbers from the generator until $S > 1$ and records her last random number '$x$'.

The second player, Julie, continues adding to $S$ different random numbers from the generator until $S > 2$ and records her last random number '$y$'.

The player with the highest number wins and the loser washes the dishes, i.e. if $y > x$ the second player wins.

For example, if the first player draws 0.62 and 0.44, the first player turn ends since $0.62 + 0.44 > 1$ and $x = 0.44$. If the second players draws 0.1, 0.27 and 0.91, the second player turn ends since $0.62 + 0.44 + 0.1 + 0.27 + 0.91 > 2$ and $y = 0.91$. Since $y > x$, the second player wins.

Louise thinks about it for a second, and objects: "That's not fair".

What is the probability that the second player wins? Дайте відповідь, заокруглену до десяти знаків після коми у форматі 0.abcdefghij

# --hints--

`unfairWager()` має повернути `0.5276662759`.

```js
assert.strictEqual(unfairWager(), 0.5276662759);
```

# --seed--

## --seed-contents--

```js
function unfairWager() {

  return true;
}

unfairWager();
```

# --solutions--

```js
// solution required
```
