---
id: 5900f52a1000cf542c51003b
title: '問題444：圓桌會議彩票'
challengeType: 1
forumTopicId: 302116
dashedName: problem-444-the-roundtable-lottery
---

# --description--

A group of $p$ people decide to sit down at a round table and play a lottery-ticket trading game. Each person starts off with a randomly-assigned, unscratched lottery ticket. Each ticket, when scratched, reveals a whole-pound prize ranging anywhere from £1 to £$p$, with no two tickets alike. The goal of the game is for each person to maximize his ticket winnings upon leaving the game.

選擇任意人作爲第一個玩家。 圍繞桌子，每個玩家只有兩個選項之一：

1.  The player can scratch his ticket and reveal its worth to everyone at the table.
2.  玩家可以將他未擊中的門票換成先前玩家劃傷的門票，然後將該門票留給遊戲。 之前的玩家隨後抓住了他新買的機票，並向桌上的每個人展示了它的價值。

所有門票都被劃傷後遊戲結束。 仍然留在桌上的所有玩家必須帶着他們當前持有的門票。

假設每個玩家使用最優策略來最大化他的票獎金的期望值。

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
