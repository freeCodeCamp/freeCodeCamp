---
id: 5900f4be1000cf542c50ffd1
title: '問題 338: 長方形の方眼紙を切る'
challengeType: 1
forumTopicId: 301996
dashedName: problem-338-cutting-rectangular-grid-paper
---

# --description--

整数寸法 $w$ × $h$ の長方形の方眼紙が 1 枚与えられます。 格子の間隔は 1 です。

この紙を格子線に沿って 2 枚に切り離し、それらの紙を重ねずに並べ替えると、寸法が異なる新しい長方形ができます。

例えば下図のように、寸法 9 × 4 の紙を切り並べ替えると 18 × 2, 12 × 3, 6 × 6 の寸法の長方形を作ることができます。

<img class="img-responsive center-block" alt="寸法 9 × 4 の紙を切って作られる 3 種類の長方形 (寸法 18 × 2, 12 × 3, 6 × 6)" src="https://cdn.freecodecamp.org/curriculum/project-euler/cutting-rectangular-grid-paper.gif" style="background-color: white; padding: 10px;" />

同様に、寸法 9 × 8 の紙から、寸法 18 × 4 と 12 × 6 の長方形を作ることができます。

$w$ と $h$ の対について、寸法 $w$ × $h$ の紙で作れる相異なる長方形の数を $F(w, h)$ とします。 例えば、$F(2, 1) = 0$, $F(2, 2) = 1$, $F(9, 4) = 3$, $F(9, 8) = 2$ です。 注意点として、最初の長方形と一致する長方形は $F(w, h)$ に数えられません。 また、寸法 $w$ × $h$ と寸法 $h$ × $w$ の長方形は区別されません。

整数 $N$ について、0 &lt; h ≤ w ≤ N$ を満たすような $w$ と $h$ の対のすべてに対する $F(w, h)$ の和を $G(N)$ とします。 $G(10) = 55$, $G({10}^3) = 971\\,745$, $G({10}^5) = 9\\,992\\,617\\,687$ であることを確認できます。

$G({10}^{12})$ を求めなさい。 mod ${10}^8$ で答えること。

# --hints--

`cuttingRectangularGridPaper()` は `15614292` を返す必要があります。

```js
assert.strictEqual(cuttingRectangularGridPaper(), 15614292);
```

# --seed--

## --seed-contents--

```js
function cuttingRectangularGridPaper() {

  return true;
}

cuttingRectangularGridPaper();
```

# --solutions--

```js
// solution required
```
