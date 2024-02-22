---
id: 5900f5071000cf542c510018
title: '問題 410: 円と接線'
challengeType: 1
forumTopicId: 302079
dashedName: problem-410-circle-and-tangent-line
---

# --description--

半径 $r$, $x^2 + y^2 = r^2$ の円を $C$ とします。 2 つの点 $P(a, b)$, $Q(-a, c)$ を通過する線が $C$ の接線となるように、$P$, $Q$ を選びます。

例えば、四つ組数 $(r, a, b, c) = (2, 6, 2, -7)$ はこの性質を満たしています。

$0 &lt; r ≤ R$, $0 &lt; a ≤ X$ のとき、この性質を持つ四つ組整数 $(r, a, b, c)$ の個数を $F(R, X)$ とします。

$F(1, 5) = 10$, $F(2, 10) = 52$, $F(10, 100) = 3384$ であることを確認できます。

$F({10}^8, {10}^9) + F({10}^9, {10}^8)$ を求めなさい。

# --hints--

`circleAndTangentLine()` は `799999783589946600` を返す必要があります 。

```js
assert.strictEqual(circleAndTangentLine(), 799999783589946600);
```

# --seed--

## --seed-contents--

```js
function circleAndTangentLine() {

  return true;
}

circleAndTangentLine();
```

# --solutions--

```js
// solution required
```
