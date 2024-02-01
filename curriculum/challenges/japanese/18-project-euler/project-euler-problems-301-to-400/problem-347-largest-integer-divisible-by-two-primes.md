---
id: 5900f4c81000cf542c50ffd9
title: '問題 347: 2 つの素数で割り切れる最大の整数'
challengeType: 1
forumTopicId: 302006
dashedName: problem-347-largest-integer-divisible-by-two-primes
---

# --description--

素数のうち 2 と 3 の両方のみで割り切れる最大の整数 ($≤ 100$) は 96 であり、$96 = 32 \times 3 = 2^5 \times 3$ となります。

2 つの相異なる素数 $p$ と $q$ について、$p$ と $q$ の両方のみで割り切れる、$N$ 以下の最大の正の整数を $M(p, q, N)$ とします。そのような正の整数が存在しない場合は $M(p. q, N)=0$ とします。

例: $M(2, 3, 100) = 96$

$M(3, 5, 100) = 75$ であり 90 ではありません。90 は 2, 3, 5 で割り切れるからです。 また、$M(2, 73, 100) = 0$ です。2 と 73 の両方で割り切れる 100 以下の正の整数が存在しないためです。

相異なる $M(p, q, N)$ の総和を $S(N)$ とします。 $S(100)=2262$ となります。

$S(10\\,000\\,000)$ を求めなさい。

# --hints--

`integerDivisibleByTwoPrimes()` は `11109800204052` を返す必要があります。

```js
assert.strictEqual(integerDivisibleByTwoPrimes(), 11109800204052);
```

# --seed--

## --seed-contents--

```js
function integerDivisibleByTwoPrimes() {

  return true;
}

integerDivisibleByTwoPrimes();
```

# --solutions--

```js
// solution required
```
