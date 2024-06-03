---
id: 5900f3db1000cf542c50feee
title: '问题 111：带游程的素数'
challengeType: 1
forumTopicId: 301736
dashedName: problem-111-primes-with-runs
---

# --description--

Considering 4-digit primes containing repeated digits it is clear that they cannot all be the same: 1111 is divisible by 11, 2222 is divisible by 22, and so on. But there are nine 4-digit primes containing three ones:

$$1117, 1151, 1171, 1181, 1511, 1811, 2111, 4111, 8111$$

我们应该说 $M(n, d)$ 表示一个 n 位素数的最大重复位数，其中 d 是重复位数，$N(n, d)$ 表示这样的素数，$S(n, d)$ 表示这些素数的总和。

所以 $M(4, 1) = 3$ 是 4 位素数的最大重复位数，其中一个是重复位数，有 $N(4, 1) = 9$ 这样的素数，以及这些质数是 $S(4, 1) = 22275$。 事实证明，对于 d = 0，仅可能有 $M(4, 0) = 2$ 个重复数字，但存在 $N(4, 0) = 13$ 这样的情况。

以同样的方式，我们得到以下 4 位素数的结果。

| Digit, d | $M(4, d)$ | $N(4, d)$ | $S(4, d)$ |
| -------- | --------- | --------- | --------- |
| 0        | 2         | 13        | 67061     |
| 1        | 3         | 9         | 22275     |
| 2        | 3         | 1         | 2221      |
| 3        | 3         | 12        | 46214     |
| 4        | 3         | 2         | 8888      |
| 5        | 3         | 1         | 5557      |
| 6        | 3         | 1         | 6661      |
| 7        | 3         | 9         | 57863     |
| 8        | 3         | 1         | 8887      |
| 9        | 3         | 7         | 48073     |

对于 d = 0 到 9，所有 $S(4, d)$ 的总和为 273700。 找出所有 $S(10, d)$ 的总和。

# --hints--

`primesWithRuns()` 应该返回 `612407567715`。

```js
assert.strictEqual(primesWithRuns(), 612407567715);
```

# --seed--

## --seed-contents--

```js
function primesWithRuns() {

  return true;
}

primesWithRuns();
```

# --solutions--

```js
// solution required
```
