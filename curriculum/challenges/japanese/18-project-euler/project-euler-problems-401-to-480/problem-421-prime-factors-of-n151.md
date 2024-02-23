---
id: 5900f5131000cf542c510024
title: '問題 421: n^15 + 1 の素因数'
challengeType: 1
forumTopicId: 302091
dashedName: problem-421-prime-factors-of-n151
---

# --description--

$n > 1$ を満たすすべての整数について、$n^{15} + 1$ で表される数は合成数です。

正の整数 $n$, $m$ について、$m$ を超えない $n^{15} + 1$ の相異なる素因数の和を $s(n, m)$ と定義します。

例: $2^{15} + 1 = 3 × 3 × 11 × 331$

したがって、$s(2, 10) = 3$, $s(2, 1000) = 3 + 11 + 331 = 345$ となります。

同様に、${10}^{15} + 1 = 7 × 11 × 13 × 211 × 241 × 2161 × 9091$ です。

したがって、$s(10, 100) = 31$, $s(10, 1000) = 483$ となります。

$1 ≤ n ≤ {10}^{11}$ のとき、$\sum s(n, {10}^8)$ を求めなさい。

# --hints--

`primeFactorsOfN15Plus1()` は `2304215802083466200` を返す必要があります。

```js
assert.strictEqual(primeFactorsOfN15Plus1(), 2304215802083466200);
```

# --seed--

## --seed-contents--

```js
function primeFactorsOfN15Plus1() {

  return true;
}

primeFactorsOfN15Plus1();
```

# --solutions--

```js
// solution required
```
