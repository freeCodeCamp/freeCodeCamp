---
id: 5900f4c51000cf542c50ffd7
title: '问题344：银元游戏'
challengeType: 1
forumTopicId: 302003
dashedName: problem-344-silver-dollar-game
---

# --description--

One variant of N.G. de Bruijn's silver dollar game can be described as follows:

在正方形条上放置了许多硬币，每平方最多一枚硬币。 只有一枚硬币，称为银元，具有任何价值。 两名球员轮流做出动作。 在每个回合中，玩家必须进行常规或特殊动作。

常规移动包括选择一个硬币并将其移动到左侧的一个或多个方块。 硬币不能从条带中移出或跳到另一个硬币上或上方。

或者，玩家可以选择将最左边的硬币扒窃而不是定期移动。 如果没有可能的常规动作，则玩家被迫掏出最左边的硬币。

获胜者是兜售银元的玩家。

<img class="img-responsive center-block" alt="silver dollar game" src="https://cdn.freecodecamp.org/curriculum/project-euler/silver-dollar-game.gif" style="background-color: white; padding: 10px;" />

A winning configuration is an arrangement of coins on the strip where the first player can force a win no matter what the second player does.

Let $W(n, c)$ be the number of winning configurations for a strip of $n$ squares, $c$ worthless coins and one silver dollar.

You are given that $W(10, 2) = 324$ and $W(100, 10) = 1\\,514\\,704\\,946\\,113\\,500$.

Find $W(1\\,000\\,000, 100)$ modulo the semiprime $1000\\,036\\,000\\,099 (= 1\\,000\\,003 \times 1\\,000\\,033)$.

# --hints--

`silverDollarGame()` should return `65579304332`.

```js
assert.strictEqual(silverDollarGame(), 65579304332);
```

# --seed--

## --seed-contents--

```js
function silverDollarGame() {

  return true;
}

silverDollarGame();
```

# --solutions--

```js
// solution required
```
