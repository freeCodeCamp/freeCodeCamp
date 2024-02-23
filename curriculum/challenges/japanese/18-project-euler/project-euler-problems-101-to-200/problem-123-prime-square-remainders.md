---
id: 5900f3e71000cf542c50fefa
title: '問題 123: 素数の平方数で除した余り'
challengeType: 1
forumTopicId: 301750
dashedName: problem-123-prime-square-remainders
---

# --description--

$n$ 番目の素数 (2, 3, 5, 7, 11, ...) を $p_n$ とし、${(p_n−1)}^n + {(p_n+1)}^n$ を ${p_n}^2$ で除した余りを $r$ とします。

例えば、$n = 3 のとき、p_3 = 5$, $4^3 + 6^3 = 280 ≡ 5\\ mod\\ 25$ となります。

余りが初めて $10^9$ を超える $n$ の最小値は 7037です。

余りが初めて $10^{10}$ を超える $n$ の最小値を求めなさい。

# --hints--

`primeSquareRemainders()` は `21035` を返す必要があります。

```js
assert.strictEqual(primeSquareRemainders(), 21035);
```

# --seed--

## --seed-contents--

```js
function primeSquareRemainders() {

  return true;
}

primeSquareRemainders();
```

# --solutions--

```js
// solution required
```
