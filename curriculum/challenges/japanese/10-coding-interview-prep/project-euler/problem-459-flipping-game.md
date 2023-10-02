---
id: 5900f5371000cf542c51004a
title: '問題 459: 裏返しゲーム'
challengeType: 1
forumTopicId: 302133
dashedName: problem-459-flipping-game
---

# --description--

裏返しゲームは、$N$ × $N$ 個のマスがある盤を使って 2 人で行うゲームです。

各マスには、白と黒の面を持つ円盤が置いてあります。

ゲーム開始時は、すべての円盤の白い面が上になっています。

各ターンで、以下の性質を持つ長方形の範囲内にあるすべての円盤を裏返します。

- 長方形の右上隅に白い円盤がある
- 長方形の幅が完全正方数 (1, 4, 9, 16, ...) である
- 長方形の高さが三角数 (1, 3, 6, 10, ...) である

<img class="img-responsive center-block" alt="5x5 盤上の 4x3 の長方形の範囲内にあるすべての円盤を裏返す" src="https://cdn.freecodecamp.org/curriculum/project-euler/flipping-game-1.png" style="background-color: white; padding: 10px;" />

プレイヤーは交互に手を打ちます。 すべてのマスを黒にしたプレイヤーの勝ちです。

すべての円盤が白である $N$ x $N$ 個のマスから始めて完璧なプレイをすると仮定して、先手必勝の手の数を $W(N)$ とします。

$W(1) = 1$, $W(2) = 0$, $W(5) = 8$, $W({10}^2) = 31\\,395$ となります。

$N = 5$ のとき、先手必勝の第 1 手は次の 8 つです。

<img class="img-responsive center-block" alt="先手必勝の第 1 手は 8 つ (N = 5)" src="https://cdn.freecodecamp.org/curriculum/project-euler/flipping-game-2.png" style="background-color: white; padding: 10px;" />

$W({10}^6)$ を求めなさい。

# --hints--

`flippingGame()` は `3996390106631` を返す必要があります。

```js
assert.strictEqual(flippingGame(), 3996390106631);
```

# --seed--

## --seed-contents--

```js
function flippingGame() {

  return true;
}

flippingGame();
```

# --solutions--

```js
// solution required
```
