---
id: 5900f51a1000cf542c51002d
title: '問題 430: 範囲めくり'
challengeType: 1
forumTopicId: 302101
dashedName: problem-430-range-flips
---

# --description--

$N$ 枚の円盤が一列に並べられ、左から右に 1 から $N$ までの番号が振られています。

円盤にはそれぞれ黒い面と白い面があります。 最初は、すべての円盤の白い面が見えています。

各ターンで、相異なるとは限らない 2 つの整数 $A$, $B$ が、1 から $N$ までの間 (1 と $N$ を含む) から一様かつ無作為に選ばれます。 $A$ から $B$ まで ($A$ と $B$ を含む) の番号が振られたすべての円盤が裏返されます。

下図は $N = 8$ の場合の例です。 最初のターンでは $A = 5$ と $B = 2$、2 回目のターンでは $A = 4$ と $B = 6$ が選ばれます。

<img class="img-responsive center-block" alt="n = 8 の例。最初のターンでは A = 5 と B = 2、2 回目のターンでは A = 4 と B = 6" src="https://cdn.freecodecamp.org/curriculum/project-euler/range-flips.gif" style="background-color: white; padding: 10px;" />

$M$ 回のターンの後に白い面が見えている円盤の枚数の期待値を $E(N, M)$ とします。 $E(3, 1) = \frac{10}{9}$, $E(3, 2) = \frac{5}{3}$, $E(10, 4) ≈ 5.157$, $E(100, 10) ≈ 51.893$ であることを確認できます。

$E({10}^{10}, 4000)$ を求めなさい。 回答は、四捨五入して小数第 2 位まで示すこと。

# --hints--

`rangeFlips()` は `5000624921.38` を返す必要があります。

```js
assert.strictEqual(rangeFlips(), 5000624921.38);
```

# --seed--

## --seed-contents--

```js
function rangeFlips() {

  return true;
}

rangeFlips();
```

# --solutions--

```js
// solution required
```
