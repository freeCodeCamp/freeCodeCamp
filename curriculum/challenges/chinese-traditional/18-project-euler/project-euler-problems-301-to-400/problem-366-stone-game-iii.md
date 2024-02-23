---
id: 5900f4da1000cf542c50ffed
title: '問題366：石頭遊戲III'
challengeType: 1
forumTopicId: 302027
dashedName: problem-366-stone-game-iii
---

# --description--

Two players, Anton and Bernhard, are playing the following game.

There is one pile of $n$ stones.

設M（n）是第一個玩家在第一個回合的勝利位置可以獲得的最大結石數，M（n）= 0表示任何其他位置。

Thereafter, each player may remove at most twice the number of stones his opponent took on the previous move.

移除最後一塊石頭的玩家獲勝。

例如： $n = 5$

If the first player takes anything more than one stone the next player will be able to take all remaining stones.

If the first player takes one stone, leaving four, his opponent will take also one stone, leaving three stones.

The first player cannot take all three because he may take at most $2 \times 1 = 2$ stones. So let's say he also takes one stone, leaving 2.

The second player can take the two remaining stones and wins.

So 5 is a losing position for the first player.

For some winning positions there is more than one possible move for the first player.

E.g. when $n = 17$ the first player can remove one or four stones.

Let $M(n)$ be the maximum number of stones the first player can take from a winning position at his first turn and $M(n) = 0$ for any other position.

$\sum M(n)$ for $n ≤ 100$ is 728.

Find $\sum M(n)$ for $n ≤ {10}^{18}$. Give your answer modulo ${10}^8$.

# --hints--

`stoneGameThree()` should return `88351299`.

```js
assert.strictEqual(stoneGameThree(), 88351299);
```

# --seed--

## --seed-contents--

```js
function stoneGameThree() {

  return true;
}

stoneGameThree();
```

# --solutions--

```js
// solution required
```
