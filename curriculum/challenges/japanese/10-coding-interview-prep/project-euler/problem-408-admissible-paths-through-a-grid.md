---
id: 5900f5091000cf542c51001b
title: '問題 408: 格子内の許容的経路'
challengeType: 1
forumTopicId: 302076
dashedName: problem-408-admissible-paths-through-a-grid
---

# --description--

$x$, $y$, $x + y$ がすべて正の完全平方数の場合、格子点 ($x$, $y$) を「非許容的」と表現することにします。

例えば、(9, 16) は非許容的な点ですが、(0, 4), (3, 1), (9, 4) はそうではありません。

点 ($x_1$, $y_1$) から点 ($x_2$, $y_2$) へ、北方向または東方向への単位ステップのみで移動する場合の経路を考えます。 経路上の中間点がいずれも非許容的ではない場合、そのような経路を「許容的」と表現することにします。

(0, 0) から ($n$, $n$) までの許容的な経路の数を $P(n)$ とします。 $P(5) = 252$, $P(16) = 596\\,994\\,440$, $P(1\\,000)\bmod 1\\,000\\,000\\,007 = 341\\,920\\,854$ であることを確認できます。

$P(10\\,000\\,000)\bmod 1\\,000\\,000\\,007$ を求めなさい。

# --hints--

`admissiblePaths()`は `299742733` を返す必要があります。

```js
assert.strictEqual(admissiblePaths(), 299742733);
```

# --seed--

## --seed-contents--

```js
function admissiblePaths() {

  return true;
}

admissiblePaths();
```

# --solutions--

```js
// solution required
```
