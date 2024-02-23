---
id: 5900f5221000cf542c510033
title: '問題436：不公平的賭注'
challengeType: 1
forumTopicId: 302107
dashedName: problem-436-unfair-wager
---

# --description--

Julie proposes the following wager to her sister Louise.

她建議他們玩一場機會遊戲，以確定誰來洗碗。

對於此遊戲，他們應使用獨立隨機數的生成器，該生成器均勻分佈在0和1之間。

The game starts with $S = 0$.

The first player, Louise, adds to $S$ different random numbers from the generator until $S > 1$ and records her last random number '$x$'.

The second player, Julie, continues adding to $S$ different random numbers from the generator until $S > 2$ and records her last random number '$y$'.

The player with the highest number wins and the loser washes the dishes, i.e. if $y > x$ the second player wins.

For example, if the first player draws 0.62 and 0.44, the first player turn ends since $0.62 + 0.44 > 1$ and $x = 0.44$. If the second players draws 0.1, 0.27 and 0.91, the second player turn ends since $0.62 + 0.44 + 0.1 + 0.27 + 0.91 > 2$ and $y = 0.91$. Since $y > x$, the second player wins.

Louise thinks about it for a second, and objects: "That's not fair".

What is the probability that the second player wins? Give your answer rounded to 10 places behind the decimal point in the form 0.abcdefghij

# --hints--

`unfairWager()` should return `0.5276662759`.

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
