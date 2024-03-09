---
id: 5900f5001000cf542c510013
title: '問題 403: 放物線と線で囲まれた格子点'
challengeType: 1
forumTopicId: 302071
dashedName: problem-403-lattice-points-enclosed-by-parabola-and-line
---

# --description--

整数 $a$ と $b$ に対し、放物線 $y = x^2$ と線 $y = ax + b で囲まれた領域として $D(a, b)$ を定義します。すなわち、D(a, b) = \\{ (x, y) | x^2 ≤ y ≤ ax + b \\}$ です。

$D(a, b)$ に含まれる格子点の数を $L(a, b)$ と定義します。 例えば、$L(1, 2) = 8$, $L(2, -1) = 1$ です。

また、$D(a, b)$ の面積が有理数であり、かつ $|a|,|b| ≤ N$ であるようなすべての対 ($a$, $b$) に対して、$L(a, b)$ の和を $S(N)$ と定義します。

$S(5) = 344$, $S(100) = 26\\,709\\,528$ であることを確認できます。

$S({10}^{12})$ を求めなさい。 $\bmod {10}^8$ で答えること。

# --hints--

`latticePoints()` は `18224771` を返す必要があります。

```js
assert.strictEqual(latticePoints(), 18224771);
```

# --seed--

## --seed-contents--

```js
function latticePoints() {

  return true;
}

latticePoints();
```

# --solutions--

```js
// solution required
```
