---
id: 5900f4f71000cf542c510009
title: '問題 394: パイの食べ方'
challengeType: 1
forumTopicId: 302059
dashedName: problem-394-eating-pie
---

# --description--

ジェフのパイの食べ方は一風変わっています。

パイは円形です。 まず、彼はパイの半径に沿って最初の切れ目を入れます。

少なくとも与えられた割合 $F$ のパイが残っている間、彼は以下の手順に従います。

- パイの中心から、残っているパイの縁の任意の点 (点の位置は縁全体から等確率で選ばれます) まで切れ目を入れ切ることにより、2 枚のスライスを作ります。 これによって、残っているパイは 3 つの部分に分割されます。
- 最初の切れ目から反時計回りに、最初の 2 枚のスライスを取って食べます。

パイの残りの割合が $F$ 未満になったら、もうこの手順を繰り返しません。 代わりに、残ったパイを全部食べます。

<img class="img-responsive center-block" alt="パイを切る手順のアニメーション" src="https://cdn.freecodecamp.org/curriculum/project-euler/eating-pie.gif" style="background-color: white; padding: 10px;" />

$x ≥ 1$, $F = frac{1}{x}$ のとき、ジェフが上の手順を繰り返す回数の期待値を $E(x)$ とします。 $E(1) = 1$, $E(2) ≈ 1.2676536759$, $E(7.5) ≈ 2.1215732071$ であることを確認できます。

$E(40)$ を求め、四捨五入して小数第 10 位まで示しなさい。

# --hints--

`eatingPie()` は `3.2370342194` を返す必要があります。

```js
assert.strictEqual(eatingPie(), 3.2370342194);
```

# --seed--

## --seed-contents--

```js
function eatingPie() {

  return true;
}

eatingPie();
```

# --solutions--

```js
// solution required
```
