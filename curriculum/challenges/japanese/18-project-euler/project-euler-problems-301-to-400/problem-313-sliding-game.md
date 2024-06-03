---
id: 5900f4a61000cf542c50ffb8
title: 'Problem 313: スライドゲーム'
challengeType: 1
forumTopicId: 301969
dashedName: problem-313-sliding-game
---

# --description--

スライドゲームでは、カウンターを縦か横にスライドさせて空のスペースに移動します。 ゲームの目的は、赤のカウンターを格子の左上隅から右下隅へ移動することです。開始時は必ず右下隅が空いています。 例えば、次の一連の画像は、2 × 2 の格子上で 5 手でゲームを終える方法を示しています。

<img class="img-responsive center-block" alt="2 x 2 の格子でゲームを終える" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliding-game-1.gif" style="background-color: white; padding: 10px;" />

$m$ x $n$ の格子でゲームを終えるための最小移動回数を、$S(m, n)$ とします。 例えば、$S(5, 4) = 25$ であることを確認できます。

<img class="img-responsive center-block" alt="5 x 4 の格子を使ったゲームの初期状態と最終状態" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliding-game-2.gif" style="background-color: white; padding: 10px;" />

素数 $p &lt; 100$ について、$S(m, n) = p^2$ となる格子はちょうど 5482 個あります。

素数 $p &lt; {10}^6$ について、$S(m, n) = p^2$ となる格子はいくつありますか。

# --hints--

`slidingGame()` は `2057774861813004` を返す必要があります。

```js
assert.strictEqual(slidingGame(), 2057774861813004);
```

# --seed--

## --seed-contents--

```js
function slidingGame() {

  return true;
}

slidingGame();
```

# --solutions--

```js
// solution required
```
