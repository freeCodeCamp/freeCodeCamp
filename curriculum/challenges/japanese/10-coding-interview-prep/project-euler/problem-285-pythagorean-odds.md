---
id: 5900f48a1000cf542c50ff9c
title: '問題 285: ピタゴラスオッズ'
challengeType: 1
forumTopicId: 301936
dashedName: problem-285-pythagorean-odds
---

# --description--

アルバートが正の整数 $k$ を 1 つ選ぶと、一様分布の区間 [0,1] から 2 つの実数 $a$, $b$ が無作為に選ばれます。

次に、和 ${(ka + 1)}^2 + {(kb + 1)}^2$ の平方根が計算され、最も近い整数に丸められます。 結果が $k$ に等しければ $k$ 点を獲得し、それ以外は 0 点です。

例えば、$k = 6$, $a = 0.2$, $b = 0.85$ の場合、${(ka + 1)}^2 + {(kb + 1)}^2 = 42.05$ です。 42.05 の平方根は 6.484... で、最も近い整数に四捨五入すると 6 になります。 これは $k$ に等しいので、6 点を獲得します。

$k = 1, k = 2, \ldots, k = 10$ として 10 回プレイした場合の合計点の期待値は 10.20914 (小数第 5 位に四捨五入) である、ということを示せます。

$k = 1, k = 2, k = 3, \ldots, k = {10}^5$ として ${10}^5$ 回プレイした場合の合計点の期待値を、四捨五入して小数第 5 位まで求めなさい。

# --hints--

`pythagoreanOdds()` は `157055.80999` を返す必要があります。

```js
assert.strictEqual(pythagoreanOdds(), 157055.80999);
```

# --seed--

## --seed-contents--

```js
function pythagoreanOdds() {

  return true;
}

pythagoreanOdds();
```

# --solutions--

```js
// solution required
```
