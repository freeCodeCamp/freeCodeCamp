---
id: 5900f52a1000cf542c51003b
title: '问题444：圆桌会议彩票'
challengeType: 1
forumTopicId: 302116
dashedName: problem-444-the-roundtable-lottery
---

# --description--

A group of $p$ people decide to sit down at a round table and play a lottery-ticket trading game. Each person starts off with a randomly-assigned, unscratched lottery ticket. Each ticket, when scratched, reveals a whole-pound prize ranging anywhere from £1 to £$p$, with no two tickets alike. The goal of the game is for each person to maximize his ticket winnings upon leaving the game.

选择任意人作为第一个玩家。 围绕桌子，每个玩家只有两个选项之一：

1.  The player can scratch his ticket and reveal its worth to everyone at the table.
2.  玩家可以将他未击中的门票换成先前玩家划伤的门票，然后将该门票留给游戏。 之前的玩家随后抓住了他新买的机票，并向桌上的每个人展示了它的价值。

所有门票都被划伤后游戏结束。 仍然留在桌上的所有玩家必须带着他们当前持有的门票。

假设每个玩家使用最优策略来最大化他的票奖金的期望值。

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
