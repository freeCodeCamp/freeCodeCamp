---
id: 5900f5061000cf542c510017
title: '問題 409: 極端なニム (石取りゲーム)'
challengeType: 1
forumTopicId: 302077
dashedName: problem-409-nim-extreme
---

# --description--

$n$ を正の整数とします。 次のような二ム (石取りゲーム) の配置について考えます。

- 空でない山が $n$ 個ある。
- それぞれの山のサイズは $2^n$ 未満である。
- 同じサイズの山はない。

上の条件を満たすような、二ムの勝利ポジション (先手が必勝戦略を持つようなポジション) の数を $W(n)$ とします 。

例えば、$W(1) = 1$, $W(2) = 6$, $W(3) = 168$, $W(5) = 19\\,764\\,360$, $W(100)\bmod 1\\,000\\,000\\,007 = 384\\,777\\,056$ です。

$W(10\\,000\\,000)\bmod 1\\,000\\,000\\,007$ を求めなさい。

# --hints--

`nimExtreme()` は `253223948` を返す必要があります。

```js
assert.strictEqual(nimExtreme(), 253223948);
```

# --seed--

## --seed-contents--

```js
function nimExtreme() {

  return true;
}

nimExtreme();
```

# --solutions--

```js
// solution required
```
