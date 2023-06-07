---
id: 5900f4c31000cf542c50ffd5
title: '問題 342: 平方数のトーティエントが立方数であるような数'
challengeType: 1
forumTopicId: 302001
dashedName: problem-342-the-totient-of-a-square-is-a-cube
---

# --description--

50 という数について考えます。

${50}^2 = 2500 = 2^2 × 5^4$ なので、$φ(2500) = 2 × 4 × 5^3 = 8 × 5^3 = 2^3 × 5^3$ です。 $φ$ はオイラーのトーティエント関数を表します。

したがって、2500 は平方数であり、$φ(2500)$ は立方数です。

$1 &lt; n &lt; ^ {10}^{10}$ のとき、$φ(n^2)$ が立方数であるような数 $n$ の総和を求めなさい。


# --hints--

`totientOfSquare()` は `5943040885644` を返す必要があります。

```js
assert.strictEqual(totientOfSquare(), 5943040885644);
```

# --seed--

## --seed-contents--

```js
function totientOfSquare() {

  return true;
}

totientOfSquare();
```

# --solutions--

```js
// solution required
```
