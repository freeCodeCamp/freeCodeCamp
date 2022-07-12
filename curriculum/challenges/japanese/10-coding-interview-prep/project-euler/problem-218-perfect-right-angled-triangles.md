---
id: 5900f4461000cf542c50ff59
title: '問題 218: 完全直角三角形'
challengeType: 1
forumTopicId: 301860
dashedName: problem-218-perfect-right-angled-triangles
---

# --description--

辺 $a=7$, $b=24$, $c=25$ の直角三角形について考えます。

この三角形の面積は 84 で、完全数 6 と 28 で割り切れます。

また、$gcd(a,b) = 1$ かつ $gcd(b,c) = 1$ なので、この三角形は原始的 (primitive) な直角三角形です。

さらに、$c$ は完全平方数です。

次の条件を満たす三角形を「完全直角三角形」と呼ぶことにします。

- 原始的な直角三角形である
- 斜辺が完全平方数である

次の条件を満たす三角形を「超完全直角三角形」と呼ぶことにします。

- 完全直角三角形である
- 面積が 6 と 28 の完全数の倍数である

$c ≤ {10}^{16}$ のとき、超完全ではない完全直角三角形はいくつありますか。

# --hints--

`perfectRightAngledTriangles()` は `0` を返す必要があります。

```js
assert.strictEqual(perfectRightAngledTriangles(), 0);
```

# --seed--

## --seed-contents--

```js
function perfectRightAngledTriangles() {

  return true;
}

perfectRightAngledTriangles();
```

# --solutions--

```js
// solution required
```
