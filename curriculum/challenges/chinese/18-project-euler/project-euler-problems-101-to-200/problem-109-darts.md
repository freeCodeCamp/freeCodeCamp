---
id: 5900f3db1000cf542c50feec
title: '问题 109：飞镖'
challengeType: 1
forumTopicId: 301733
dashedName: problem-109-darts
---

# --description--

In the game of darts a player throws three darts at a target board which is split into twenty equal sized sections numbered one to twenty.

<img class="img-responsive center-block" alt="黑色棋盘" src="https://cdn.freecodecamp.org/curriculum/project-euler/darts.png" style="background-color: white; padding: 10px;" />

The score of a dart is determined by the number of the region that the dart lands in. A dart landing outside the red/green outer ring scores zero. The black and cream regions inside this ring represent single scores. 然而，红/绿外环和中环得分分别是双倍和三倍。

在棋盘的中心是两个同心圆，称为牛市区域或靶心。 外牛市价值 25 分，内牛市双倍，价值 50 分。

规则有很多变化，但在最流行的游戏中，玩家将以 301 或 501 的分数开始，第一个将总分减少到零的玩家是赢家。 但是，玩“双打”系统是正常的，这意味着玩家必须在最后一个飞镖上打出一个双打（包括棋盘中央的双靶心）才能获胜；任何其他将其总得分减少到一个或更低的飞镖意味着该组三个飞镖的得分为“失败”。

当玩家能够完成他们当前的分数时，它被称为“结账”，最高结账是 170：T20 T20 D25（两个高音 20 秒和双牛）。 有 11 种不同的方式可以在 6 分的情况下结账：

$$\begin{array}   \text{D3} &    &    \\\\
  D1        & D2 &    \\\\   S2        & D2 &    \\\\
  D2        & D1 &    \\\\   S4        & D1 &    \\\\
  S1        & S1 & D2 \\\\   S1        & T1 & D1 \\\\
  S1        & S3 & D1 \\\\   D1        & D1 & D1 \\\\
  D1        & S2 & D1 \\\\ S2        & S2 & D1 \end{array}$$

请注意，D1 D2 被认为与 D2 D1 不同，因为他们完成了不同的双打。 然而，组合 S1 T1 D1 被认为与 T1 S1 D1 相同。 此外，我们在考虑组合时不应包括未命中；例如，D3 与 0 D3 和 0 0 D3 相同。 令人难以置信的是，总共有 42336 种不同的结账方式。 得分低于 100 的玩家可以通过多少种不同的方式进行结账？

# --hints--

`darts()` 应该返回 `38182`。

```js
assert.strictEqual(darts(), 38182);
```

# --seed--

## --seed-contents--

```js
function darts() {

  return true;
}

darts();
```

# --solutions--

```js
// solution required
```
