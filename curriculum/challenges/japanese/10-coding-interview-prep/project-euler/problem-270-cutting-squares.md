---
id: 5900f47c1000cf542c50ff8e
title: '問題 270: 正方形を切る'
challengeType: 1
forumTopicId: 301920
dashedName: problem-270-cutting-squares
---

# --description--

整数寸法 $N×N$ を持つ正方形の紙片が座標上に置かれています。角は原点にあり、辺は $x$ 軸と $y$ 軸に沿っています。 次に、以下のルールに従って紙を切ります。

- 正方形の異なる辺上にあり整数座標を持つ 2 つの点の間のみを、まっすぐ切る。
- 2 本の切断線が交差してはいけないが、複数の切断線の端点が同じでも良い。
- ルールに従った切り方がそれ以上できなくなるまで続ける。

反転または回転した図もすべて相異なる切り方として数え、$N×N$ の正方形の切り方の数を $C(N)$ とします。 例えば、$C(1) = 2$ であり、$C(2) = 30$ です (下図参照)。

<img class="img-responsive center-block" alt="2x2 の正方形の切り方。反転・回転したものは相異なる切り方とされる" src="https://cdn.freecodecamp.org/curriculum/project-euler/cutting-squares.gif" style="background-color: white; padding: 10px;" />

$C(30)\bmod {10}^8$ を求めなさい。

# --hints--

`cuttingSquares()` は `82282080` を返す必要があります。

```js
assert.strictEqual(cuttingSquares(), 82282080);
```

# --seed--

## --seed-contents--

```js
function cuttingSquares() {

  return true;
}

cuttingSquares();
```

# --solutions--

```js
// solution required
```
