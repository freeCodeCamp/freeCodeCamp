---
id: 5900f4591000cf542c50ff6c
title: '問題 237: 4 × n のゲーム盤上の経路'
challengeType: 1
forumTopicId: 301882
dashedName: problem-237-tours-on-a-4-x-n-playing-board
---

# --description--

次のようなルールがあるゲームについて、4 × $n$ のゲーム盤上を進む経路の数を $T(n)$ とします。

- 左上隅のマスから始める。
- 上下左右に 1 マスずつ移動する。
- 各マスをちょうど 1 回ずつ通る。
- 左下隅のマスで終わる。

下図は、4 × 10 の盤上での経路の一例です。

<img class="img-responsive center-block" alt="4 × 10 の盤上の経路の一例" src="https://cdn.freecodecamp.org/curriculum/project-euler/tours-on-a-4-x-n-playing-board.gif" style="background-color: white; padding: 10px;" />

$T(10)$ は 2329 です。 $T({10}^{12})$ mod ${10}^8$ を求めなさい。

# --hints--

`toursOnPlayingBoard()` は `15836928` を返す必要があります。

```js
assert.strictEqual(toursOnPlayingBoard(), 15836928);
```

# --seed--

## --seed-contents--

```js
function toursOnPlayingBoard() {

  return true;
}

toursOnPlayingBoard();
```

# --solutions--

```js
// solution required
```
