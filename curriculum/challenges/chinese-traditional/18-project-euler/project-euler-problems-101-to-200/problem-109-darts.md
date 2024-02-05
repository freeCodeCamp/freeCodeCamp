---
id: 5900f3db1000cf542c50feec
title: '問題 109：飛鏢'
challengeType: 1
forumTopicId: 301733
dashedName: problem-109-darts
---

# --description--

In the game of darts a player throws three darts at a target board which is split into twenty equal sized sections numbered one to twenty.

<img class="img-responsive center-block" alt="黑色棋盤" src="https://cdn.freecodecamp.org/curriculum/project-euler/darts.png" style="background-color: white; padding: 10px;" />

The score of a dart is determined by the number of the region that the dart lands in. A dart landing outside the red/green outer ring scores zero. The black and cream regions inside this ring represent single scores. 然而，紅/綠外環和中環得分分別是雙倍和三倍。

在棋盤的中心是兩個同心圓，稱爲牛市區域或靶心。 外牛市價值 25 分，內牛市雙倍，價值 50 分。

規則有很多變化，但在最流行的遊戲中，玩家將以 301 或 501 的分數開始，第一個將總分減少到零的玩家是贏家。 但是，玩“雙打”系統是正常的，這意味着玩家必須在最後一個飛鏢上打出一個雙打（包括棋盤中央的雙靶心）才能獲勝；任何其他將其總得分減少到一個或更低的飛鏢意味着該組三個飛鏢的得分爲“失敗”。

當玩家能夠完成他們當前的分數時，它被稱爲“結賬”，最高結賬是 170：T20 T20 D25（兩個高音 20 秒和雙牛）。 有 11 種不同的方式可以在 6 分的情況下結賬：

$$\begin{array}   \text{D3} &    &    \\\\
  D1        & D2 &    \\\\   S2        & D2 &    \\\\
  D2        & D1 &    \\\\   S4        & D1 &    \\\\
  S1        & S1 & D2 \\\\   S1        & T1 & D1 \\\\
  S1        & S3 & D1 \\\\   D1        & D1 & D1 \\\\
  D1        & S2 & D1 \\\\ S2        & S2 & D1 \end{array}$$

請注意，D1 D2 被認爲與 D2 D1 不同，因爲他們完成了不同的雙打。 然而，組合 S1 T1 D1 被認爲與 T1 S1 D1 相同。 此外，我們在考慮組合時不應包括未命中；例如，D3 與 0 D3 和 0 0 D3 相同。 令人難以置信的是，總共有 42336 種不同的結賬方式。 得分低於 100 的玩家可以通過多少種不同的方式進行結賬？

# --hints--

`darts()` 應該返回 `38182`。

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
