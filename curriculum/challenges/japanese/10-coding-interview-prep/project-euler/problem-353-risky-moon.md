---
id: 5900f4cd1000cf542c50ffe0
title: '問題 353: 危険な月'
challengeType: 1
forumTopicId: 302013
dashedName: problem-353-risky-moon
---

# --description--

月は、中心 (0, 0, 0)、半径 $r$ の球 $C(r)$ で表すことができます。

$C(r)$ の月面の整数座標地点に駅があります。 (0, 0, $r$) にある駅は北極駅、(0, 0, $-r$) にある駅は南極駅と呼ばれます。

すべての駅は、それらの駅を通る大円弧上の最短道路で互いに連絡しています。 2 駅間の旅は危険です。 2 駅間の道路の長さが $d$ の場合、旅のリスクの大きさは $\{\left(\frac{d}{πr}\right)}^2$ で示されます (これを道路のリスクと呼びます)。 旅に 2 つ以上の駅が含まれている場合、使用された道路のリスクの和がその旅のリスクとなります。

北極駅から南極駅へ直行する際の移動距離は $πr$、リスクは 1 です。 (0, $r$, 0) を経由して北極駅から南極駅へ移動すると、移動距離は同じですが、次のようにリスクは小さくなります。

$${\left(\frac{\frac{1}{2}πr}{πr}\right)}^2+{\left(\frac{\frac{1}{2}πr}{πr}\right)}^2 = 0.5$$

$C(r)$ 上の北極駅から南極駅まで移動する際の最小リスクは $M(r)$ です。

$M(7) = 0.178\\,494\\,399\\,8$ (小数第 10 位に四捨五入) が与えられます。

$\displaystyle\sum_{n = 1}^{15} M(2^n - 1)$ を求めなさい。

回答は、四捨五入して小数第 10 位まで求め、a.bcdefghijk の形式にすること。

# --hints--

`riskyMoon()` は `1.2759860331` を返す必要があります。

```js
assert.strictEqual(riskyMoon(), 1.2759860331);
```

# --seed--

## --seed-contents--

```js
function riskyMoon() {

  return true;
}

riskyMoon();
```

# --solutions--

```js
// solution required
```
