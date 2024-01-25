---
id: 5900f3f21000cf542c50ff05
title: '問題 134：素數對連接'
challengeType: 1
forumTopicId: 301762
dashedName: problem-134-prime-pair-connection
---

# --description--

Consider the consecutive primes $p_1 = 19$ and $p_2 = 23$. It can be verified that 1219 is the smallest number such that the last digits are formed by $p_1$ whilst also being divisible by $p_2$.

事實上，除了 $p_1 = 3$ 和 $p_2 = 5$ 之外，對於每對連續的素數，$p_2 > p_1$，都存在 $n$ 的值，其最後一位數字由 $p_1$ 組成而 $n$ 可以被 $p_2$ 整除。 記 $S$ 爲這種 $n$ 中的最小值。

對連續素數對 $5 ≤ p_1 ≤ 1000000$ 求 $\sum{S}$。

# --hints--

`primePairConnection()` 應得 `18613426663617120`。

```js
assert.strictEqual(primePairConnection(), 18613426663617120);
```

# --seed--

## --seed-contents--

```js
function primePairConnection() {

  return true;
}

primePairConnection();
```

# --solutions--

```js
// solution required
```
