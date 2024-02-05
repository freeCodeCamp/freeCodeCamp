---
id: 5900f4c51000cf542c50ffd7
title: '問題344：銀元遊戲'
challengeType: 1
forumTopicId: 302003
dashedName: problem-344-silver-dollar-game
---

# --description--

One variant of N.G. de Bruijn's silver dollar game can be described as follows:

在正方形條上放置了許多硬幣，每平方最多一枚硬幣。 只有一枚硬幣，稱爲銀元，具有任何價值。 兩名球員輪流做出動作。 在每個回合中，玩家必須進行常規或特殊動作。

常規移動包括選擇一個硬幣並將其移動到左側的一個或多個方塊。 硬幣不能從條帶中移出或跳到另一個硬幣上或上方。

或者，玩家可以選擇將最左邊的硬幣扒竊而不是定期移動。 如果沒有可能的常規動作，則玩家被迫掏出最左邊的硬幣。

獲勝者是兜售銀元的玩家。

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
