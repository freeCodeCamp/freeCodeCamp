---
id: 5900f5411000cf542c510053
title: '問題 469: 空席'
challengeType: 1
forumTopicId: 302144
dashedName: problem-469-empty-chairs
---

# --description--

部屋の中の円卓の周りに $N$ 脚の椅子が置かれています。

騎士が部屋に 1 人ずつ入り、座って良い空席を無作為に選びます。

肘を置く余裕を十分持たせるために、騎士達は常に互いの間で少なくとも 1 脚の椅子を空席のままにします。

座って良い椅子がなくなったとき、空席の割合 $C$ が決まります。 また、$C$ の期待値を $E(N)$ とします。

$E(4) = \frac{1}{2}$, $E(6) = \frac{5}{9} $ であることを確認できます。

$E({10}^{18})$ を求めなさい。 回答は、四捨五入して小数第 14 位まで求め、0.abcdefghijklmn の形式にすること。

# --hints--

`emptyChairs()` は `0.56766764161831` を返す必要があります。

```js
assert.strictEqual(emptyChairs(), 0.56766764161831);
```

# --seed--

## --seed-contents--

```js
function emptyChairs() {

  return true;
}

emptyChairs();
```

# --solutions--

```js
// solution required
```
