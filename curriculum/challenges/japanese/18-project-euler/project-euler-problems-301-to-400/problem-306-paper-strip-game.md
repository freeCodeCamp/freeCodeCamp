---
id: 5900f49f1000cf542c50ffb1
title: '問題 306: 短冊ゲーム'
challengeType: 1
forumTopicId: 301960
dashedName: problem-306-paper-strip-game
---

# --description--

次のゲームは、組み合わせゲーム理論の古典的な例です。

一列に並べた $n$ 個の白いマスが最初にあり、2 人のプレイヤーが交互にプレイしていきます。 それぞれのターンで、プレイヤーは連続する白いマスを 2 つ選び、それらを黒く塗ります。 先にどこも塗れなくなったプレイヤーの負けです。

- $n = 1$: 有効な塗り方がないため、先手が自動的に負けます。
- $n = 2$: 有効な塗り方は 1 通りのみです。その後、後手が負けます。
- $n = 3$: 有効な塗り方が 2 通りありますが、いずれでも後手が負けます。
- $n = 4$: 先手には 3 通りの有効な塗り方があります。中央の 2 マスを塗れば勝てます。
- $n = 5$: 先手には有効な塗り方が 4 通りありますが (下図の赤色)、いずれでも後手 (青) が勝ちます。

<img class="img-responsive center-block" alt="5 マスの短冊において有効な最初の塗り方" src="https://cdn.freecodecamp.org/curriculum/project-euler/paper-strip-game.gif" style="background-color: white; padding: 10px;" />

したがって、$1 ≤ n ≤ 5$ のとき、先手が必ず勝てるような $n$ の値は 3 つあります。

同様に、$1 ≤ n ≤ 50$ のとき、先手が必ず勝てるような $n$ の値は 40 個あります。

$1 ≤ n ≤ 1\\,000\\,000$ のとき、先手が必ず勝てるような $n$ の値はいつくありますか。

# --hints--

`paperStripGame()` は `852938` を返す必要があります。

```js
assert.strictEqual(paperStripGame(), 852938);
```

# --seed--

## --seed-contents--

```js
function paperStripGame() {

  return true;
}

paperStripGame();
```

# --solutions--

```js
// solution required
```
