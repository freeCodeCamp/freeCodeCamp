---
id: 5900f4831000cf542c50ff95
title: '問題 278: 半素数の線型結合'
challengeType: 1
forumTopicId: 301928
dashedName: problem-278-linear-combinations-of-semiprimes
---

# --description--

整数 $1 &lt; a_1 &lt; a_2 &lt; \ldots &lt; a_n$ について、整数値 $q_k ≥ 0$ のみを使った線形結合 $q_1a_1 + q_2a_2 + \ldots + q_na_n = b$ を考えます。

なお、与えられた $a_k$ の組に対し、すべての $b$ 値が可能とは限りません。 例えば、$a_1 = 5$ かつ $a_2 = 7$ の場合、$b$ が 1, 2, 3, 4, 6, 8, 9, 11, 13, 16, 18, 23 のいずれかになり得るような $q_1 ≥ 0$ と $q_2 ≥ 0$ は存在しません。

実際、$a_1 = 5$ かつ $a_2 = 7$ に対して $b$ 値になり得ない最大の数は 23 です。 これを $f(5, 7) = 23$ と定義します。 同様に、$f(6, 10, 15) = 29$ および $f(14, 22, 77) = 195$ であることを示せます。

$p$, $q$, $r$ が素数であり $p &lt; q &lt; r &lt; 5000$ のとき、$\sum f(pq,pr,qr)$ を求めなさい。

# --hints--

`linearCombinationOfSemiprimes()` は `1228215747273908500` を返す必要があります。

```js
assert.strictEqual(linearCombinationOfSemiprimes(), 1228215747273908500);
```

# --seed--

## --seed-contents--

```js
function linearCombinationOfSemiprimes() {

  return true;
}

linearCombinationOfSemiprimes();
```

# --solutions--

```js
// solution required
```
