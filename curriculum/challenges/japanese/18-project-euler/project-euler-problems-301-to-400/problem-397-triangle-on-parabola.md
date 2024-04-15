---
id: 5900f4f91000cf542c51000c
title: '問題 397: 放物線上の三角形'
challengeType: 1
forumTopicId: 302062
dashedName: problem-397-triangle-on-parabola
---

# --description--

放物線 $y = \frac{x^2}{k}$ 上の 3 点 $A(a, \frac{a^2}{k})$, $B(b, \frac{b^2}{k})$, $C(c, \frac{c^2}{k})$ を選択します。

$1 ≤ k ≤ K$, $-X ≤ a &lt; b &lt; c ≤ X$ のとき、三角形 $ABC$ の少なくとも 1 つの角度が 45 度であるような整数の四つ組 $(k, a, b, c)$ の個数を $F(K, X)$ とします。

例えば、$F(1, 10) = 41$, $F(10, 100) = 12\\,492$ です。

$F({10}^6, {10}^9)$ を求めなさい。

# --hints--

`triangleOnParabola()` は `141630459461893730` を返す必要があります。

```js
assert.strictEqual(triangleOnParabola(), 141630459461893730);
```

# --seed--

## --seed-contents--

```js
function triangleOnParabola() {

  return true;
}

triangleOnParabola();
```

# --solutions--

```js
// solution required
```
